import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import data from '../../../data/articles.json';
import images from '../../../data/images/images';
import HeartSvg from '../../../assets/svgs/heart.svg';
import HeartFullSvg from '../../../assets/svgs/heartFull.svg';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const Articles = () => {
  return (
    <FlatList
      data={data as articleData[]}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item) => item.id}
      style={styles.flist}
    />
  );
};
export default Articles;

const RenderItem: React.FC<{ item: articleData }> = ({ item }) => {
  const [isLiked, setIsLiked] = useState(item.liked);
  const nav = useNavigation<NavigationProp<RootStackParamList>>();

  const updateLiked = () => {
    setIsLiked((prev) => {
      const indx = data.findIndex((e) => e.id === item.id);
      data[indx].liked = !prev;
      return !prev;
    });
  };

  const openFull = () => nav.navigate('Article', { id: item.id });

  return (
    <View style={styles.ritem}>
      <TouchableOpacity onPress={openFull}>
        <Image source={images[item.imgIndex]} style={styles.img} />
      </TouchableOpacity>
      <View style={styles.thCont}>
        <TouchableOpacity style={styles.titlebtn} onPress={openFull}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={updateLiked}>
          {isLiked ? (
            <HeartFullSvg width={28} height={28} />
          ) : (
            <HeartSvg width={28} height={28} />
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.readtime}>{item.readTime} czytania</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flist: {
    marginTop: 10,
  },
  ritem: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 20,
  },
  img: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  title: {
    fontFamily: 'MontserratBold',
    fontSize: 17,
    color: '#28235F',
  },
  titlebtn: {
    width: '80%',
  },
  readtime: {
    color: '#7B7B7B',
    fontSize: 12,
    marginTop: 6,
  },
  thCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
