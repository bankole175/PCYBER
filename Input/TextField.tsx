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
        className={`${styles.formControl} ${styles.noError}`}
        required={required}
      />
      {(formObject?.[value]).length <= 0 && (
        <p className="text-danger" style={{ marginTop: '-30px' }}>
          {label} is required
        </p>
      )}
    </>
  )
}
