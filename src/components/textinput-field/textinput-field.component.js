import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './textinput-field.styles'
import Icon from 'react-native-vector-icons/Ionicons'
const TextInputField = ({ name, isHidePassWord, password, confirmPassWord }) => {
    const [isShowPassword, setIsShowPassword] = useState(isHidePassWord)
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(isHidePassWord)
    let iconLeft, iconRight
    switch (name) {
        case 'Tên đăng nhập':
            iconLeft = "person-outline"
            break;
        case 'Email':
            iconLeft = "mail-outline"
            break;
        case 'Mật khẩu':
            iconLeft = "key-outline"
            iconRight = isShowPassword ? "eye-off-outline" : "eye-outline"
            break;
        case 'Xác nhận mật khẩu':
            iconLeft = "key-outline"
            iconRight = isShowConfirmPassword ? "eye-off-outline" : "eye-outline"
            break;
        default:
            break;
    }


    return (
        <>
            <Text style={{ fontSize: 18 }}>{name}</Text>
            <View style={styles.textInput}>
                <View style={{ marginRight: 10 }}>
                    <Icon
                        name={iconLeft}
                        size={27}
                        color='#838079'
                    />
                </View>

                <View style={{ flex: 1 }}>
                    {
                        password && isShowPassword ?
                            <TextInput
                                placeholder={name}
                                secureTextEntry={true}
                                style={{ fontSize: 15 }}
                            />
                            :
                            confirmPassWord && isShowConfirmPassword ?
                                <TextInput
                                    placeholder={name}
                                    secureTextEntry={true}
                                    style={{ fontSize: 15 }}
                                /> : <TextInput
                                    placeholder={name}
                                    secureTextEntry={false}
                                    style={{ fontSize: 15 }}
                                />
                    }
                </View>
                <TouchableOpacity
                    onPress={() => {
                        if (isShowPassword && password) {
                            setIsShowPassword(!isShowPassword)
                        }
                        else if (!isShowPassword) {
                            setIsShowPassword(!isShowPassword)
                        }
                        else if (isShowConfirmPassword) {
                            setIsShowConfirmPassword(!isShowConfirmPassword)
                        }
                        else if (!isShowConfirmPassword) {
                            setIsShowConfirmPassword(!isShowConfirmPassword)
                        }
                    }}
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