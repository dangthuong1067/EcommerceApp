import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './textinput-field.styles'
import Icon from 'react-native-vector-icons/Ionicons'
const TextInputField = ({ placeholder, label, iconLeft, onBlur, onChangeText, value, password, confirmPassword, showPassword, hidePassword }) => {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const onPress = () => {
    if (password) {
      setIsShowPassword(!isShowPassword)
    }
    if (confirmPassword) {
      setIsShowConfirmPassword(!isShowConfirmPassword)
    }
  }

  const showHidePassword = () => {
    if (isShowPassword) return showPassword
    if (isShowConfirmPassword) return showPassword
    if (!isShowPassword) return hidePassword
    if (!isShowConfirmPassword) return hidePassword
  }
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
              secureTextEntry={label.includes('Mật khẩu') || label.includes('Xác nhận mật khẩu') ? isShowConfirmPassword || isShowPassword : false}
              style={styles.placeholder}
              onBlur={onBlur}
              onChangeText={onChangeText}
              value={value}
            />
          }
        </View>
        <TouchableOpacity
          onPress={onPress}
        >
          <Icon
            name={showHidePassword()}
            size={27}
            color='#838079'
          />
        </TouchableOpacity>
      </View>
    </>

  )
}

export default TextInputField