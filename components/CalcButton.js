import React from 'react';
import {StyleSheet, View , Alert, Text, TouchableOpacity} from 'react-native';

export default class CalcButton extends React.Component{
    
    static defaultProps = {
        
        color: "red",
        title: "$",
        backgroundColor: "yellow",
    }

    render(){
        bc=this.props.backgroundColor;
        color=this.props.color;
        title=this.props.title;
       

        return (
           <View>
           {title=="0" ? <TouchableOpacity style={[styles.container1,{backgroundColor: bc,  }]} onPress={this.props.onPress} >
                <Text style={[styles.text, {color: color}]}>{title}</Text>
            </TouchableOpacity>:  <TouchableOpacity style={[styles.container,{backgroundColor: bc,  }]} onPress={this.props.onPress} >
                <Text style={[styles.text, {color: color}]}>{title}</Text>
            </TouchableOpacity>}
            </View> 
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
    container1: {
        margin: 5,
        alignItems:"center",
        justifyContent: "center",
        width: 170,
        height: 80,
        borderRadius: 40,
        
    },
    text: {
        fontSize: 30,
    }
});
