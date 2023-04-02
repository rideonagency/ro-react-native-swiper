/**
 * @format
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
import AutoPlay from './components/AutoPlay';
import AutoPlayImages from './components/AutoPlayImages';
import Basic from './components/Basic' // Only update index when scrollEnd
import DisableButton from './components/DisableButton'
import Loop from './components/Loop'
import Dynamic from './components/Dynamic'
import LoadMinimal from './components/LoadMinimal' // flicker existing when shift from last to first on Android (or last to first)
import NestSwiper from './components/NestSwiper'
import Phone from './components/Phone'
import Swiper from './components/Swiper' // working but no title displayed, direction vertical not work well on android
import SwiperNumber from './components/SwiperNumber' // working but no title displayed
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    name: 'AutoPlay'
  },
  {
    name: 'AutoPlayImages'
  },
  {
    name: 'Basic'
  },
  {
    name: 'DisableButton'
  },
  {
    name: 'Dynamic'
  },
  {
    name: 'Loop'
  },
  {
    name: 'LoadMinimal'
  },
  {
    name: 'NestSwiper'
  },
  {
    name: 'Phone'
  },
  {
    name: 'Swiper'
  },
  {
    name: 'SwiperNumber'
  }
];

function Item({ title, navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(title)}>
      <View testID={title} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item navigation={navigation} title={item.name}></Item>
        )}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  )
}

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AutoPlay" component={AutoPlay} />
        <Stack.Screen name="AutoPlayImages" component={AutoPlayImages} />
        <Stack.Screen name="Basic" component={Basic} />
        <Stack.Screen name="DisableButton" component={DisableButton} />
        <Stack.Screen name="Loop" component={Loop} />
        <Stack.Screen name="Dynamic" component={Dynamic} />
        <Stack.Screen name="LoadMinimal" component={LoadMinimal} />
        <Stack.Screen name="NestSwiper" component={NestSwiper} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Swiper" component={Swiper} />
        <Stack.Screen name="SwiperNumber" component={SwiperNumber} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#ede',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 24
  }
});

export default App;
