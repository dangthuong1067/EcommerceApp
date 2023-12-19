import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './textinput-field.styles'
import Icon from 'react-native-vector-icons/Ionicons'
const TextInputField = ({ placeholder, label, iconLeft, iconRight, onPress, isShowPassword }) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.containerTextInput}>
        <View style={styles.icon}>
          <Icon
            name={iconLeft}
            size={27}
            color='#838079'
          />
        </View>

        <View style={styles.textInput}>
          {
            <TextInput
              placeholder={placeholder}
              secureTextEntry={isShowPassword ? false : true}
              style={styles.placeholder}
            />
          }
        </View>
        <TouchableOpacity
          onPress={onPress}
        >
          <Icon
            name={iconRight}
            size={27}
            color='#838079'
          />
        </TouchableOpacity>
      </View>
    </>

  )
}

export default TextInputField