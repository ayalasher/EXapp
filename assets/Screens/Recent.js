import { Text, View , StyleSheet} from "react-native";
import addicon from "../icons/addicon1";

export default function Recent({navigation}) {
    function  addiconhandler() {
        navigation.navigate('Add expense',{})
        return  <addicon addiconhandler={addiconhandler} />
    }
    return <View style={styles.rootcontainer} >
        <Text>Recent screen</Text>
    </View>
}


const styles = StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:25,
        marginVertical:30, 
    }
})