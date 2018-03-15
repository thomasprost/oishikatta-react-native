import React from 'react'
import {View, Text, Image} from 'react-native'

export default class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./assets/icons/suica.png')} style={{width:22, height: 22}} />
        }
    }

    render () {
        return (
        <View>
            <Text>This is the home page</Text>
        </View>
        )
    }

}