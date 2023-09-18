import { Component, useContext } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Switch } from 'react-native-switch';
import { ThemeContext } from '../contexts/ThemeContext';
import { colors } from '../config/theme';

import * as Font from 'expo-font';
import { customFonts } from '../config/customfonts';
//import { SafeAreaView } from 'react-native-safe-area-context';

class Settings extends Component{
    static contextType = ThemeContext

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

    logout = async () => {
        let action = await AsyncStorage.multiRemove(['user', 'userdata']);
        this.props.navigation.navigate('first');
    }

    changeTheme = async (e) => {
        if(e===true){
            updateTheme({mode:'light'});
            await AsyncStorage.setItem('PacPlayThemeMode', 'light');
        }else{
            updateTheme({mode:'dark'});
            await AsyncStorage.setItem('PacPlayThemeMode', 'dark');
        }
    }

    render(){
        return(
            <SafeAreaView style={{width:Dimensions.get('window').width, flexDirection:'column', alignItems:'center', justifyContent:'flex-start', height:Dimensions.get('window').height, backgroundColor:colors[this.context.theme.mode].background}}>
                <Text style={{width:Dimensions.get('window').width, paddingLeft:24, paddingRight:24, fontFamily:'Chakra Petch SemiBold', fontSize:24, marginTop:20, textAlign:'center', marginBottom:20, color:colors[this.context.theme.mode].text1}}>Settings</Text>
                
                <TouchableOpacity style={{marginTop:20,}} onPress={()=>{this.props.navigation.navigate('privacy');}}>
                <View style={{width:372, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBottom:20, borderWidth:1, borderBottomColor:'#C8D1DB', borderTopColor:'rgba(0,0,0,0)', borderRightColor:'rgba(0,0,0,0)', borderLeftColor:'rgba(0,0,0,0)'}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                        <Image style={{width:40, height:40}} source={this.context.theme.mode==='dark'?require('./../assets/privacy-dark.png'):require('./../assets/privacy.png')}></Image>
                        <Text style={{fontFamily:'Chakra Petch Regular', fontSize:20, marginLeft:10, color:colors[this.context.theme.mode].text1}} >{'Privacy & Security'}</Text>
                    </View>
                    <Image style={{width:24, height:24}} source={this.context.theme.mode==='dark'==='dark'?require('./../assets/next-dark.png'):require('./../assets/next.png')}></Image>
                </View>
                </TouchableOpacity>
    
                <TouchableOpacity style={{marginTop:20,}} onPress={()=>{this.props.navigation.navigate('help');}}>
                <View style={{width:372, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBottom:20, borderWidth:1, borderBottomColor:'#C8D1DB', borderTopColor:'rgba(0,0,0,0)', borderRightColor:'rgba(0,0,0,0)', borderLeftColor:'rgba(0,0,0,0)'}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                        <Image style={{width:40, height:40}} source={this.context.theme.mode==='dark'?require('./../assets/help-dark.png'):require('./../assets/help.png')}></Image>
                        <Text style={{fontFamily:'Chakra Petch Regular', fontSize:20, marginLeft:10, color:colors[this.context.theme.mode].text1}} >{'Help & Support'}</Text>
                    </View>
                    <Image style={{width:24, height:24}} source={this.context.theme.mode==='dark'?require('./../assets/next-dark.png'):require('./../assets/next.png')}></Image>
                </View>
                </TouchableOpacity>
    
                <TouchableOpacity style={{marginTop:20,}} onPress={()=>{this.props.navigation.navigate('terms');}}>
                <View style={{width:372, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBottom:20, borderWidth:1, borderBottomColor:'#C8D1DB', borderTopColor:'rgba(0,0,0,0)', borderRightColor:'rgba(0,0,0,0)', borderLeftColor:'rgba(0,0,0,0)'}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                        <Image style={{width:40, height:40}} source={this.context.theme.mode==='dark'?require('./../assets/terms-dark.png'):require('./../assets/terms.png')}></Image>
                        <Text style={{fontFamily:'Chakra Petch Regular', fontSize:20, marginLeft:10, color:colors[this.context.theme.mode].text1}} >{'Terms & Policies'}</Text>
                    </View>
                    <Image style={{width:24, height:24}} source={this.context.theme.mode==='dark'?require('./../assets/next-dark.png'):require('./../assets/next.png')}></Image>
                </View>
                </TouchableOpacity>
    
                <View style={{width:372, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBottom:20, marginTop:20, borderWidth:1, borderBottomColor:'#C8D1DB', borderTopColor:'rgba(0,0,0,0)', borderRightColor:'rgba(0,0,0,0)', borderLeftColor:'rgba(0,0,0,0)'}}>
                    <Text style={{fontFamily:'Chakra Petch Regular', fontSize:20, marginLeft:10, color:colors[this.context.theme.mode].text1}}>Theme</Text>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', }}>
                        <Text style={{fontSize:18, fontFamily:'Chakra Petch Regular', color:colors[this.context.theme.mode].text1, marginRight:12}}>Dark</Text>
                        <ThemeContext.Consumer>
                            {
                                ({theme, toggleTheme})=>{
                                    return(<Switch
                                        value={theme.mode==='dark'?false:true}
                                        onValueChange={(e)=>{console.log('yoo'+e); toggleTheme(e)}}
                                        inActiveText=''
                                        activeText=''
                                        backgroundActive='#4285F4'
                                        backgroundInactive='#1E9E40'
                                        circleActiveColor='#928E8E'
                                        circleInActiveColor='#343434'
                                        circleBorderActiveColor='#4285F4'
                                        circleBorderInactiveColor='#1E9E40'
                                        circleBorderWidth={4}
                                    />);
                                }
                            }
                        </ThemeContext.Consumer>
                        <Text style={{fontSize:18, fontFamily:'Chakra Petch Regular', color:colors[this.context.theme.mode].text1, marginLeft:12}}>Light</Text>
                    </View>
                </View>
    
    
                <TouchableOpacity style={{marginTop:180}} onPress={()=>{this.logout();}}>
                <View style={{width:372, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingBottom:20, borderWidth:1, borderBottomColor:'#C8D1DB', borderTopColor:'rgba(0,0,0,0)', borderRightColor:'rgba(0,0,0,0)', borderLeftColor:'rgba(0,0,0,0)'}}>
                    <View style={{flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
                        <Image style={{width:40, height:40}} source={this.context.theme.mode==='dark'?require('./../assets/logout-dark.png'):require('./../assets/logout.png')}></Image>
                        <Text style={{fontFamily:'Chakra Petch Regular', fontSize:20, marginLeft:10, color:colors[this.context.theme.mode].text1}} >Logout</Text>
                    </View>
                    <Image style={{width:24, height:24}} source={this.context.theme.mode==='dark'?require('./../assets/next-dark.png'):require('./../assets/next.png')}></Image>
                </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

export default Settings;