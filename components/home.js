import { View, Text, TouchableOpacity } from 'react-native';

export default function Home(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>Home</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('profile');}}>
                <Text>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    );
}