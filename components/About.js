import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
import mainStyle from '../Style.js' 
import nav from '../src/navigation.js' 

export default class About extends React.Component {


    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./assets/icons/about.png')} style={{width:22, height: 22}} />
        }
    }

    render () {
        return (
            <View style={mainStyle.container}>
                <Text style={style.title}>Welcome to Oishikatta application</Text>
                <Text>For now you can just see recipes, you can't create or edit them. Hopefully you will be able to do it soon.</Text>
                <Text>You can access the search page</Text>  
                <Button color={mainStyle.midBlue} onPress={() => nav.accessPage(this, 'Search')} title="Search" />
                <Text>Or see all recipes here</Text> 
                <Button color={mainStyle.midBlue} onPress={() => nav.accessPage(this, 'Home')} title="All recipes" />
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