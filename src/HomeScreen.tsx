import React from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
} from 'react-native';
import ShadowRectangle from './ShadowRectangle';
import {useExampleContext} from './ExampleContext';

const HomeScreen = () => {
  const {randomNumber} = useExampleContext();
  const {width } = useWindowDimensions();

  return (
    <View style={{backgroundColor: '#8cc06a', flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{marginVertical: 30}}>
            <ShadowRectangle shapeWidth={width * 0.95} rectRadius={8} />
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
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
