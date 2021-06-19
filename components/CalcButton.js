import React from 'react';
import {StyleSheet, Alert, Text, TouchableOpacity} from 'react-native';

export default class CalcButton extends React.Component{
    
    static defaultProps = {
        onPress: function(){},
        color: "red",
        title: "$",
        backgroundColor: "yellow",
    }

    showAlert = () =>{
        Alert.alert(
           'You need to...'
        )
    }

    render(){
        bc=this.props.backgroundColor;
        color=this.props.color;
        title=this.props.title;

        return (
            <TouchableOpacity style={[styles.container,{backgroundColor: bc}]}>
                <Text style={[styles.text, {color: color}]}>{title}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        margin: 5,
        alignItems:"center",
        justifyContent: "center",
        width: 80,
        height: 80,
        borderRadius: 40,
        
    },
    text: {
        fontSize: 30,
    }
});
