import { View, Text, TouchableOpacity } from 'react-native';

export default function CreateAcc(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>CreateAcc</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('login');}}>
                <Text>Go to LoginAcc</Text>
            </TouchableOpacity>
        </View>
    );
}