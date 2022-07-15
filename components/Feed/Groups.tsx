import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import profilePics from '../../data/profilePics/profilePics';
import AddSvg from '../../assets/svgs/addplus.svg';

const data = [
  { name: 'Grupa 1' },
  { name: 'Grupa 2' },
  { name: 'Grupa 3' },
  { name: 'Grupa 4' },
];
const Groups = () => {
  return (
    <View style={styles.mainCont}>
      <Text style={styles.header}>Grupy</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderItem name={item.name} />}
        keyExtractor={(item) => item.name}
        style={styles.flist}
        horizontal={true}
      />
    </View>
  );
};
export default Groups;

const RenderItem: React.FC<{ name: string }> = ({ name }) => {
  return (
    <View style={styles.ritem}>
      <View style={styles.cont}>
        <Image source={profilePics[4]} style={styles.img1} />
        <Image source={profilePics[6]} style={styles.img2} />
        <TouchableOpacity style={styles.add}>
          <AddSvg width={20} height={20} />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    paddingBottom: 35,
  },
  header: {
    color: '#28235F',
    fontFamily: 'MontserratBold',
    fontSize: 20,
    marginLeft: '5%',
  },
  flist: {
    marginTop: 22,
    paddingLeft: '5%',
  },
  ritem: {
    marginRight: 22,
  },
  cont: {
    flexDirection: 'row',
  },
  img1: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  img2: {
    width: 60,
    height: 60,
    borderColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
    marginLeft: -20,
  },
  add: {
    alignSelf: 'flex-end',
    marginLeft: -20,
  },
  name: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
    textAlign: 'center',
    marginTop: 2,
  },
});
