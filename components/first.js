import { View, Text, TouchableOpacity } from 'react-native';

export default function First(props){
    return(
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text>First</Text>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('onboarding');}}>
                <Text>Go to Onboarding</Text>
            </TouchableOpacity>
        </View>
    );
}