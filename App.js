import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React, {Component} from 'react';

import { ThemeContext } from './contexts/ThemeContext';
import { colors } from './config/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Font from 'expo-font';

import First from './components/first';
import LoginAcc from './components/loginacc';
import CreateAcc from './components/createacc';
import Root from './components/root';
import Onboarding from './components/onboarding';
import { customFonts } from './config/customfonts';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  state={
    fontsLoaded: false,
    theme: {mode: "dark"}
  }

  async _loadFontAsync(){
    await Font.loadAsync(customFonts);
    this.setState({fontsLoaded: true});
  }

  async componentDidMount(){
    this._loadFontAsync();

    let themeMode = await AsyncStorage.getItem('PacPlayThemeMode');
    if(themeMode){
        this.setState({mode: themeMode});
        console.log(themeMode);
    }else{
        this.setState({mode: 'dark'})
        console.log('dark');
    }
  }

  updateTheme = (newTheme) => {
    let mode;
    if(!newTheme){
      mode = this.state.theme.mode === 'dark' ? 'light' : 'dark';
      newTheme = {mode: mode};
    }
    this.setState({theme: newTheme});
  }

  render(){
    if(!this.state.fontsLoaded){
      return null;
    }

    return (
      <ThemeContext.Provider value={this.state.theme}>
        <NavigationContainer theme={this.state.theme.mode==='dark'?{dark: true, colors: {background:'#181818'}}:{dark: false, colors: {background:'white'}} }>
          <Stack.Navigator screenOptions={{headerShown: false, contentStyle: {backgroundColor: colors[this.state.theme.mode].background}}}>
            <Stack.Screen name="first" component={First}/>
            <Stack.Screen name="onboarding" component={Onboarding}/>
            <Stack.Screen name="loginacc" component={LoginAcc}/>
            <Stack.Screen name="createacc" component={CreateAcc}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeContext.Provider>
    );
  }
}
