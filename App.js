import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUNDCOLOR } from './components/constants';
import TaskitApp from './components/TaskitApp';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TaskSchedule from './components/TaskSchedule';

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
          headerShown: false
        }}
      >
        <Tab.Screen
        name='Homee'
        component={TaskitApp}
        options={{title: 'Tasks'}}
        />
        <Tab.Screen
        name='Home'
        component={TaskSchedule}
        options={{title: 'Schedule'}}
        />
        
      </Tab.Navigator>
      
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