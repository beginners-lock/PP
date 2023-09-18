import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeContext } from '../contexts/ThemeContext';

import * as Font from 'expo-font';
import { customFonts } from '../config/customfonts';

class HomeStack extends Component{
    static contextType = ThemeContext;

    state = {
        fontsLoaded: false,
    }

    async _loadFontAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded: true});
    }

    async componentDidMount(){
        this._loadFontAsync();
    }

    render(){
        if(!this.state.fontsLoaded){
            return null;
        }
        
        return(
            <View style={{...styles.container}}>
                <Text style={{fontFamily:'Chakra Petch Regular'}}>Open up App.js to start working on your app!</Text>
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

export default HomeStack;