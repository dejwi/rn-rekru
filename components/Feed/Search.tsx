import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import SearchSvg from '../../assets/svgs/search.svg';

const Search = () => {
  return (
    <View style={styles.mainCont}>
      <SearchSvg style={styles.svg} />
      <TextInput style={styles.input} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  mainCont: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '88%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingLeft: 12,
    paddingVertical: 8,
    borderRadius: 12,
    marginTop: 25,
  },
  svg: {
    width: 22,
    height: 22,
  },
  input: {
    marginLeft: 5,
    flex: 1,
  },
});
