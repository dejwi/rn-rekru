import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

interface props {
  current: 'tab' | 'articles' | 'video' | 'podcasts';
}
const Categories: React.FC<props> = ({ current }) => {
  return (
    <ScrollView
      style={styles.mainCont}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Category name="Tablica" selected={current === 'tab'} />
      <Category name="Artykuły" selected={current === 'articles'} />
      <Category name="Wideo" selected={current === 'video'} />
      <Category name="Podcasty" selected={current === 'podcasts'} />
      <View style={styles.blank}></View>
    </ScrollView>
  );
};

export default Categories;

const Category: React.FC<{ name: string; selected: boolean }> = ({
  name,
  selected,
}) => {
  return (
    <View style={[styles.categ, selected && styles.categSelected]}>
      <Text style={[styles.txt, selected && styles.txtSelected]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: 'row',
    marginTop: 23,
    paddingLeft: 22,
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
