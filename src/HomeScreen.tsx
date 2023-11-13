import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import ShadowRectangle from './ShadowRectangle';
import {useCommonRootContext} from './CommonRootContext';

const HomeScreen = () => {
  const {randomNumber} = useCommonRootContext();
  const {width, height} = useWindowDimensions();

  const maxHeaderHeight = height / 4 - 25;

  return (
    <View style={{backgroundColor: '#8cc06a', flex: 1}}>
      <View style={[styles.headerContainer, {height: maxHeaderHeight}]}></View>
      <ScrollView
        style={{flex: 1}}
        contentOffset={{x: 0, y: -maxHeaderHeight}}
        contentContainerStyle={{
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{marginVertical: 30, paddingTop: maxHeaderHeight}}>
          <TouchableOpacity>
            <ShadowRectangle shapeWidth={width * 0.95} rectRadius={8} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 30}}>
            <ShadowRectangle
              shapeWidth={width * 0.95}
              rectRadius={8}
              topTintColor={'#b7ff00'}
              gradientColors={[
                '#90dd03',
                '#87d502',
                '#87d502',
                '#6dbd00',
                '#63b402',
              ]}
              shadowColor={'#376900'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#62d1bc',
    overflow: 'hidden',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
