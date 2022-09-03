import React from 'react'

export interface InputT extends React.ComponentProps<'input'> {
  label: string
  error?: boolean
  formObject: FormObjectT
  value: string
  type?: string
  required?: boolean
}

export interface TextAreaT extends React.ComponentProps<'textarea'> {
  label: string
  formObject: FormObjectT
  value: string | undefined
  type?: string
  required?: boolean
}

export interface FormObjectT {
  firstName: undefined
  lastName: undefined
  email: undefined
  aboutUs: undefined
  phoneNumber?: undefined
  interest?: undefined
  learn?: undefined
  protecting?: undefined
  message?: undefined
}

export interface DemoFormT {
  firstName: undefined
  lastName: undefined
  email: undefined
  aboutUs: undefined
}
