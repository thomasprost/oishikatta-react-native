import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class About extends React.Component {

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