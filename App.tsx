import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, TextInput, View } from "react-native"

import { styles } from "./styles"

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />

      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
    </View>
  )
}
