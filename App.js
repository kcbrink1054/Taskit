import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { BACKGROUNDCOLOR } from './components/constants';
import TaskitApp from './components/TaskitApp';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <TaskitApp/>
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
