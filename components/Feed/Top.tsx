import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import AddPostSvg from '../../assets/svgs/addpost.svg';
import CalendarSvg from '../../assets/svgs/calendar.svg';
import AddPeopleSvg from '../../assets/svgs/addpeople.svg';
import profilePic from '../../assets/imgs/profpic.png';

const Top = () => {
  return (
    <View style={styles.mainCont}>
      <View style={styles.svgsCont}>
        <AddPostSvg style={styles.svg} />
        <CalendarSvg style={styles.svg} />
        <AddPeopleSvg style={styles.svg} fill="#28235F" />
      </View>
      <Image source={profilePic} style={styles.prof} />
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  svgsCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  prof: {
    width: 50,
    height: 50,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 50,
  },
  svg: {
    marginRight: 35,
    width: 28,
    height: 28,
  },
});
