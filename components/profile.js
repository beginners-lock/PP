import { View, Text, TouchableOpacity } from 'react-native';

export default function Profile(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>Profile</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('home');}}>
                <Text>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
}