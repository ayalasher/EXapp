import { Pressable, View , StyleSheet , Text } from "react-native";

export default function Addexpensebtn({children,onPress}) {
    return <Pressable onPress={onPress} style={styles.rootpressable} >
        <View>
            <Text style={styles.txt} >{children}</Text>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    rootpressable:{
        borderRadius:10,
        backgroundColor:"#43388A",
        marginHorizontal:10,
        paddingHorizontal:15,
        paddingVertical:10
    },
    txt:{
        textAlign:"center",
        justifyContent:"center",
        height:20
    }
})