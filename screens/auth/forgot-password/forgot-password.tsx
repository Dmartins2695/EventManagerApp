import { Toast, ToastTitle, useToast } from '@/components/ui/toast'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Input, InputField } from '@/components/ui/input'
import { ArrowLeftIcon, Icon } from '@/components/ui/icon'
import { Button, ButtonText } from '@/components/ui/button'
import { Keyboard } from 'react-native'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle } from 'lucide-react-native'
import { Pressable } from '@/components/ui/pressable'

import AuthLayout from '@/screens/auth/layout/_layout'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { sendPasswordResetEmail } from '@firebase/auth'
import { auth } from '@/firebaseConfig'
import { router } from 'expo-router'

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
})

type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>

const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  })
  const toast = useToast()

  const onSubmit = async (_data: forgotPasswordSchemaType) => {
    await sendPasswordResetEmail(auth, _data.email)
    toast.show({
      placement: 'top',
      render: ({ id }) => {
        return (
          <Toast
            nativeID={id}
            className="bg-success-100"
            variant="solid"
            action="success">
            <ToastTitle className="color-success-500">
              Please check you email to reset you password!
            </ToastTitle>
          </Toast>
        )
      },
    })
    reset()
    router.push('/auth/signin')
  }

  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }
  const navigation = useNavigation()
  return (
    <VStack className="max-w-[440px] w-full gap-8" space="md">
      <VStack space="md">
        <Pressable
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack()
            } else {
              // @ts-ignore
              navigation.navigate('index')
            }
          }}>
          <Icon as={ArrowLeftIcon} className="stroke-primary" size="xl" />
        </Pressable>
        <VStack className="gap-8">
          <Heading className="text-center text-typography" size="3xl">
            Forgot Password?
          </Heading>
          <Text className="text-typography text-sm">
            Enter email ID associated with your account.
          </Text>
        </VStack>
      </VStack>

      <VStack space="xl" className="w-full gap-8 ">
        <FormControl isInvalid={!!errors?.email} className="w-full">
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
                  await forgotPasswordSchema.parseAsync({ email: value })
                  return true
                } catch (error: any) {
                  return error.message
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input className="h-fit">
                <InputField
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
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button className="w-full" onPress={handleSubmit(onSubmit)}>
          <ButtonText className="text-typography-contrast font-medium">
            Send Link
          </ButtonText>
        </Button>
      </VStack>
    </VStack>
  )
}

export const ForgotPassword = () => {
  return (
    <AuthLayout>
      <ForgotPasswordScreen />
    </AuthLayout>
  )
}
