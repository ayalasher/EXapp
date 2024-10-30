import { Text, View, StyleSheet } from "react-native";

export default function Allexpenses() {
    return <View style={styles.rootcontainer} >
        <Text>
            all expense screen
        </Text>
    </View>
}

const styles = StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:25,
        marginVertical:30, 
    }
})