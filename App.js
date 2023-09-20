import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';

import { ThemeContext } from './contexts/ThemeContext';
import { colors } from './config/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserTabs from './navigators/usertabs';

import First from './components/first';
import Onboarding from './components/onboarding';
import LoginAcc from './components/loginacc';
import CreateAcc from './components/createacc';
import Profile from './components/profile';

const Stack = createNativeStackNavigator();

export default function App(){
	const Stack = createNativeStackNavigator();
	const [theme, setTheme] = useState({mode: "dark"});
  
	useEffect(()=>{
		async function themeChecker(){
			let themeMode = await AsyncStorage.getItem('PacPlayThemeMode');
			if(themeMode){
				setTheme({mode: themeMode});
			}else{
				setTheme({mode: 'light'})
			}
			
		}
		themeChecker();
  
	}, [setTheme]);
  
	const updateTheme = (newTheme) => {
		let mode;
		if(!newTheme){
			mode = theme.mode === 'dark' ? 'light' : 'dark';
			newTheme = {mode};
		}
		setTheme(newTheme);
	}

	return(
		<ThemeContext.Provider value={{theme, updateTheme}}>
        	<NavigationContainer theme={theme.mode==='dark'?{dark: true, colors: {background:'#181818'}}:{dark: false, colors: {background:'white'}} }>
				<Stack.Navigator screenOptions={{headerShown: false, contentStyle: {backgroundColor: colors[theme.mode].background}}}>
					<Stack.Screen name="first" component={First}/>
					<Stack.Screen name="onboarding" component={Onboarding}/>
					<Stack.Screen name="loginacc" component={LoginAcc}/>
					<Stack.Screen name="createacc" component={CreateAcc}/>
					<Stack.Screen name="usertabs" component={UserTabs}/>
					<Stack.Screen name="profile" component={Profile}/>
				</Stack.Navigator>
        	</NavigationContainer>
      	</ThemeContext.Provider>
	);
}
