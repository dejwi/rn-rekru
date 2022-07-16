import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import data from '../../../data/events.json';
import images from '../../../data/images/images';
import moment from 'moment';
import 'moment/locale/pl';

const Events = () => {
  return (
    <FlatList
      data={data as eventsData[]}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
export default Events;

const RenderItem: React.FC<{ item: eventsData }> = ({ item }) => {
  const [joined, setJoined] = useState(item.joined);

  const updateJoined = () => {
    setJoined((prev) => {
      const indx = data.findIndex((e) => e.id === item.id);
      data[indx].joined = !prev;
      return !prev;
    });
  };

  return (
    <View style={styles.ritem}>
      <Image source={images[item.imgIndex]} style={styles.img} />
      <Text style={styles.time}>
        {moment(item.date).locale('pl').format('dd, DD.MM o HH:mm')}
      </Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.pcount}>{item.participants} osób weźmie udział</Text>
      <TouchableOpacity
        style={[styles.btn, joined && styles.btnJoined]}
        onPress={updateJoined}
      >
        <Text style={[styles.btnTxt, joined && styles.txtJoined]}>
          {joined ? 'Weźmiesz udział' : 'Weź udział'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ritem: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 185,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  time: {
    fontFamily: 'MontserratBold',
    color: '#999999',
    fontSize: 12,
    marginTop: 10,
  },
  title: {
    fontFamily: 'MontserratBold',
    color: '#28235F',
  },
  type: {
    fontFamily: 'MontserratSemiBold',
    color: '#999999',
    fontSize: 12,
    marginTop: 2,
  },
  pcount: {
    fontFamily: 'MontserratMedium',
    color: '#999999',
    fontSize: 12,
    marginTop: 4,
  },
  btn: {
    borderColor: '#28235F',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    marginTop: 10,
  },
  btnTxt: {
    textAlign: 'center',
    fontFamily: 'MontserratSemiBold',
    color: '#28235F',
    fontSize: 13,
  },
  btnJoined: {
    borderColor: '#4FCBC2',
    backgroundColor: '#4FCBC2',
  },
  txtJoined: {
    color: '#fff',
  },
});
