import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useRef } from 'react';
import { Video, AVPlaybackStatusSuccess, AVPlaybackSource } from 'expo-av';
import Slider from 'react-native-slider';
import PlaySvg from '../../assets/svgs/play.svg';

interface props {
  vid: string;
  updateDuration: (val: number) => void;
}
const CustomVideo: React.FC<props> = ({ vid, updateDuration }) => {
  const videoRef = useRef<Video>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatusSuccess>();

  const playOrPause = () => {
    if (status?.isPlaying) videoRef.current?.pauseAsync();
    else videoRef.current?.playAsync();
  };

  const sendDuration = () => {
    if (status?.durationMillis)
      updateDuration(status?.durationMillis as number);
  };

  return (
    <View style={styles.mainCont}>
      <View style={styles.vidCont}>
        <Video
          source={vid as unknown as AVPlaybackSource}
          ref={videoRef}
          style={styles.vid}
          onPlaybackStatusUpdate={(status) =>
            setStatus(status as AVPlaybackStatusSuccess)
          }
          progressUpdateIntervalMillis={800}
          rate={1.0}
          onReadyForDisplay={sendDuration}
          // resizeMode goes dumb but works
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          resizeMode="cover"
        />
        <TouchableOpacity
          style={[styles.overlay, !status?.isPlaying && styles.darker]}
          onPress={playOrPause}
        >
          {!status?.isPlaying && <PlaySvg width={70} height={70} />}
        </TouchableOpacity>
      </View>

      <Slider
        style={styles.slider}
        maximumValue={status?.durationMillis}
        value={status?.positionMillis}
        onValueChange={(slide: number) =>
          videoRef.current?.setPositionAsync(slide)
        }
        minimumTrackTintColor="#7B7B7B"
        maximumTrackTintColor="#C4C4C4"
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
      />
      <Text style={styles.durationTxt}>
        {!!status && formatTime(status?.positionMillis as number)}
      </Text>
    </View>
  );
};

export default CustomVideo;

const formatTime = (millis: number) => {
  let minutes: string | number = Math.floor(millis / 60000);
  const seconds = +((millis % 60000) / 1000).toFixed(0);

  if (minutes < 10) minutes = '0' + minutes;
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const styles = StyleSheet.create({
  mainCont: {
    alignItems: 'center',
    width: '100%',
  },
  vidCont: {
    width: '90%',
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  vid: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  overlay: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  darker: {
    backgroundColor: 'rgba(0, 0, 0, 0.10)',
  },
  slider: {
    width: '90%',
    marginTop: -4,
  },
  durationTxt: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    color: '#7B7B7B',
    fontFamily: 'MontserratMedium',
    fontSize: 12,
    marginTop: -13,
  },
  thumb: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: '#7B7B7B',
    borderColor: '#C4C4C4',
    borderWidth: 1.5,
  },
  track: {
    height: 2,
  },
});
