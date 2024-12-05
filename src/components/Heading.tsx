import { TextField } from '@/components/WrappedComponents'
import React from 'react'

interface HeadingProps extends React.ComponentProps<typeof TextField> {
  styles?: string // Optional additional styles
}

export const Heading: React.FC<HeadingProps> = ({ styles = '', ...props }) => {
  return (
    <TextField
      className={`text-onBackground font-bold font-heading tracking-sm my-0 ${styles}`}
      {...props}
    />
  )
}
