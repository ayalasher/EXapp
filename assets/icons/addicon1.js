import Ionicons from '@expo/vector-icons/Ionicons';

import { Pressable, View , StyleSheet } from "react-native";

export default function addicon({addiconhandler}) {
    return <Pressable onPress={addiconhandler} style={styles.rootpressable} android_ripple={{color:"grey"}} >
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