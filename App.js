import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native' ; 
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Recent from './assets/Screens/Recent';
import addicon from './assets/icons/addicon1';
import Allexpenses from './assets/Screens/allexpenses';
import Intoexpenses from './assets/Screens/intoexpense';
import Editexpense from './assets/Screens/editexpense';
import Addexpense from './assets/Screens/addexpense';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';


const stack = createNativeStackNavigator() ; 
const tab = createBottomTabNavigator(); 


function Bottomtabs() {
  return <tab.Navigator  >
    <tab.Screen name='recent'  component={Recent} options={{headerShown:false , tabBarActiveBackgroundColor:"#654EFF", tabBarInactiveBackgroundColor:"#654EFF" , tabBarActiveTintColor:"#F2FF43", tabBarInactiveTintColor:"#BCBCBC" ,title:"Recent3",tabBarIcon:({color,size})=>(<FontAwesome5 name="stopwatch" color={color} size={size} />)}} />
    <tab.Screen name='All expenses' component={Allexpenses} options={{ headerShown:false , tabBarActiveBackgroundColor:"#654EFF", tabBarInactiveBackgroundColor:"#654EFF" , tabBarActiveTintColor:"#F2FF43", tabBarInactiveTintColor:"#BCBCBC" , title:"All expenses34",tabBarIcon:({color,size})=>(<AntDesign name="calendar" color={color} size={size} />)}} />
  </tab.Navigator>
}


export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Expenses' component={Bottomtabs} options={{headerRight:addicon  , headerStyle:{backgroundColor:"#654EFF"} ,headerTintColor:"white" }} />
        {/* <stack.Screen name='All expenses' component={Allexpenses} options={{headerRight:addicon,headerStyle:{backgroundColor:"#654EFF"}}} /> */}
        <stack.Screen name='Into expense' component={Intoexpenses} options={{headerStyle:{backgroundColor:"#654EFF"}, headerTintColor:"White"}} />
        <stack.Screen name='Edit expense ' component={Editexpense} options={{headerStyle:{backgroundColor:"#654EFF"}, headerTintColor:"White"}} />
        <stack.Screen name='Add expense' component={Addexpense} options={{headerStyle:{backgroundColor:"#654EFF"}, headerTintColor:"White"}} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
