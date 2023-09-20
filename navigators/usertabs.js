import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { colors } from "../config/theme";
import { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";
import Home from '../components/home';
import MyBets from '../components/mybets';
import Settings from '../components/settings';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
    const { theme } = useContext(ThemeContext);

    return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: [
                    {
                        display: "flex", 
                        ...colors[theme.mode+'Tab'],
                        height:70,
                        borderWidth:1, borderTopLeftRadius:24, borderTopRightRadius:24,
                    },
                    null
                ]
            }}>
                <Tab.Screen name="home" component={Home} options={{
                    tabBarIcon: ({focused}) => {
                        return(<Image style={{width:24, height:24}} source={focused? theme.mode==='dark' ? require('./../assets/home-dark.png') : require('./../assets/home1.png') : require('./../assets/home.png') }/>);
                    }
                }}>

                </Tab.Screen>
                <Tab.Screen name="mybets" component={MyBets} options={{
                    tabBarIcon: ({focused}) => {
                        return(<Image style={{width:24, height:24}} source={focused? theme.mode==='dark' ? require('./../assets/game-dark.png') : require('./../assets/game1.png') : require('./../assets/game.png') }/>);  
                    }
                }}>
                </Tab.Screen>
                <Tab.Screen name="settings" component={Settings} options={{
                    tabBarIcon: ({focused}) => {
                        return(<Image style={{width:24, height:24}} source={focused? theme.mode==='dark' ? require('./../assets/settings-dark.png') : require('./../assets/settings1.png') : require('./../assets/settings.png') }/>);   
                    }
                }}>
                </Tab.Screen>
            </Tab.Navigator>
    );
}

export default UserTabs;