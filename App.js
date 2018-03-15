import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import About from './components/About'
import Home from './components/Home'
import Search from './components/Search'
import {TabNavigator} from 'react-navigation'
import style from './Style.js'


const Tabs = TabNavigator({
  Home: {screen: Home},
  Search: {screen: Search},
  About: {screen: About}
}, 
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    pressColor: style.darkSuica,
    indicatorStyle: {
      height: 2, 
      backgroundColor: style.darkSuica
    },
    style: {
      backgroundColor : style.greyBlue,
      borderTopWidth: 1, 
      borderColor: style.darkGreyBlue
    }
     
  }
  
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} /> 
        <Tabs /> 
      </View>  
      
    );
  }
}


