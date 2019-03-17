import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import List from './screens/List';
import Detail from './screens/Detail';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

class App extends React.Component {
  render() {
    return (
      <List />
    );
  }
}

StatusBar.setBarStyle('light-content');

const RootNavigator = createStackNavigator({
  List: List,
  Detail: Detail,
}, {
  defaultNavigationOptions: {
    headerTitleStyle:{
      flex:1,
      alignSelf:'center',
    },
    title:'Al Jazeera News',
    headerStyle: {
      backgroundColor: '#d35400',
      textAlign:'center',
      justifyText:'center',
      alignContent:'center',
    },
    headerTintColor: '#ffffff'
  }
});

export default createAppContainer(RootNavigator);
