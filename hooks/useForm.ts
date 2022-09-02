import React, { useState } from 'react'
import { ContactFormT } from '../utils/type'

export const useForm = () => {
  //Form values
  const [values, setValues] = useState({})
  //Errors
  const [errors, setErrors] = useState({})

  const validate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string,
    value: any,
    label: string,
  ) => {
    const type = event.target.attributes[0].value

    switch (type) {
      case 'text':
      case 'tel':
      case 'number':
        if (value.length <= 0) {
          setErrors({
            ...errors,
            [name]: `${label} is required`,
          })
        } else {
          const errorUpdate = { ...errors }
          delete errorUpdate[name as keyof typeof errorUpdate]
          setErrors(errorUpdate)
        }
        break

      case 'email':
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          ).test(value)
        ) {
          setErrors({
            ...errors,
            [name]: 'Enter a valid email address',
          })
        } else {
          const errorUpdate = { ...errors }
          delete errorUpdate[name as keyof typeof errorUpdate]
          setErrors(errorUpdate)
        }
        break
      default:
        break
    }
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    console.log(errors, 'values')
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    label: string,
    formObject: ContactFormT,
  ) => {
    //To stop default events
    event.persist()

    let name = event.target.name
    let val = event.target.value

    console.log(event, 'heyyy')

    validate(event, name, val, label)

    formObject[name as keyof typeof formObject] = val

    setValues({
      ...values,
      [name]: val,
    })
  }

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  }
}
