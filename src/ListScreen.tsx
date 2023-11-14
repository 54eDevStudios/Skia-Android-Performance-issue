import {useFocusEffect} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import { useExampleContext } from './ExampleContext';

export const ListScreen = () => {
  const {updateNumber} =  useExampleContext();

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const dataArray = [
    {age: getRandomNumber(18, 40)},
    {age: getRandomNumber(18, 40)},
    {age: getRandomNumber(18, 40)},
    {age: getRandomNumber(18, 40)},
  ];

  const onRefresh = async () => {
    try {
      updateNumber(getRandomNumber(1, 40));
    } catch (error) {}
  };

  useFocusEffect(
    React.useCallback(() => {
      onRefresh();
    }, []),
  );

  const renderItem = useCallback(({item}: {item: {age: number}}) => {
    return (
      <View style={{flex: 1}}>
        <Text>{`Test` + item.age}</Text>
      </View>
    );
  }, []);

  return (
    <View style={styles.leaderboardContainer}>
      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}`}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            refreshing={false}
            tintColor="white"
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leaderboardContainer: {
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
});
