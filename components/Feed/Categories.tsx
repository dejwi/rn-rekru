import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Categories: React.FC<props> = ({ current, updateCurrent }) => {
  const Category: React.FC<props2> = ({ name, tab }) => {
    const selected = tab === current;
    return (
      <TouchableOpacity
        style={[styles.categ, selected && styles.categSelected]}
        onPress={() => updateCurrent(tab)}
      >
        <Text style={[styles.txt, selected && styles.txtSelected]}>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <ScrollView
        style={styles.mainCont}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Category name="Tablica" tab="board" />
        <Category name="Wydarzenia" tab="events" />
        <Category name="Artykuły" tab="articles" />
        <Category name="Wideo" tab="video" />
        <Category name="Podcasty" tab="podcasts" />
        <View style={styles.blank}></View>
      </ScrollView>
    </View>
  );
};

export default Categories;

interface props {
  current: tabs;
  updateCurrent: (tab: tabs) => void;
}
interface props2 {
  name: string;
  tab: tabs;
}

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: 'row',
    marginTop: 18,
    paddingLeft: 22,
    paddingBottom: 2,
  },
  blank: {
    width: 30,
  },
  categ: {
    borderColor: '#7B7B7B',
    borderWidth: 2,
    width: 100,
    paddingVertical: 6,
    marginRight: 10,
    borderRadius: 12,
  },
  txt: {
    color: '#7B7B7B',
    fontFamily: 'MontserratSemiBold',
    fontSize: 13,
    textAlign: 'center',
  },
  categSelected: {
    backgroundColor: '#4fcbc2',
    borderColor: '#4fcbc2',
  },
  txtSelected: {
    color: '#fff',
  },
});
