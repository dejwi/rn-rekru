import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Top from '../components/Feed/Top';
import Search from '../components/Feed/Search';
import Categories from '../components/Feed/Categories';
import Board from '../components/Feed/tabs/Board';

const Feed = () => {
  const [current, setCurrent] = useState<tabs>('board');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f2f2' }}>
      <StatusBar backgroundColor="#f3f2f2" barStyle="dark-content" />
      <Top />
      <Search />
      <Categories current={current} updateCurrent={(tab) => setCurrent(tab)} />
      {current === 'board' && <Board />}
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
