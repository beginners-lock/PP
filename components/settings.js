import { View, Text, TouchableOpacity } from 'react-native';

export default function Settings(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>Settings</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('onboarding');}}>
                <Text>Go to Onboarding</Text>
            </TouchableOpacity>
        </View>
    );
}