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
    type: string,
  ) => {
    //A function to validate each input values

    switch (type) {
      case 'text':
        if (value.length <= 0) {
          // we will set the error state

          setErrors({
            ...errors,
            [name]: `${name} is required`,
          })
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          setErrors(errors)
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
          setErrors(errors)
        }
        break
      default:
        break
    }
  }

  const handleSubmit = () => {
    console.log(values, 'values')
  }

  //A method to handle form inputs
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    label: string,
    contact: ContactFormT | undefined,
  ) => {
    console.log(event.target.attributes[0], 'event')
    console.log(event, 'label')
    //To stop default events
    event.persist()

    let name = event.target.name
    let val = event.target.value
    let type = event.target.attributes[0].value
    console.log(type, 'type')
    console.log(event, 'event')

    validate(event, name, val, type)

    if (contact) {
      // @ts-ignore
      contact[label] = val
    }
    //Let's set these values in state
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
