import { Text, View , StyleSheet , TextInput, Button } from "react-native";
import { useState } from "react";
import Addexpensebtn from "../Buttons/addexpens";

export default function Addexpense({navigation}) {
    const [inputhandler,setinputhandler] = useState("")
    const [expenses,setexpenses] = useState([])
    const [date,setdate] = useState("")
    const [amount,setamount] = useState("")


    // handle text input
    const expnseinputhanlder = (Text)=>{
        setinputhandler(Text)
        console.log(inputhandler);
        

    }

    const dateinputhandler = (text)=>{

    }

    const amountinputhanlder = (text)=>{

    }

    const setexpenseshandler = ()=>{
        setinputhandler("")
        setexpenses((currentitems)=>[...currentitems,inputhandler])
        navigation.navigate("Expenses",{
            expensesdata:expenses
        });
    }


    return <View style={styles.rootcontainer} >
            <View style={styles.topcontainer} >
                <TextInput 
                style={styles.inputtxt}
                placeholder="Enter expense : "
                onChangeText={expnseinputhanlder}
                value={inputhandler}
                />

               <TextInput 
                style={styles.inputtxt}
                placeholder="Date : "
                onChangeText={dateinputhandler}
                />

               <TextInput 
                style={styles.inputtxt}
                placeholder="Amount : "
                onChangeText={amountinputhanlder}
                keyboardType="number-pad"
                />
                <Addexpensebtn onPress={setexpenseshandler} >Save</Addexpensebtn>

                <Text>{expenses} </Text>
           </View>
        

    </View>
}

const styles = StyleSheet.create({
    rootcontainer:{
        flex:1,
        marginHorizontal:25,
        marginVertical:30, 
    },
    inputtxt:{
        borderRadius:6,
        borderColor:"#909090",
        borderWidth:1,
        color:"black",
        width:200,
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:7,
    },
    topcontainer:{
        flexDirection:"column",
        alignItems:"center",
        width:"90%"
    }
})