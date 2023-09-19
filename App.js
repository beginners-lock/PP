import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React, {Component} from 'react';

import { ThemeContext } from './contexts/ThemeContext';
import { colors } from './config/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

import First from './components/first';
import LoginAcc from './components/loginacc';
import CreateAcc from './components/createacc';
import UserStack from './navigators/userstack';
import Onboarding from './components/onboarding';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends Component {
  constructor(props){
    super(props);

    this.updateTheme = (newTheme) => {
      let mode;
      mode = this.state.theme.mode==='dark' ? 'light' : 'dark';
      this.setState({theme: {mode:mode} });
      console.log(this.state);
    }

    this.state = {   
      theme: {mode: "dark"},
      toggleTheme: this.updateTheme
    }
  }

  async componentDidMount(){
    let themeMode = await AsyncStorage.getItem('PacPlayThemeMode');
    console.log(this.state);
    if(themeMode){
        this.setState({theme: {mode: themeMode}});
    }else{
        this.setState({theme: {mode: 'dark'}})
    }
  }

  render(){
    return (
      	<ThemeContext.Provider value={this.state}>
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

/*
	<Stack.Screen name="user" component={UserStack}/>
*/
