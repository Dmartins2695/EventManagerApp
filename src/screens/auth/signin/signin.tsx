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
import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from '@firebase/auth'
import { auth } from '../../../../firebaseConfig'
import { useSnackbar } from '@/components/SnackbarProvider'
import { lightTheme } from '../../../../theme'
import { FirebaseError } from '@firebase/util'

export const Login = () => {
  const imageSource = require('/assets/images/ejasLogo-Photoroom.png')
  const { showSnackbar } = useSnackbar()
  const [state, setState] = useState({
    email: '',
    password: '',
    rememberMe: false,
    showPassword: false,
  })

  const handleState = (target: string, value: string | boolean) => {
    setState(prevState => {
      return { ...prevState, [target]: value }
    })
  }

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password,
      )
      if (user) {
        router.push('/user/dashboard')
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        showSnackbar('Unsuccessful login! Please verify your email and password!', 'error')
        console.log(e.message)
      }
    }
  }

  return (
    <View className={'flex-col max-w-fit gap-6'}>
      <View
        className={
          'mb-6 w-full max-w-[440px] max-h-64 min-h-64  bg-background'
        }>
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
      <View className={'gap-8'}>
        <View className={'w-full align-middle justify-center px-3'}>
          <TextInputField
            mode={'flat'}
            className={'bg-background'}
            value={state.email}
            label={'Username'}
            onChangeText={value => {
              handleState('username', value)
            }}
          />
        </View>
        <View className={'w-full align-middle justify-center px-3 '}>
          <TextInputField
            mode={'flat'}
            className={'bg-background'}
            value={state.password}
            secureTextEntry
            right={
              <TextInputField.Icon
                color={lightTheme.colors.primary}
                icon={state.showPassword ? 'eye-off' : 'eye'}
                onPress={() => handleState('showPassword', !state.showPassword)}
              />
            }
            label={'Password'}
            onChangeText={value => {
              handleState('password', value)
            }}
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
        <View className={'w-full align-middle justify-center'}>
          <Button_ icon="login" mode="contained" onPress={handleLogin}>
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
                href={'/auth/forgot-password'}
                className={'underline text-info-600 font-body font-medium '}>
                Sign up
              </Link>
            </View>
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
