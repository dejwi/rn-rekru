import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import CustomVideo from '../CustomVideo';
import HeartSvg from '../../../assets/svgs/heart.svg';
import HeartFullSvg from '../../../assets/svgs/heartFull.svg';
import videos from '../../../data/vids/videos';
import data from '../../../data/vids.json';

const Viedos = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item) => item.id}
      style={styles.flist}
    />
  );
};
export default Viedos;

const RenderItem: React.FC<{ item: vidData }> = ({ item }) => {
  const [duration, setDuration] = useState(0);
  const [isLiked, setLiked] = useState(item.liked);

  const updateLiked = () => {
    setLiked((prev) => {
      const indx = data.findIndex((e) => e.id === item.id);
      data[indx].liked = !prev;
      return !prev;
    });
  };

  return (
    <View style={styles.mainCont}>
      <CustomVideo
        vid={videos[item.vidIndex]}
        updateDuration={(val) => setDuration(val)}
      />
      <View style={styles.secondCont}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.time}>Czas trwania {formatTime(duration)} min</Text>
        <TouchableOpacity style={styles.btnCont} onPress={updateLiked}>
          {isLiked ? (
            <HeartFullSvg width={30} height={30} />
          ) : (
            <HeartSvg width={30} height={30} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const formatTime = (millis: number) => {
  const minutes = Math.floor(millis / 60000);
  const seconds = +((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};

const styles = StyleSheet.create({
  mainCont: {
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 25,
  },
  flist: {
    marginTop: 10,
  },
  secondCont: {
    width: '90%',
    marginTop: 8,
  },
  title: {
    color: '#28235F',
    fontFamily: 'MontserratBold',
    fontSize: 18,
  },
  author: {
    color: '#7B7B7B',
    fontFamily: 'MontserratSemiBold',
    fontSize: 13,
    marginTop: 1,
  },
  time: {
    color: '#7B7B7B',
    fontFamily: 'MontserratMedium',
    fontSize: 11,
    marginTop: 5,
  },
  btnCont: {
    position: 'absolute',
    alignSelf: 'flex-end',
  },
});
