import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import AddPostSvg from '../../assets/svgs/addpost.svg';
import CalendarSvg from '../../assets/svgs/calendar.svg';
import AddPeopleSvg from '../../assets/svgs/addpeople.svg';
import profilePics from '../../data/profilePics/profilePics';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const Top = () => {
  const nav = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.mainCont}>
      <View style={styles.svgsCont}>
        <TouchableOpacity onPress={() => nav.navigate('NewPost')}>
          <AddPostSvg style={styles.svg} />
        </TouchableOpacity>
        <CalendarSvg style={styles.svg} />
        <AddPeopleSvg style={styles.svg} fill="#28235F" />
      </View>
      <Image source={profilePics[7]} style={styles.prof} />
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
    width: 55,
    height: 55,
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
