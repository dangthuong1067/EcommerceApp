import { View, Text, Image, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './register.styles'
import IMAGES from '../../images/images'
import TextInputField from '../../components/textinput-field/textinput-field.component'
import RadioButton from '../../components/radio-button/radio-button.component'
import PrimaryButton from '../../components/primary-button/primary-button.component'

const Register = () => {
    return (
        <ScrollView style={{ flex: 1, paddingTop: 10 }}>
            <KeyboardAvoidingView
                behavior="position"
                style={styles.flex1}
            >
                <View style={styles.container}>
                    <View style={styles.containerImage}>
                        <Image source={IMAGES.logo}
                            style={styles.image}
                            resizeMode="cover" />
                        <Text style={styles.appName}>Ecommerce App</Text>
                    </View>

                    <TextInputField
                        name="Tên đăng nhập" />

                    <TextInputField
                        name="Email" />

                    <TextInputField
                        name="Mật khẩu"
                        isHidePassWord
                        password
                    />
                    <TextInputField
                        name="Xác nhận mật khẩu"
                        isHidePassWord
                        confirmPassWord
                    />
                    <Text style={{ fontSize: 18 }}>Bạn đăng ký tài khoản với vai trò là:</Text>

                    <View style={styles.containerRadioButton}>
                        <RadioButton
                            name={"Chủ shop"}
                            radio="radio1"
                        />
                        <RadioButton
                            name={"Người mua hàng"}
                            radio="radio2"
                        />
                    </View>
                    <PrimaryButton
                        style={{ borderRadius: 31, marginTop: 20 }}
                    >
                        Đăng ký
                    </PrimaryButton>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>

    )
}

export default Register