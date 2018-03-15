import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import About from './components/About'
import Home from './components/Home'
import {TabNavigator} from 'react-navigation'


const Tabs = TabNavigator({
  Home: {screen: Home},
  About: {screen: About}
})

export default class App extends React.Component {
  render() {
    return (
      <About />
    );
  }
}


