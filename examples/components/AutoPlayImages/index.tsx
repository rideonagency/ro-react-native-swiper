import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Swiper from 'ro-react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const bannerList = [
  {
    pictureUrl: 'https://picsum.photos/id/237/200/300'
  },
  {
    pictureUrl: 'https://picsum.photos/id/238/200/300'
  },
  {
    pictureUrl: 'https://picsum.photos/id/239/200/300'
  },
  {
    pictureUrl: 'https://picsum.photos/id/240/200/300'
  },
  {
    pictureUrl: 'https://picsum.photos/id/241/200/300'
  },
  {
    pictureUrl: 'https://picsum.photos/id/242/200/300'
  },
  {
    pictureUrl: 'https://picsum.photos/id/243/200/300'
  }
]

export default () => (
  <Swiper style={styles.wrapper} autoplay>
    {bannerList.map((item, index) => {
      return (
        <Image
          key={index.toString()}
          style={styles.slide1}
          source={{ uri: `${item.pictureUrl}` }}
          resizeMode="contain"
        />
      );
    })}
  </Swiper>
)
