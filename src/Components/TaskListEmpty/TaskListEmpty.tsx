import { ClipboardText } from '@phosphor-icons/react'
import styles from './TaskListEmpty.module.css'

export const TaskListEmpty = () => {
  return (
    <div className={styles.TaskListEmpty}>
      <ClipboardText size={56} />
      <p className={styles.Text}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}