import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import profilePics from '../../data/profilePics/profilePics';
import data from '../../data/specialists.json';

const Specialists: React.FC<{ header: string }> = ({ header }) => {
  return (
    <View style={styles.mainCont}>
      <Text style={styles.header}>{header}</Text>
      <FlatList
        data={data as specialistData[]}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        style={styles.flist}
      />
    </View>
  );
};
export default Specialists;

const RenderItem: React.FC<{ item: specialistData }> = ({ item }) => {
  const [isFollowed, setIsFollowed] = useState(item.followed);

  const updateFollowed = () => {
    setIsFollowed((prev) => {
      const indx = data.findIndex((e) => e.id === item.id);
      data[indx].followed = !prev;
      return !prev;
    });
  };

  return (
    <View style={styles.ritem}>
      <Image source={profilePics[item.profilePicIndex]} style={styles.img} />
      <Text style={styles.fname}>{item.firstName}</Text>
      <Text style={styles.lname}>{item.lastName}</Text>
      <TouchableOpacity
        style={[styles.btn, isFollowed && styles.btnFollowed]}
        onPress={updateFollowed}
      >
        <Text style={[styles.btnTxt, isFollowed && styles.btnTxtFollowed]}>
          {isFollowed ? 'Obserwujesz' : 'Obserwuj'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    marginTop: 10,
    paddingBottom: 30,
  },
  header: {
    marginLeft: '5%',
    color: '#28235F',
    fontFamily: 'MontserratBold',
    fontSize: 20,
  },
  flist: {
    marginTop: 22,
    paddingLeft: '5%',
  },
  ritem: {
    marginRight: 26,
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  fname: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
    textAlign: 'center',
    marginTop: 4,
  },
  lname: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
    textAlign: 'center',
    marginTop: -4,
  },
  btn: {
    borderColor: '#28235F',
    borderWidth: 2,
    paddingVertical: 2,
    width: 105,
    borderRadius: 8,
    marginTop: 8,
  },
  btnTxt: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
    textAlign: 'center',
  },
  btnFollowed: {
    borderColor: '#4FCBC2',
    backgroundColor: '#4FCBC2',
  },
  btnTxtFollowed: {
    color: '#fff',
  },
});
