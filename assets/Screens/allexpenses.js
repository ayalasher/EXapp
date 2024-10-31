import { Text, View , StyleSheet} from "react-native";
import Addbutton from "../Buttons/add";



export default function Allexpenses({navigation}) {

    function  addiconhandler() {
        navigation.navigate('Add expense',{})
    }


    return <View style={styles.rootcontainer} >

        <View style={styles.container1} >
        <Text style={styles.txtxt} >Add expense </Text>
        <Addbutton addexpense={addiconhandler} />
        </View>
       
        {/* <addicon funtionhandle={addiconhandler} /> */}
    </View>
}



const styles = StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:25,
        marginVertical:30, 
    },
    container1:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    txtxt:{
        textAlign:"left",
        fontSize:25,
        fontWeight:"900",
        marginRight:40
    }
})