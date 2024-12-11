import React from 'react'
import AuthLayout from '../layout/_layout'
import { View } from 'react-native'
import { HelperText, IconButton } from 'react-native-paper'
import { router } from 'expo-router'
import { Heading } from '@/components/Heading'
import {
  Button_,
  TextField,
  TextInputField,
} from '@/components/WrappedComponents'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { sendPasswordResetEmail } from '@firebase/auth'
import { auth } from '../../../../firebaseConfig'
import { useSnackbar } from '@/components/SnackbarProvider'

export const ForgotPasswordScreen = () => {
  const { showSnackbar } = useSnackbar()
  const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const handleForgotPassword = (data: { email: string }) => {
    console.log(data.email)

    // await sendPasswordResetEmail(auth, data.email)
    showSnackbar(
      'Password reset email sent. Check your inbox.',
      'success',
      'email-fast-outline',
    )
    reset()
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
          Forgot Password?
        </Heading>
      </View>
      <View className={'items-center'}>
        <TextField className="text-typography text-md">
          Enter email ID associated with your account.
        </TextField>
      </View>
      <View className={'flex-col max-w-fit gap-10'}>
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
        <View className={'w-full align-middle justify-center'}>
          <Button_
            icon="email-fast"
            mode="contained"
            onPress={handleSubmit(handleForgotPassword)}>
            Send Email
          </Button_>
        </View>
      </View>
    </View>
  )
}

export const ForgotPassword = () => {
  return (
    <AuthLayout>
      <ForgotPasswordScreen />
    </AuthLayout>
  )
}
