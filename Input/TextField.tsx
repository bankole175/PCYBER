import styles from './input.module.css'
import { InputT } from '../utils/type'
import { FC } from 'react'
import { useForm } from '../hooks'

export const TextField: FC<InputT> = ({
  type = 'text',
  required,
  label,
  value,
  formObject,
  error,
  ...inputProps
}) => {
  const { handleChange, values, errors } = useForm()
  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <input
        type={type}
        {...inputProps}
        onChange={(event) => handleChange(event, label, formObject)}
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
