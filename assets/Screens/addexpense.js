import { Text, View , StyleSheet , TextInput, Button, FlatList } from "react-native";
import { useState } from "react";
import Addexpensebtn from "../Buttons/addexpens";
import { DateTimePickerAndroid}  from '@react-native-community/datetimepicker'

export default function Addexpense({navigation}) {
    const [inputhandler,setinputhandler] = useState("")
    const [expenses,setexpenses] = useState([])
    const [date,setdate] = useState("")
    const [showpicker , setshowpicker] = useState(false)
    const [amount,setamount] = useState("")


    let alldetails = {}


    function expensesfunction(itemdata){
        return <View>
            <View>
                <Text> {itemdata.item.inputhandler} </Text>
                <Text> {itemdata.item.amount} </Text>
            </View>
            <Text> {itemdata.item.date} </Text>
        </View>
    }


    // handle text input
    const expnseinputhanlder = (Text)=>{
        setinputhandler(Text)
        console.log(inputhandler);
        

    }

    const dateinputhandler = (text)=>{
        setdate(text)
        console.log(date);
        
    }

    const amountinputhanlder = (text)=>{
        setamount(text)
        console.log(amount);
        
    }

    // Set expenses data
    const setexpenseshandler = ()=>{
        setinputhandler("")
        setdate("")
        setamount("")
        setexpenses((currentitems)=>[...currentitems, inputhandler,date,amount])
        // navigation.navigate("Expenses",{
        //     expensesdata:expenses , 
        // });
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
                placeholder="Date: YYYY-MM-DD "
                onChangeText={dateinputhandler}
                value={date}
                />
                {/* <DateTimePickerAndroid 
                mode="date"
                display="spinner"
                value={date}
                 /> */}

               <TextInput 
                style={styles.inputtxt}
                placeholder="Amount : "
                onChangeText={amountinputhanlder}
                keyboardType="number-pad"
                value={amount}
                />
                <Addexpensebtn onPress={setexpenseshandler} >Save</Addexpensebtn>


                <View style={styles.moretxtcontainer} >
                  <Text style={styles.moretxt} key={expenses.date} >{expenses} </Text>
                </View>
                
                <FlatList data={expenses} renderItem={expensesfunction} keyExtractor={(item)=>item.inputhandler} />
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
    },
    moretxt:{
        paddingVertical:20,
        paddingHorizontal:20,
        marginVertical:20,
        marginHorizontal:20, 
    },
    moretxtcontainer:{
        flexDirection:"column"
    }
})