import { View, Text, TouchableOpacity } from 'react-native';

export default function Onboarding(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>Onboarding</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('createacc');}}>
                <Text>Go to CreateAcc</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('loginacc');}}>
                <Text>Go to LoginAcc</Text>
            </TouchableOpacity>
        </View>
    );
}