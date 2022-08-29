import { InputT } from '../utils/type'
import styles from './input.module.css'

export const TextArea = (props: InputT) => {
  const { required, label, row } = props
  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <textarea
        rows={row ? row : 3}
        className={`${styles.formControl} ${styles.noError} ${styles.textarea}`}
      />
    </>
  )
}
