import { StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import Slider from 'react-native-slider';

const CustomSlider: React.FC<props> = ({
  value,
  maximumValue,
  onValueChange,
  style,
}) => {
  return (
    <Slider
      style={style}
      maximumValue={maximumValue}
      value={value}
      onValueChange={onValueChange}
      minimumTrackTintColor="#7B7B7B"
      maximumTrackTintColor="#C4C4C4"
      thumbStyle={styles.thumb}
      trackStyle={styles.track}
    />
  );
};
export default CustomSlider;

interface props {
  style: ViewStyle;
  maximumValue: number;
  value: number;
  onValueChange: (val: number) => void;
}

const styles = StyleSheet.create({
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
