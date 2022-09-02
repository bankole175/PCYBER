import React from 'react'

export interface InputT extends React.ComponentProps<'input'> {
  label: string
  error?: boolean
  formObject: ContactFormT | undefined
  value: string | undefined
  type?: string
  required?: boolean
}

export interface TextAreaT extends React.ComponentProps<'textarea'> {
  label: string
  formObject: ContactFormT | undefined
  value: string | undefined
  type?: string
  required?: boolean
}

export type ContactFormT = {
  firstName: undefined
  lastName: undefined
  email: undefined
  phoneNumber: undefined
  protecting: undefined
  aboutUs: undefined
  learn: undefined
}
