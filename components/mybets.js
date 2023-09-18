import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from '../contexts/ThemeContext';
//import { colors } from '../config/theme';

class MyBets extends Component{
    static contextType = ThemeContext;

    componentDidMount(){
        console.log(this.context);
    }

    render(){
        return(
            <View style={{...styles.container}}>
                <Text style={{fontFamily:'ChakraPetchRegular'}}>Open up App.js to start working on your app!</Text>
                <StatusBar style="auto" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MyBets;