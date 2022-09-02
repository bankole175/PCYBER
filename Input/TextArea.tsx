import { TextAreaT } from '../utils/type'
import styles from './input.module.css'
import { FC } from 'react'
import { useForm } from '../hooks'

export const TextArea: FC<TextAreaT> = ({
  required,
  label,
  formObject,
  value,
  ...textAreaProps
}) => {
  const { handleChange, values, errors } = useForm()

  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <textarea
        {...textAreaProps}
        onChange={(event) => handleChange(event, label, formObject)}
        className={`${styles.formControl} ${styles.noError} ${styles.textarea}`}
      />
      {errors[value as keyof typeof errors] && (
        <p className="text-danger" style={{ marginTop: '-30px' }}>
          {errors[value as keyof typeof errors]}
        </p>
      )}
    </>
  )
}
