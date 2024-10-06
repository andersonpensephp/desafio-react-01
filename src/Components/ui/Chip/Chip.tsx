import { ReactNode } from 'react'
import styles from './Chip.module.css'

export const Chip = ({ children } : { children: ReactNode }) => {
  return <span className={styles.Chip}>{ children }</span>
}