import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState } from 'react';
import profilePics from '../data/profilePics/profilePics';
import AddPicSvg from '../assets/svgs/addpic.svg';
import ArrowSvg from '../assets/svgs/arrow.svg';
import posts from '../data/board.json';
import uuid from 'react-native-uuid';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const NewPost = () => {
  const nav = useNavigation<NavigationProp<RootStackParamList>>();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addPost = () => {
    if (!title || !content) return;
    const temp: boardData = {
      content,
      title,
      fullName: 'Michelle Awad',
      id: uuid.v4().toString(),
      imgIndex: null,
      liked: false,
      profilePicIndex: 7,
    };
    posts.push(temp);
    nav.navigate('Feed');
  };

  return (
    <SafeAreaView style={styles.mainCont}>
      <View style={styles.headerCont}>
        <TouchableOpacity onPress={() => nav.goBack()}>
          <ArrowSvg width={20} height={20} />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Nowy post</Text>
        <TouchableOpacity onPress={addPost}>
          <Text style={styles.addTxt}>Dodaj</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <View style={styles.titleCont}>
        <Text style={styles.titleTxt}>Dodaj tytuł:</Text>
        <TextInput
          placeholder="Lorem ipsum..."
          style={styles.titleInput}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.line} />

      <View style={styles.contentCont}>
        <Image source={profilePics[7]} style={styles.prof} />
        <View style={styles.contentInputCont}>
          <TextInput
            placeholder="Napisz coś..."
            multiline={true}
            style={styles.contentInput}
            value={content}
            onChangeText={setContent}
            numberOfLines={6}
          />
        </View>
      </View>

      <View style={styles.line} />

      <TouchableOpacity style={styles.imgBtn}>
        <AddPicSvg width={25} height={25} />
        <Text style={styles.imgTxt}>Dodaj zdjęcie</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default NewPost;

const marg = 30;
const styles = StyleSheet.create({
  mainCont: {},
  headerCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 10,
    marginBottom: 30,
  },
  headerTxt: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
    fontSize: 20,
  },
  addTxt: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
  },
  line: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    height: 1,
  },
  titleCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: marg,
    paddingVertical: 14,
  },
  titleTxt: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
  },
  titleInput: {
    fontFamily: 'MontserratMedium',
    flex: 1,
    marginLeft: 10,
  },
  contentCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: marg,
  },
  prof: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#fff',
  },
  contentInputCont: {
    marginLeft: 10,
    minHeight: 120,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentInput: {
    fontFamily: 'MontserratMedium',
    width: '100%',
  },
  imgBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: marg,
    marginTop: 12,
  },
  imgTxt: {
    color: '#28235F',
    fontFamily: 'MontserratSemiBold',
    marginLeft: 4,
  },
});
