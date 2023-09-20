import { View, Text, TouchableOpacity } from 'react-native';

export default function CreateAcc(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>CreateAcc</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('loginacc');}}>
                <Text>Go to LoginAcc</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('usertabs');}}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}