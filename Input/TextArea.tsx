import { TextAreaT } from '../utils/type'
import styles from './input.module.css'
import { FC } from 'react'
import { useForm } from '../hooks'

export const TextArea: FC<TextAreaT> = ({
  required = false,
  label,
  formObject,
  value,
  ...textAreaProps
}) => {
  const { handleChange, errors } = useForm()

  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <textarea
        {...textAreaProps}
        onChange={(event) => handleChange(event, label, formObject, required)}
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
