import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Top from '../components/Feed/Top';
import Search from '../components/Feed/Search';
import Categories from '../components/Feed/Categories';

const Feed = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f2f2' }}>
      <StatusBar backgroundColor="#f3f2f2" barStyle="dark-content" />
      <ScrollView>
        <Top />
        <Search />
        <Categories current="tab" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
