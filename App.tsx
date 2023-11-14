import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListScreen} from './src/ListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {ExampleContextProvider} from './src/ExampleContext';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="List"
        component={ListScreen}
        options={{
          tabBarLabel: 'List',
        }}
      />
    </Tab.Navigator>
  );
}

function App(): JSX.Element {
  return (
    <ExampleContextProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </ExampleContextProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
