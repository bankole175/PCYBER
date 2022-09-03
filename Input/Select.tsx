import styles from './input.module.css'
import Select, { SingleValue } from 'react-select'
import { FormObjectT } from '../utils/type'
import React from 'react'

interface Props extends React.ComponentProps<'select'> {
  id: string
  label: string
  options: { value: string; label: string }[]
  formObject: FormObjectT
  isMulti?: boolean
  required?: boolean
}

export const SelectInput = (props: Props) => {
  const { required, label, options, isMulti = false, formObject, id } = props

  const handleChange = (event: SingleValue<any>) => {
    formObject[id as keyof typeof formObject] = event.label
  }
  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <Select
        instanceId={id}
        id={id}
        classNamePrefix={'smcyber'}
        options={options}
        placeholder={'Please Select'}
        onChange={(event) => handleChange(event)}
        isClearable={true}
        isMulti={isMulti}
      />
    </>
  )
}
