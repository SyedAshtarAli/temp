import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class CalcDisplay extends React.Component {
    static defaultProps = {
        display: "",
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "flex-end" },
    display: { flexDirection: "row", justifyContent: "space-between", color: "white", fontSize: 50, textAlign:"right", marginRight:10 },

});