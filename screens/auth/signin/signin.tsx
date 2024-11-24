import React, { useState } from 'react'
import { Toast, ToastTitle, useToast } from '@/components/ui/toast'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { LinkText } from '@/components/ui/link'
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { EyeIcon, EyeOffIcon } from '@/components/ui/icon'
import { Button, ButtonText } from '@/components/ui/button'
import { Keyboard } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useRouter } from 'expo-router'
import AuthLayout from '@/screens/auth/layout/_layout'
import { Image } from '@/components/ui/image'
import {
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from '@firebase/auth'
import { auth } from '@/firebaseConfig'
import { handleError } from '@/utils/error'

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
})

type LoginSchemaType = z.infer<typeof loginSchema>

const LoginWithLeftBackground = () => {
  const { control, handleSubmit, reset } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })
  const toast = useToast()
  const router = useRouter()

  const onSubmit = async (data: LoginSchemaType) => {
    /*const methods = await fetchSignInMethodsForEmail(auth, data.email)
    console.log(methods)
    if (methods.length === 0) {
      return toast.show({
        placement: 'top left',
        render: ({ id }) => {
          return (
            <Toast
              nativeID={id}
              className="bg-error-100"
              variant="solid"
              action="error">
              <ToastTitle className="color-error-500">
                Email does not exist, please make sure to insert a valid email!
              </ToastTitle>
            </Toast>
          )
        },
      })
    }*/

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      if (user) {
        router.push('/user/dashboard')
        toast.show({
          placement: 'top left',
          render: ({ id }) => {
            return (
              <Toast nativeID={id} className="bg-success-100" variant="solid" action="success">
                <ToastTitle className="color-success-500">Logged in successfully!</ToastTitle>
              </Toast>
            )
          },
        })
        reset()
      }
    } catch (e) {
      handleError({ e, message: 'Unsucessful Login', toast })
    }
  }
  const [showPassword, setShowPassword] = useState(false)

  const handleState = () => {
    setShowPassword(showState => {
      return !showState
    })
  }
  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }
  const imageSource = require('@/assets/images/ejasLogo-Photoroom.png')

  return (
    <VStack className="max-w-[440px] w-full justify-between" space="md">
      <VStack
        style={{
          borderRadius: 75,
        }}
        className="w-full max-w-[440px] max-h-64 min-h-64  bg-background mb-6"
        space="lg">
        <Image
          source={imageSource}
          className="h-64 w-64 self-center rounded-full border-0 p-0 overflow-hidden"
          alt={'logo'}
        />
      </VStack>
      <VStack className="items-center" space="md">
        <VStack>
          <Heading className="text-center text-typography" size="3xl">
            Login
          </Heading>
        </VStack>
      </VStack>
      <VStack className="w-full align-middle justify-center">
        <VStack space="xl" className="w-full">
          <FormControl className="w-full">
            <FormControlLabel>
              <FormControlLabelText className="text-typography">
                Email
              </FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="email"
              control={control}
              rules={{
                validate: async value => {
                  try {
                    await loginSchema.parseAsync({ email: value })
                    return true
                  } catch (error: any) {
                    return error.message
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input className="h-fit">
                  <InputField
                    className="text-sm text-typography"
                    placeholder="Enter email"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
          </FormControl>
          {/* Label Message */}
          <FormControl className="w-full">
            <FormControlLabel>
              <FormControlLabelText className="text-typography">
                Password
              </FormControlLabelText>
            </FormControlLabel>
            <Controller
              defaultValue=""
              name="password"
              control={control}
              rules={{
                validate: async value => {
                  try {
                    await loginSchema.parseAsync({ password: value })
                    return true
                  } catch (error: any) {
                    return error.message
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input className="h-fit">
                  <InputField
                    className="text-sm"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                  <InputSlot onPress={handleState} className="pr-3">
                    <InputIcon
                      className={'stroke-primary-500'}
                      as={showPassword ? EyeIcon : EyeOffIcon}
                    />
                  </InputSlot>
                </Input>
              )}
            />
          </FormControl>
          <HStack className="w-full justify-between ">
            {/* Learn how to implement a remember me
           <Controller
              name="rememberme"
              defaultValue={false}
              control={control}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  size="sm"
                  value="Remember me"
                  isChecked={value}
                  onChange={onChange}
                  aria-label="Remember me">
                  <CheckboxIndicator className={'border-primary-600'}>
                    <CheckboxIcon
                      as={CheckIcon}
                      className={'stroke-white bg-primary-600'}
                    />
                  </CheckboxIndicator>
                  <CheckboxLabel>Remember me</CheckboxLabel>
                </Checkbox>
              )}
            />*/}
            <Link href="/auth/forgot-password">
              <LinkText className="font-medium text-sm text-secondary-700 group-hover/link:text-secondary-400">
                Forgot Password?
              </LinkText>
            </Link>
          </HStack>
        </VStack>
        <VStack className="w-full my-7 " space="lg">
          <Button className="w-full" onPress={handleSubmit(onSubmit)}>
            <ButtonText className="text-typography-contrast font-medium">
              Log in
            </ButtonText>
          </Button>
        </VStack>
        <HStack className="self-center" space="sm">
          <Text size="md">Don't have an account?</Text>
          <Link href="/auth/signup">
            <LinkText
              className="font-medium text-secondary-700 group-hover/link:text-secondary-600  group-hover/pressed:text-secondary-700"
              size="md">
              Sign up
            </LinkText>
          </Link>
        </HStack>
      </VStack>
    </VStack>
  )
}

export const SignIn = () => {
  return (
    <AuthLayout>
      <LoginWithLeftBackground />
    </AuthLayout>
  )
}
