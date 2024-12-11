import React, { useState } from 'react'
import { View } from 'react-native'
import AuthLayout from '@/screens/auth/layout/_layout'
import { Heading } from '@/components/Heading'
import { Button_, TextInputField } from '@/components/WrappedComponents'
import { router } from 'expo-router'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../../../firebaseConfig'
import { useSnackbar } from '@/components/SnackbarProvider'
import { lightTheme } from '../../../../theme'
import { FirebaseError } from '@firebase/util'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { HelperText, IconButton } from 'react-native-paper'

// Validation schema using Yup
const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter') // Uppercase check
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter') // Lowercase check
    .matches(/[0-9]/, 'Password must contain at least one number') // Number check
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one special character',
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match') // Match with the password
    .required('Confirm password is required'),
})

const Register = () => {
  const { showSnackbar } = useSnackbar()
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState)
  }

  // Initialize React Hook Form
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleRegister = async (data: { email: any; password: any }) => {
    const { email, password } = data
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if (user) {
        router.push('/auth/signin')
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        showSnackbar('It was not possible to register your account', 'error')
        console.log(e.message)
      }
    }
  }

  return (
    <View className={'flex-col max-w-fit gap-10'}>
      <View>
        <IconButton
          icon={'arrow-left'}
          onPress={() => router.push('auth/signin')}
        />
      </View>
      <View className={'items-center'}>
        <Heading variant={'headlineLarge'} className={'text-primary'}>
          Sign Up
        </Heading>
      </View>
      <View>
        <View className={'w-full align-middle justify-center px-3'}>
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInputField
                  mode={'flat'}
                  className={'bg-background'}
                  value={value}
                  label={'Email'}
                  textContentType={'emailAddress'}
                  error={!!errors.email}
                  onChangeText={onChange}
                />
                <HelperText type="error">{errors.email?.message}</HelperText>
              </>
            )}
          />
        </View>
        <View className={'w-full align-middle justify-center px-3'}>
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInputField
                  mode={'flat'}
                  className={'bg-background'}
                  value={value}
                  secureTextEntry={!passwordVisible}
                  right={
                    <TextInputField.Icon
                      color={lightTheme.colors.primary}
                      icon={passwordVisible ? 'eye-off' : 'eye'}
                      onPress={togglePasswordVisibility}
                    />
                  }
                  label={'Password'}
                  error={!!errors.password}
                  onChangeText={onChange}
                />
                <HelperText type="error">{errors.password?.message}</HelperText>
              </>
            )}
          />
        </View>
        <View className={'w-full align-middle justify-center px-3'}>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <TextInputField
                  mode={'flat'}
                  className={'bg-background'}
                  value={value}
                  secureTextEntry={!passwordVisible}
                  right={
                    <TextInputField.Icon
                      color={lightTheme.colors.primary}
                      icon={passwordVisible ? 'eye-off' : 'eye'}
                      onPress={togglePasswordVisibility}
                    />
                  }
                  label={'Confirm Password'}
                  error={!!errors.confirmPassword}
                  onChangeText={onChange}
                />
                <HelperText type="error">
                  {errors.confirmPassword?.message}
                </HelperText>
              </>
            )}
          />
        </View>
      </View>
      <View className={'w-full align-middle justify-center'}>
        <Button_
          icon="account-outline"
          mode="contained"
          onPress={handleSubmit(handleRegister)}>
          Sign Up
        </Button_>
      </View>
    </View>
  )
}

export const SignUp = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  )
}
