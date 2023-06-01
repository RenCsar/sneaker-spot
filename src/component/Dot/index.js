import { View, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export default function Dot({color}) {
  return (
    <View style={[styles.container, {backgroundColor: color}]} />
  )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width * 0.08,
        height: Dimensions.get('window').width * 0.08,
        borderRadius: Dimensions.get('window').width * 0.08 / 2,
        marginHorizontal: '2.5%',
        elevation: 5,
    }
})