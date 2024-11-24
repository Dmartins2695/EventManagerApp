import { Icon } from '@/components/ui/icon'
import { AlertTriangle } from 'lucide-react-native'
import React from 'react'

export const renderAlertIcon = () => {
  return (
    <Icon as={AlertTriangle} className="md:hidden stroke-error-500" size="sm" />
  )
}