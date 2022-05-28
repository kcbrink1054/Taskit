import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUNDCOLOR } from './components/constants';
import TaskitApp from './components/TaskitApp';
import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts({
    Arial: require("./assets/fonts/ARIAL.TTF"),
    ArialBlack: require("./assets/fonts/ARIALBLACK.ttf"),
  })

  if (!loaded) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        {/* <TaskitApp/> */}
        <Text>Test</Text>
        <StatusBar style="auto" />
        
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUNDCOLOR,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
