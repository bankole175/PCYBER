import styles from './input.module.css'
import { InputT } from '../utils/type'

export const TextField = (props: InputT) => {
  const { type, required, label } = props
  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <input
        type={type ? type : 'text'}
        className={`${styles.formControl} ${styles.noError}`}
        required={required}
      />
    </>
  )
}
