import React, { useState } from 'react'
import { Image, View } from 'react-native'
import AuthLayout from '@/screens/auth/layout/_layout'
import { Heading } from '@/components/Heading'
import {
  Button_,
  TextField,
  TextInputField,
} from '@/components/WrappedComponents'
import { Link, router } from 'expo-router'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../../../../firebaseConfig'
import { useSnackbar } from '@/components/SnackbarProvider'
import { lightTheme } from '../../../../theme'
import { FirebaseError } from '@firebase/util'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { HelperText } from 'react-native-paper'

// Validation schema using Yup
const loginSchema = Yup.object().shape({
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
})

const Login = () => {
  const imageSource = require('/assets/images/ejasLogo-Photoroom.png')
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
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const handleLogin = async (data: { email: any; password: any }) => {
    const { email, password } = data
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      if (user) {
        router.push('/user/dashboard')
        reset()
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        showSnackbar(
          'Unsuccessful login! Please verify your email and password!',
          'error',
        )
        console.log(e.message)
      }
    }
  }

  return (
    <View className={'flex-col max-w-fit gap-10'}>
      <View
        className={'mb-6 w-full max-w-[440px] max-h-64 min-h-64 bg-background'}>
        <Image
          source={imageSource}
          className="h-64 w-64 self-center rounded-full border-0 p-0 overflow-hidden"
          alt={'logo'}
        />
      </View>
      <View className={'items-center'}>
        <Heading variant={'headlineLarge'} className={'text-primary'}>
          Login
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
        <View className={'w-full flex-row justify-between'}>
          <View></View>
          <View>
            <Link
              href={'/auth/forgot-password'}
              className={'underline text-info-600 font-medium font-body'}>
              Forgot password?
            </Link>
          </View>
        </View>
      </View>
      <View className={'w-full align-middle justify-center'}>
        <Button_
          icon="login"
          mode="contained"
          onPress={handleSubmit(handleLogin)}>
          Log In
        </Button_>
        <View className={'flex-row items-center justify-center pt-3'}>
          <View className={'w-auto'}>
            <TextField variant={'bodyMedium'}>
              Don't have an account?{' '}
            </TextField>
          </View>
          <View>
            <Link
              href={'/auth/signup'}
              className={'underline text-info-600 font-body font-medium'}>
              Sign up
            </Link>
          </View>
        </View>
      </View>
    </View>
  )
}

export const SignIn = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
}
