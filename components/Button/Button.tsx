import styles from './button.module.css'
import React from 'react'
import { Spinner } from 'react-bootstrap'

type Props = {
  onClick?: (me: React.MouseEvent) => void
  children: React.ReactNode
  isLoading: boolean
}

const Button = (props: Props) => {
  const { children, onClick, isLoading = false } = props

  return (
    <button onClick={onClick} className={styles.button}>
      {isLoading && (
        <Spinner
          animation="border"
          variant="light"
          className="me-2"
          role="status"
          size="sm"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {children}
    </button>
  )
}

export default Button
