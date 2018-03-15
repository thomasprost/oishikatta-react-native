import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default class Search extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./assets/icons/search.png')} style={{width:22, height: 22}} />
        }
    }

    render () {
        return (
        <View>
            <Text>This is the search page</Text>
        </View>
        )
    }

}