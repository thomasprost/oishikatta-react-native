import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./assets/icons/about.png')} style={{width:22, height: 22}} />
        }
    }

    render () {
        return (
            <View>
                <Text style={style.title}>Welcome to Oishikatta native app</Text>
                <Text>It looks great right </Text> 
                
            </View>
        )
    }

}


const style = StyleSheet.create({
    title: { 
        fontSize: 22,
        marginBottom: 20
    }
})