import { View, Text, TouchableOpacity } from 'react-native';

export default function LoginAcc(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>LoginAcc</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('createacc');}}>
                <Text>Go to CreateAcc</Text>
            </TouchableOpacity>
        </View>
    );
}