import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from "@react-native-picker/picker";

export default function Test() {
    const [s, setS] = useState("")
  return (
    <View style={styles.viewContainer}>
        <View>
            <Text style={{color:'black'}}>
                Hello
            </Text>
        </View>
        <View style={styles.container}>
        <Picker onValueChange={(t)=>console.log(t)} selectedValue={s} onValueChanged={(t) => setS(t)} style={styles.pickerContainer} mode="dropdown">
            <Picker.Item label="Test" value="Test"/>
            <Picker.Item label="Test2" value="Test2"/>
            </Picker>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    viewContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    container:{
        flex:1,
        borderStyle:'solid',
        borderBottomWidth: 3,
        borderColor:'#3E4E5E',
        marginHorizontal:10
    },
    pickerContainer:{
        marginVertical: 0,
        
    }
})