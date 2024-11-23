import React, { useState } from 'react'
import { Toast, ToastTitle, useToast } from '@/components/ui/toast'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { LinkText } from '@/components/ui/link'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox'
import {
  ArrowLeftIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
} from '@/components/ui/icon'
import { Button, ButtonText } from '@/components/ui/button'
import { Keyboard } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle, AlertTriangleIcon } from 'lucide-react-native'
import { Pressable } from '@/components/ui/pressable'
import { Link, useRouter } from 'expo-router'
import AuthLayout from '@/screens/auth/layout/_layout'
import { renderAlertIcon } from '@/utils/icons'
import { Image } from '@/components/ui/image'
import { Spinner } from '@/components/ui/spinner'
import colors from 'tailwindcss/colors'

const USERS = [
  {
    email: 'gabrial@gmail.com',
    password: 'Gabrial@123',
  },
  {
    email: 'tom@gmail.com',
    password: 'Tom@123',
  },
  {
    email: 'thomas@gmail.com',
    password: 'Thomas@1234',
  },
]

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
})

type LoginSchemaType = z.infer<typeof loginSchema>

const LoginWithLeftBackground = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  })
  const toast = useToast()
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  })

  const onSubmit = (data: LoginSchemaType) => {
    const user = USERS.find(element => element.email === data.email)
    if (user) {
      if (user.password !== data.password)
        setValidated({ emailValid: true, passwordValid: false })
      else {
        setValidated({ emailValid: true, passwordValid: true })
        toast.show({
          placement: 'bottom right',
          render: ({ id }) => {
            return (
              <Toast nativeID={id} variant="outline" action="success">
                <ToastTitle>Logged in successfully!</ToastTitle>
              </Toast>
            )
          },
        })
        reset()
      }
    } else {
      setValidated({ emailValid: false, passwordValid: true })
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
  const router = useRouter()

  return (
    <VStack className="max-w-[440px] h-5/6 w-full justify-between" space="md">
      <VStack
        style={{ borderRadius: 75 }}
        className="w-full max-w-[440px] h-fit bg-background mb-6"
        space="lg">
        <Image
          source={imageSource}
          className={`w-[150px] h-[150px] self-center rounded-full border-0 p-0 overflow-hidden  `}
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
          <FormControl
            isInvalid={!!errors?.email || !validated.emailValid}
            className="w-full">
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
                <Input>
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
            <FormControlError>
              <FormControlErrorIcon as={renderAlertIcon} />
              <FormControlErrorText className={'text-error'}>
                {errors?.email?.message ||
                  (!validated.emailValid && 'Email ID not found')}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          {/* Label Message */}
          <FormControl
            isInvalid={!!errors.password || !validated.passwordValid}
            className="w-full">
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
                <Input>
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
            <FormControlError>
              <FormControlErrorIcon as={renderAlertIcon} />
              <FormControlErrorText className={'text-error'}>
                {errors?.password?.message ||
                  (!validated.passwordValid && 'Password was incorrect')}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <HStack className="w-full justify-between ">
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
            />
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
