import { StyleSheet, View, TouchableOpacity } from 'react-native';
import React from 'react';
import HomeSvg from '../assets/svgs/home.svg';
import ChatSvg from '../assets/svgs/conversation.svg';
import AddPeopleSvg from '../assets/svgs/addpeople.svg';
import DollarSvg from '../assets/svgs/dollar.svg';
import CircleSvg from '../assets/svgs/circle.svg';

const Navbar = () => {
  return (
    <View style={styles.mainCont}>
      <TouchableOpacity>
        <HomeSvg style={styles.svg} fill="#fff" />
        <CircleSvg style={{ alignSelf: 'center', marginTop: 6 }} />
      </TouchableOpacity>

      <TouchableOpacity>
        <ChatSvg style={styles.svg} fill="#fff" />
      </TouchableOpacity>

      <TouchableOpacity>
        <AddPeopleSvg style={styles.svg} fill="#fff" />
      </TouchableOpacity>

      <TouchableOpacity>
        <DollarSvg style={styles.svg} fill="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: 'row',
    backgroundColor: '#4fcbc2',
    justifyContent: 'space-evenly',
    paddingTop: 18,
    paddingBottom: 12,
  },
  svg: {
    width: 26,
    height: 26,
  },
});
