import { ButtonHTMLAttributes, ReactNode } from "react"
import { PlusCircle } from '@phosphor-icons/react'
import styles from './Button.module.css'

interface ButtonProps {
  children?: ReactNode,
  props?: ButtonHTMLAttributes<HTMLButtonElement>
}

export const Button = ({children, props} : ButtonProps) => {
  // const handleClick = () => {
  //   if (onClick) {
  //     onClick()
  //   }
  // }
  return (
    <button className={styles.Button} {...props}>
      { children }
      <PlusCircle size={16} />
      </button>
  )
}