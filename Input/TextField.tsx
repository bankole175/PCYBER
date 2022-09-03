import styles from './input.module.css'
import { InputT } from '../utils/type'
import { FC } from 'react'
import { useForm } from '../hooks'

export const TextField: FC<InputT> = ({
  type = 'text',
  required = false,
  label,
  value,
  formObject,
  error,
  ...inputProps
}) => {
  const { handleChange, errors } = useForm()
  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <input
        type={type}
        {...inputProps}
        onChange={(event) => handleChange(event, label, formObject, required)}
        className={`${styles.formControl} ${
          errors[value as keyof typeof errors] ? styles.error : styles.noError
        }`}
        required={required}
      />
      {errors[value as keyof typeof errors] && (
        <p className="text-danger" style={{ marginTop: '-30px' }}>
          {errors[value as keyof typeof errors]}
        </p>
      )}
    </>
  )
}
