import styles from './input.module.css'
import Select from 'react-select'

type Props = {
  label: string
  options: { value: string; label: string }[]
  isMulti?: boolean
  required?: boolean
}

export const SelectInput = (props: Props) => {
  const { required, label, options, isMulti } = props
  return (
    <>
      <label className={styles.label}>
        {label}
        {required && '*'}
      </label>
      <Select
        id={label}
        classNamePrefix={'smcyber'}
        options={options}
        placeholder={'Please Select'}
        isClearable={true}
        isMulti={isMulti ? isMulti : false}
      />
    </>
  )
}
