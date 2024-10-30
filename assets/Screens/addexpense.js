import { Text, View , StyleSheet} from "react-native";

export default function Addexpense() {
    return <View style={styles.rootcontainer} >
        <Text>
            Add expense screen
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