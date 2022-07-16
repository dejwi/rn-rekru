import { SafeAreaView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Top from '../components/Feed/Top';
import Search from '../components/Feed/Search';
import Categories from '../components/Feed/Categories';

import Board from '../components/Feed/tabs/Board';
import Events from '../components/Feed/tabs/Events';
import Articles from '../components/Feed/tabs/Articles';
import Viedos from '../components/Feed/tabs/Viedos';

const Feed = () => {
  const [current, setCurrent] = useState<tabs>('board');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f2f2' }}>
      <StatusBar backgroundColor="#f3f2f2" barStyle="dark-content" />
      <Top />
      <Search />
      <Categories current={current} updateCurrent={(tab) => setCurrent(tab)} />
      {current === 'board' && <Board />}
      {current === 'events' && <Events />}
      {current === 'articles' && <Articles />}
      {current === 'video' && <Viedos />}
    </SafeAreaView>
  );
};

export default Feed;
