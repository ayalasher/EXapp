import { Pressable, View , StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Addbutton({addexpense}) {


    return <Pressable onPress={addexpense} style={styles.rootpressable} >
        <View>
        <Ionicons name="add" size={24} color="black" />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    rootpressable:{
        padding:10,
        borderRadius:5,
        borderRadius:10,
        backgroundColor:"#43388A",
        marginRight:0
    }
})