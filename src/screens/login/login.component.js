import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import IMAGES from '../../images/images'
import styles from './login.styles'
import TextInputField from '../../components/textinput-field/textinput-field.component'
import RadioButton from '../../components/radio-button/radio-button.component'
import PrimaryButton from '../../components/primary-button/primary-button.component'
import CheckBox from '../../components/checkbox/checkbox.component'

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={IMAGES.logo}
                    style={styles.image}
                    resizeMode="cover" />
                <Text style={styles.appName}>Ecommerce App</Text>
            </View>

            <TextInputField name="Tên đăng nhập" />

            <TextInputField
                name="Mật khẩu"
                isHidePassWord
                password
            />
            <View style={styles.saveAndForgotPassword}>
                <CheckBox
                    name={"Lưu mật khẩu"}
                />
                <TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>Quên mật khẩu</Text>
                </TouchableOpacity>
            </View>

            <PrimaryButton
                style={{ borderRadius: 31, marginTop: 20, marginBottom: 20 }}
            >
                Đăng nhập
            </PrimaryButton>
            <View style={{ flexDirection: 'row' }}>
                {/* '#009900', '#00CC33'' */}
                <Text style={{ fontSize: 18, marginRight: 5 }}>Bạn đã có tài khoản?</Text>
                <TouchableOpacity>
                    <Text style={{ fontSize: 18, color: '#00CC33' }}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login