import { Toast, ToastTitle } from '@/components/ui/toast'
import React from 'react'
import { InterfaceToastProps } from '@gluestack-ui/toast/lib/types'
import { FirebaseError } from '@firebase/util'

type HandleErrorProps = {
  e: unknown
  message: string
  toast: {
    show: (props: InterfaceToastProps) => string
    close: (id: string) => void
    closeAll: () => void
    isActive: (id: string) => boolean
  }
}

export const handleError = (props: HandleErrorProps) => {
  const { e, message, toast } = props

  if (e instanceof FirebaseError) {
    toast.show({
      placement: 'top left',
      render: ({ id }) => {
        return (
          <Toast
            nativeID={id}
            className="bg-error-100"
            variant="solid"
            action="error">
            <ToastTitle className="color-error-500">
              {`${message} : ${e.message}`}
            </ToastTitle>
          </Toast>
        )
      },
    })
  } else {
    toast.show({
      placement: 'top left',
      render: ({ id }) => {
        return (
          <Toast
            nativeID={id}
            className="bg-error-100"
            variant="solid"
            action="error">
            <ToastTitle className="color-error-500">
              {`Unknown error : ${e}`}
            </ToastTitle>
          </Toast>
        )
      },
    })
  }
}
