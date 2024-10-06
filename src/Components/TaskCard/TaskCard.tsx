import { Trash } from '@phosphor-icons/react'
import styles from './TaskCard.module.css'
import { TasksProps } from '../TasksContainer/types'
import { ChangeEvent, MouseEvent, useState } from 'react'

interface TaskCardProps {
  task: TasksProps,
  onCompletedTask: (a: { id: string, checked: boolean }) => void,
  onDeleteTask: (id: string) => void
}

export const TaskCard = ({ task, onCompletedTask, onDeleteTask } : TaskCardProps ) => {
  const [taskChecked, setTaskChecked] = useState<boolean>(false)

  const handleCheckedTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskChecked(e.target.checked)
    onCompletedTask({
      id: task.id,
      checked: e.target.checked
    })
  }

  const handleDeleteTask = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    if (onDeleteTask) {
      onDeleteTask(task.id)
    }
  }

  return (
    <div className={styles.TaskCard}>
      <div className={styles.checkboxWrapper}>
        <div className={styles.round}>
          <input type="checkbox" id={`checkbox-${task.id}`} onClick={handleCheckedTask} />
          <label htmlFor={`checkbox-${task.id}`}></label>
        </div>
      </div>
      <div className={styles.TextContainer}>
        <p className={taskChecked ? styles.TextThrough : ''}>{ task.text }</p>
      </div>
      <button className={styles.TrashButton} onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  )
}