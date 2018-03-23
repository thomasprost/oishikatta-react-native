import React from 'react'
import {View, Text, Image, ActivityIndicator, FlatList} from 'react-native'
import axios from 'axios'
import params from '../config/parameters'
import mainStyle from '../Style.js' 
import RecipeRow from './recipes/Row.js'

export default class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./assets/icons/suica.png')} style={{width:22, height: 22}} />
        }
    }

    constructor (props) {
        
        super(props)
        this.state = {
            report: null,
            error: null
        }
        
        this.fetchRecipes()
    }

    fetchRecipes() {
       axios.get(params.SERVER_URL + params.PROJECT_URL + params.API_URL + 'recipes')
            .then((response) =>{
                
                this.setState({
                    report : response.data,
                    error : null
                })
                // console.log(this.state.report)
            })
            .catch((error) => {
                this.setState({
                    report : "",
                    error: error
                })
                console.log(this.state.error)
            });
    }

    render () {
        if (this.state.report === null){
            return (
                <View style={mainStyle.container}>
                    <ActivityIndicator color={mainStyle.suica} size="large" />
                </View>
            )
        }else if (this.state.error !== null){
            return (
            <View style={mainStyle.container}>
                <Text>Sorry we couldn't find any recipe</Text>
            </View>
            )
        }
        else {
            // Flat list needs an array of data
            // And a key to differentiate between rows rendered and how to update them when they change

            return (
                <View style={mainStyle.container}>
                    <FlatList
                    data={this.state.report}
                    numColumns={2} 
                    keyExtractor={(item, index) => index}
                    renderItem={(cast) => <RecipeRow recipe={cast.item} index={cast.index} />}  
                    
                    />
                </View>    
            )
        }
    }

}