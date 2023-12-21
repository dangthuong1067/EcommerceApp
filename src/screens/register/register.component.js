import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './register.styles'
import IMAGES from '../../images/images'
import TextInputField from '../../components/textinput-field/textinput-field.component'
import RadioButton from '../../components/radio-button/radio-button.component'
import PrimaryButton from '../../components/primary-button/primary-button.component'
import { useForm, Controller } from 'react-hook-form'

const Register = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "buyer"
    }
  });

  const onSubmit = (data) => {
    console.log('data', data);
  }

  return (
    <ScrollView style={styles.containerScrollView}>
      <KeyboardAvoidingView
        style={styles.flex1}
      >
        <View style={styles.container}>
          <View style={styles.containerImage}>
            <Image source={IMAGES.logo}
              style={styles.image}
              resizeMode="cover" />
            <Text style={styles.appName}>Ecommerce App</Text>
          </View>

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputField
                label="Tên đăng nhập"
                iconLeft="person-outline"
                placeholder={"Tên đăng nhập"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="username"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputField
                label="Email"
                iconLeft="mail-outline"
                placeholder={"Email"}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputField
                label="Mật khẩu"
                iconLeft="key-outline"
                showPassword={"eye-off-outline"}
                hidePassword={"eye-outline"}
                placeholder={"Mật khẩu"}
                password
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />

          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInputField
                label="Xác nhận mật khẩu"
                iconLeft="key-outline"
                showPassword={"eye-off-outline"}
                hidePassword={"eye-outline"}
                placeholder={"Xác nhận mật khẩu"}
                confirmPassword
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirmPassword"
          />

          <Text style={styles.text}>Bạn đăng ký tài khoản với vai trò là:</Text>

          <View style={styles.containerRadioButton}>
            <Controller
              control={control}
              render={(obj) => {
                const { field: { onChange, value } } = obj
                return (
                  <RadioButton
                    label={"Người mua hàng"}
                    isCheckRadio={value === "buyer"}
                    value="buyer"
                    onChange={onChange}
                  />
                )
              }}
              name='role'
            />

            <Controller
              control={control}
              render={(obj) => {
                const { field: { onChange, value } } = obj
                return (
                  <RadioButton
                    label={"Chủ shop"}
                    isCheckRadio={value === "owner"}
                    value="owner"
                    onChange={onChange}
                  />
                )
              }}
              name='role'
            />

          </View>
          <PrimaryButton
            style={styles.primaryButton}
            onPress={handleSubmit(onSubmit)}
          >
            Đăng ký
          </PrimaryButton>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default Register;