// CustomComponents.ts
import React, { ReactNode } from 'react'
import { cssInterop } from 'nativewind'
import {
  Button,
  ButtonProps,
  Card,
  CardProps,
  Text,
  TextProps,
  ThemeBase,
  TextInput,
  TextInputProps,
} from 'react-native-paper'
import { ElevationLevels } from 'react-native-paper/lib/typescript/types'

// Enable NativeWind className support for Paper components
cssInterop(Text, { className: 'style' })
cssInterop(TextInput, { className: 'style' })
cssInterop(Button, { className: 'style' })
cssInterop(Card, { className: 'style' })

// CustomText Component
interface CustomTextProps extends TextProps<ThemeBase> {
  children: ReactNode
  className?: string
  style?: object
}

export const TextField: React.FC<CustomTextProps> = ({
  children,
  className,
  style,
  ...props
}) => (
  <Text className={className} style={style} {...props}>
    {children}
  </Text>
)

// CustomText Component
interface CustomTextInputProps extends TextInputProps {
  className?: string
  style?: object
}

const TextInputField = (props: CustomTextInputProps) => <TextInput {...props} />

TextInputField.Icon = TextInput.Icon
TextInputField.Affix = TextInput.Affix

export { TextInputField }

// CustomButton Component
interface CustomButtonProps extends ButtonProps {
  children: ReactNode
  className?: string
  style?: object
  onPress?: () => void
}

export const Button_: React.FC<CustomButtonProps> = ({
  children,
  className,
  style,
  ...props
}) => (
  <Button className={className} style={style} {...props}>
    {children}
  </Button>
)

interface OutlinedCardProps extends CardProps {
  children: ReactNode
  className?: string
  style?: object
  mode: 'outlined'
  elevation?: never
}

interface ElevatedCardProps extends CardProps {
  children: ReactNode
  className?: string
  style?: object
  mode?: 'elevated'
  elevation?: ElevationLevels
}

interface ContainedCardProps extends CardProps {
  mode?: 'contained'
  elevation?: never
}

type DynamicCardProps =
  | ContainedCardProps
  | ElevatedCardProps
  | OutlinedCardProps

export const Card_: React.FC<DynamicCardProps> = ({
  children,
  className,
  style,
  ...props
}) => (
  <Card className={className} style={style} {...props}>
    {children}
  </Card>
)
