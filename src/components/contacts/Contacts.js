import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Contacts = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Text>Contacts</Text>
      </View>
    </SafeAreaView>
  )
}

