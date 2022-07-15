import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import data from '../../../data/tab';
import HeartSvg from '../../../assets/svgs/heart.svg';
import HeartFullSvg from '../../../assets/svgs/heartFull.svg';

const Board = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <RenderItem item={item} />}
      keyExtractor={(item) => item.id}
      style={styles.flist}
    />
  );
};
export default Board;

const RenderItem: React.FC<{ item: tablicaData }> = ({ item }) => {
  const canExpand = item.content.length > 50;
  const [isExpanded, setIsExpanded] = useState(false);

  const [isLiked, setIsLiked] = useState(false);

  return (
    <View style={styles.ritem}>
      <View style={styles.namepicCont}>
        <Image
          source={item.profilePic as ImageSourcePropType}
          style={styles.profPic}
        />
        <Text style={styles.fname}>{item.fullName}</Text>
      </View>

      {!!item.img && (
        <Image source={item.img as ImageSourcePropType} style={styles.img} />
      )}

      <View style={styles.titleHeartCont}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.heartCont}>
          <TouchableOpacity onPress={() => setIsLiked((prev) => !prev)}>
            {isLiked ? (
              <HeartFullSvg width={28} height={28} />
            ) : (
              <HeartSvg width={28} height={28} />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Text style={styles.content}>
          {canExpand && !isExpanded
            ? item.content.slice(0, 50).trim() + '...'
            : item.content}
        </Text>
        {canExpand && !isExpanded && (
          <Text style={styles.moreTxt} onPress={() => setIsExpanded(true)}>
            Więcej
          </Text>
        )}
        <Text style={styles.timeTxt}>6 godzin temu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flist: {
    marginTop: 10,
  },
  ritem: {
    alignSelf: 'center',
    width: '90%',
    marginBottom: 24,
  },
  profPic: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  title: {
    fontFamily: 'MontserratSemiBold',
    color: '#28235F',
  },
  fname: {
    fontFamily: 'MontserratSemiBold',
    color: '#28235F',
    marginLeft: 12,
  },
  content: {
    fontFamily: 'MontserratMedium',
    color: '#7B7B7B',
    marginTop: 2,
    lineHeight: 16,
  },
  namepicCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleHeartCont: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 2,
  },
  heartCont: {
    flex: 1,
    alignItems: 'flex-end',
  },
  moreTxt: {
    color: '#4FCBC2',
    fontFamily: 'MontserratMedium',
    alignSelf: 'flex-end',
    marginTop: -15,
  },
  timeTxt: {
    color: '#7B7B7B',
    fontFamily: 'MontserratMedium',
    fontSize: 11,
  },
  img: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    resizeMode: 'cover',
    marginTop: 10,
    marginBottom: 6.5,
  },
});
