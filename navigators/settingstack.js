import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../components/settings';
import { ThemeContext } from '../contexts/ThemeContext';
import { colors } from '../config/theme';
import { Component} from 'react';
//import Terms from '../components/terms';
//import Help from '../components/help';
//import Privacy from '../components/privacy';

const Stack = createNativeStackNavigator();

class SettingStack extends Component {
    static contextType = ThemeContext;

    render(){
        return(
            <Stack.Navigator screenOptions={{headerShown: false, contentStyle: {backgroundColor: colors[this.context.theme.mode].background}}}>
                <Stack.Screen name="settings" component={Settings}/>
            </Stack.Navigator>
        );
    }
}

export default SettingStack;


/*<Stack.Screen name="privacy" component={Privacy}/>
<Stack.Screen name="help" component={Help}/>
<Stack.Screen name="terms" component={Terms}/>*/