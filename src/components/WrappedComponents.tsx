// CustomComponents.ts
import React, { ReactNode } from 'react'
import { cssInterop } from 'nativewind'
import { Text, Button, Card } from 'react-native-paper'

// Enable NativeWind className support for Paper components
cssInterop(Text, { className: 'style' })
cssInterop(Button, { className: 'style' })
cssInterop(Card, { className: 'style' })

// CustomText Component
interface CustomTextProps {
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

// CustomButton Component
interface CustomButtonProps {
  children: ReactNode
  className?: string
  style?: object
  onPress?: () => void
}

export const Button_: React.FC<CustomButtonProps> = ({
  children,
  className,
  style,
  onPress,
  ...props
}) => (
  <Button className={className} style={style} onPress={onPress} {...props}>
    {children}
  </Button>
)

// CustomCard Component (Optional)
interface CustomCardProps {
  children: ReactNode
  className?: string
  style?: object
}

export const Card_: React.FC<CustomCardProps> = ({
  children,
  className,
  style,
  ...props
}) => (
  <Card className={className} style={style} {...props}>
    {children}
  </Card>
)
