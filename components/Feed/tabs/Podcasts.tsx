import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PlaySvg from '../../../assets/svgs/playcircle.svg';
import data from '../../../data/podcasts.json';
import images from '../../../data/images/images';
import CustomSlider from '../CustomSlider';

const Podcasts = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item) => item.id}
      style={styles.flist}
    />
  );
};
export default Podcasts;

const RenderItem: React.FC<{ item: podcastData }> = ({ item }) => {
  return (
    <View style={styles.ritem}>
      <View style={styles.topCont}>
        <View style={styles.imgCont}>
          <Image source={images[item.imgIndex]} style={styles.img} />
        </View>
        <View style={styles.rightCont}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.author}>{item.author}</Text>
          <Text style={styles.time}>Czas trwania {item.length} min</Text>
          <Text style={styles.content}>{item.content}</Text>
        </View>
        <TouchableOpacity style={styles.btnCont}>
          <PlaySvg width={40} height={40} />
        </TouchableOpacity>
      </View>
      <CustomSlider
        maximumValue={100}
        onValueChange={() => null}
        style={styles.slider}
        value={Math.floor(Math.random() * 35)}
      />
      <Text style={styles.timeBottom}>{item.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {},
  flist: {
    paddingTop: 20,
  },
  ritem: {
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  topCont: {
    flexDirection: 'row',
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 12,
  },
  rightCont: {
    flex: 4,
  },
  imgCont: {
    flex: 3,
  },
  title: {
    color: '#28235F',
    fontFamily: 'MontserratBold',
    fontSize: 18,
    marginTop: 2,
  },
  author: {
    color: '#7B7B7B',
    fontFamily: 'MontserratSemiBold',
    fontSize: 12,
    marginTop: -1,
  },
  time: {
    color: '#7B7B7B',
    fontFamily: 'MontserratSemiBold',
    fontSize: 11,
    marginTop: 4,
  },
  content: {
    width: '75%',
    color: '#7B7B7B',
    fontFamily: 'MontserratMedium',
    fontSize: 12,
    marginTop: 10,
  },
  btnCont: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 0,
    bottom: 5,
  },
  timeBottom: {
    color: '#7B7B7B',
    fontFamily: 'MontserratMedium',
    fontSize: 11,
    marginTop: -12,
    alignSelf: 'flex-end',
  },
});
