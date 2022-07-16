import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ArrowSvg from '../assets/svgs/arrow.svg';
import {
  useRoute,
  RouteProp,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import data from '../data/articles.json';
import images from '../data/images/images';

const ArticleFull = () => {
  const { id } = useRoute<RouteProp<RootStackParamList, 'Article'>>().params;
  const article = data.find((e) => e.id === id);
  const nav = useNavigation<NavigationProp<RootStackParamList>>();

  if (!article) return null;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainCont}>
          <TouchableOpacity style={styles.backbtn} onPress={() => nav.goBack()}>
            <ArrowSvg width={20} height={20} />
          </TouchableOpacity>
          <Text style={styles.title}>{article.title}</Text>
          <Image source={images[article.imgIndex]} style={styles.img} />
          <Text style={styles.content}>{article.content}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default ArticleFull;

const styles = StyleSheet.create({
  mainCont: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  backbtn: {
    position: 'absolute',
    marginTop: 5,
  },
  title: {
    textAlign: 'center',
    color: '#28235F',
    fontFamily: 'MontserratBold',
    fontSize: 18,
    lineHeight: 28,
    width: '75%',
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginTop: 20,
  },
  content: {
    marginTop: 14,
    color: '#28235F',
    fontFamily: 'MontserratRegular',
    lineHeight: 22,
    fontSize: 16,
  },
});
