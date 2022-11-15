
import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function Tarefa({ data }){
  return(
    <View style={styles.container}>
      <Text>{data.item}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(196,196,196, 0.20)',
    marginTop: 12,
    padding: 12,
    borderRadius: 4,
  }
})