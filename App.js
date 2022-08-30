import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUNDCOLOR, NEONCOLOR, TEXTCOLOR, WHITE } from './components/constants';
import TaskitApp from './components/TaskitApp';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskSchedule from './components/TaskSchedule';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

export default function App() {
  const [loaded] = useFonts({
    Arial: require("./fonts/arial.ttf"),
    ArialBold: require("./fonts/arialbd.ttf"),
  })  

  if (!loaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle:{
            backgroundColor:BACKGROUNDCOLOR,
            height:75,
            paddingBottom:10,
            paddingTop:4
          },
          tabBarLabelStyle:{
            fontSize:12
          },
          tabBarActiveTintColor: WHITE,
          tabBarInactiveTintColor:'grey'
        }}
      >
        <Tab.Screen
        name='Home'
        component={TaskSchedule}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon:({color, size}) => (
            <Feather name="list" size={30} color={color} />
          )
        }}        />
       <Tab.Screen
        name='Homee'
        component={TaskitApp}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon:({color, size}) => (
            <Feather name="calendar" size={30} color={color} />
          )
        }}
        /> 
      </Tab.Navigator>
      <StatusBar style='light'/>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: BACKGROUNDCOLOR,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});



//
//        <TaskitApp/>
//        {/* <Text style={{fontFamily:'Arial'}}>Test</Text> */}
//        <StatusBar style='light'/>
//      </Box>