import styles from './button.module.css'
import React from 'react'

type Props = {
  onClick?: (se: React.SyntheticEvent) => void
  children: React.ReactNode
}

const Button = (props: Props) => {
  const { children, onClick } = props

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
