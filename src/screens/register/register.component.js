import { View, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './register.styles'
import IMAGES from '../../images/images'
import TextInputField from '../../components/textinput-field/textinput-field.component'
import RadioButton from '../../components/radio-button/radio-button.component'
import PrimaryButton from '../../components/primary-button/primary-button.component'
import { useForm, Controller } from 'react-hook-form'

const Register = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('data', data);
  }
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [valueArray, setValueArray] = useState([
    { id: 1, label: "Chủ shop", isCheckRadio: false },
    { id: 2, label: "Người mua hàng", isCheckRadio: false },
  ]);

  return (
    <ScrollView style={styles.containerScrollView}>
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
                iconRight={isShowPassword ? "eye-outline" : "eye-off-outline"}
                placeholder={"Mật khẩu"}
                isShowPassword={isShowPassword}
                onPress={() => setIsShowPassword(!isShowPassword)}
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
                iconRight={isShowConfirmPassword ? "eye-outline" : "eye-off-outline"}
                placeholder={"Xác nhận mật khẩu"}
                isShowPassword={isShowConfirmPassword}
                onPress={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="confirmPassword"
          />


          <Text style={styles.text}>Bạn đăng ký tài khoản với vai trò là:</Text>

          <View style={styles.containerRadioButton}>
            {valueArray.map((item) => (
              <RadioButton
                label={item.label}
                isCheckRadio={item.isCheckRadio}
                key={item.id}
                onPress={() => handleCheck(item.id)}
              />
            ))}
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