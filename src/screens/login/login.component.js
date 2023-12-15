import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IMAGES from '../../images/images'
import styles from './login.styles'
import TextInputField from '../../components/textinput-field/textinput-field.component'
import PrimaryButton from '../../components/primary-button/primary-button.component'
import CheckBox from '../../components/checkbox/checkbox.component'

const Login = () => {
    const [isCheck, setIsCheck] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={IMAGES.logo}
                    style={styles.image}
                    resizeMode="cover" />
                <Text style={styles.appName}>Ecommerce App</Text>
            </View>

            <TextInputField
                label="Tên đăng nhập"
                iconLeft="person-outline"
                placeholder={"Tên đăng nhập"}
            />

            <TextInputField
                label="Mật khẩu"
                iconLeft="key-outline"
                iconRight={isShowPassword ? "eye-outline" : "eye-off-outline"}
                placeholder={"Mật khẩu"}
                isShowPassword={isShowPassword}
                onPress={() => setIsShowPassword(!isShowPassword)}
            />
            <View style={styles.saveAndForgotPassword}>
                <CheckBox
                    label={"Lưu mật khẩu"}
                    isCheck={isCheck}
                    onPress={() => setIsCheck(!isCheck)}
                />
                <TouchableOpacity>
                    <Text style={styles.textForgotPassword}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>

            <PrimaryButton
                style={styles.primaryButton}
            >
                Đăng nhập
            </PrimaryButton>
            <View style={styles.contentBottom}>
                <Text style={styles.textAlreadyHaveAnAccount}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity>
                    <Text style={styles.textRegister}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login