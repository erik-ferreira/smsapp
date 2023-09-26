import { useState, useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import {
  getHash,
  removeListener,
  startOtpListener,
} from "react-native-otp-verify"
import { TextInput, View } from "react-native"

import { styles } from "./styles"

export default function App() {
  const [code, setCode] = useState("")

  function getOtpCode(message: string) {
    if (message) {
      const otpCode = /(\d{4})/g.exec(message)![1]

      setCode(otpCode)
    }
  }

  useEffect(() => {
    // getHash().then((hash) => console.log("MESSAGE HASH =>", hash))

    startOtpListener((message) => getOtpCode(message))

    return () => removeListener()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent />

      <TextInput style={styles.input} value={code[0]} />
      <TextInput style={styles.input} value={code[1]} />
      <TextInput style={styles.input} value={code[2]} />
      <TextInput style={styles.input} value={code[3]} />
    </View>
  )
}
