import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import mainStyle from '../../Style.js';
import params from '../../config/parameters'

export default class Row extends React.Component {
    
    
    
    render () {
        console.log(params.RECIPES_IMAGES + this.props.recipe.mainImage)

            return (

                <View style={mainStyle.recipeRow}>
                    <Image  source={{uri:params.RECIPES_IMAGES + this.props.recipe.mainImage}} style={mainStyle.recipeAllImage} />
                    <Text style={mainStyle.recipeAllTitle}>{this.props.recipe.name}</Text> 
                </View>   
                
            )

    }
}


