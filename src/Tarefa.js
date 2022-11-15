
import React from 'react';
import { View, Text } from 'react-native'

export default function Tarefa({ data }){
  return(
    <View>
      <Text>{data.item}</Text>
    </View>
  )
}