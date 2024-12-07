import React, { createContext, ReactNode, useContext, useState } from 'react'
import { Icon, Snackbar, MD3Colors } from 'react-native-paper'
import { cssInterop } from 'nativewind'
import { TextField } from '@/components/WrappedComponents'
import { IconSource } from 'react-native-paper/lib/typescript/components/Icon'
import { View } from 'react-native'
import { lightTheme } from '../../theme'

cssInterop(Snackbar, { className: 'style' })

interface SnackbarContextProps {
  visible: boolean
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  showSnackbar: (
    message: string,
    type: 'success' | 'error' | 'info' | 'warning',
    icon?: IconSource,
  ) => void
  hideSnackbar: () => void
  icon: IconSource
}

const SnackbarContext = createContext<SnackbarContextProps | undefined>(
  undefined,
)

export const useSnackbar = () => {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within a SnackbarProvider')
  }
  return context
}

export const SnackbarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<'success' | 'error' | 'info' | 'warning'>(
    'info',
  )
  const [icon, setIcon] = useState<IconSource>('')

  const showSnackbar = (
    msg: string,
    alertType: 'success' | 'error' | 'info' | 'warning',
    icon?: IconSource,
  ) => {
    setMessage(msg)
    setType(alertType)
    setVisible(true)
    icon && setIcon(icon)
  }

  const hideSnackbar = () => setVisible(false)

  const pickColors = (
    type: 'success' | 'error' | 'info' | 'warning',
    field: 'bg' | 'text',
  ) => {
    switch (type) {
      case 'success':
        return field === 'bg' ? 'bg-success' : 'text-onSuccess'
      case 'error':
        return field === 'bg' ? 'bg-error' : 'text-onError'
      case 'info':
        return field === 'bg' ? 'bg-info' : 'text-onInfo'
      case 'warning':
        return field === 'bg' ? 'bg-warning' : 'text-onWarning'
    }
  }

  const pickIconColor = (type: 'success' | 'error' | 'info' | 'warning') => {
    switch (type) {
      case 'success':
        return lightTheme.colors.onSuccess
      case 'error':
        return lightTheme.colors.onError
      case 'info':
        return lightTheme.colors.onInfo
      case 'warning':
        return lightTheme.colors.onWarning
    }
  }

  const pickIcon = (type: 'success' | 'error' | 'info' | 'warning') => {
    switch (type) {
      case 'success':
        return 'check-circle-outline'
      case 'error':
        return 'alert-octagon-outline'
      case 'info':
        return 'information-outline'
      case 'warning':
        return 'alert-outline'
    }
  }

  return (
    <SnackbarContext.Provider
      value={{ visible, message, type, icon, showSnackbar, hideSnackbar }}>
      {children}
      <Snackbar
        visible={visible}
        onDismiss={hideSnackbar}
        className={`rounded-lg p-1 ${pickColors(type, 'bg')}`}
        duration={3000}>
        <View className={'flex-row px-3'}>
          <View className={'px-3'}>
            <Icon
              source={pickIcon(type)}
              color={pickIconColor(type)}
              size={18}
            />
          </View>
          <TextField className={`ml-2 ${pickColors(type, 'text')}`}>
            {message}
          </TextField>
        </View>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
