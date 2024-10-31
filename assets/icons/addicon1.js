import Ionicons from '@expo/vector-icons/Ionicons';
import Recent from '../Screens/Recent';

import { Pressable, View , StyleSheet } from "react-native";




export default function Addicon() {
    const alert12 = ()=>{
        alert("Hello there")
    }

    return <Pressable onPress={alert12} style={styles.rootpressable} android_ripple={{color:"grey"}} >
        <View>
        <Ionicons name="add" size={24} color="black" />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    rootpressable:{
        padding:10,
        borderRadius:5,

    }
})