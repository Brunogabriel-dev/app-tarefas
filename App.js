import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default function App(){
  const [nome, setNome] = useState('Fulano')

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#f1f1f1',
    paddingTop: 28,
  },
  title:{
    fontSize: 32,
    color: '#121212',
    fontWeight: 'bold'
  },
  text:{
    color: 'red'
  }
})
