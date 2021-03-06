import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import CalcButton from '../components/CalcButton';
import CalcDisplay from '../components/CalcDisplay';

export default class CalculatorScreen extends React.Component {

  constructor(props){
    super(props);

    this.state={
      display: "0",
      
    };

  }

  onDigitPress=()=>{
    Alert.alert(
      'ashtar_bug_timer'
   );
  }

  render() {

    return (
      <View style={styles.container}>
        <CalcDisplay display={this.state.display}/>
        <View style={styles.buttonRow}>
          <CalcButton onPress = {this.onDigitPress} title="AC" color="#323232" backgroundColor="#a5a5a5" />
          <CalcButton title="+/-" color="#323232" backgroundColor="#a5a5a5" />
          <CalcButton title="%" color="#323232" backgroundColor="#a5a5a5" />
          <CalcButton title="/" color="white" backgroundColor="#ff9e0a" />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton title="7" color="white" backgroundColor="#333333" />
          <CalcButton title="8" color="white" backgroundColor="#333333" />
          <CalcButton title="9" color="white" backgroundColor="#333333" />
          <CalcButton title="*" color="white" backgroundColor="#ff9e0a" />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton title="4" color="white" backgroundColor="#333333" />
          <CalcButton title="5" color="white" backgroundColor="#333333" />
          <CalcButton title="6" color="white" backgroundColor="#333333" />
          <CalcButton title="-" color="white" backgroundColor="#ff9e0a" />
        </View>

        <View style={styles.buttonRow}>
          <CalcButton title="1" color="white" backgroundColor="#333333" />
          <CalcButton title="2" color="white" backgroundColor="#333333" />
          <CalcButton title="3" color="white" backgroundColor="#333333" />
          <CalcButton title="+" color="white" backgroundColor="#ff9e0a" />
        </View>

        <View style={styles.buttonRow}>
          <View style={{flex:1 }}>
           <CalcButton title="0" color="white" backgroundColor="#333333" />
          </View>
          <View style={{flex:0.97 }}>
            <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
              <CalcButton title="." color="white" backgroundColor="#333333" />
              <CalcButton title="=" color="white" backgroundColor="#ff9e0a" />
              </View>
          </View>
         
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { backgroundColor: "black", flex: 1 },
  buttonRow: { flexDirection: "row", justifyContent: "space-between" },

});

