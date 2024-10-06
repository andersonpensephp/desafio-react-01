import { useEffect, useState } from 'react'
import { TaskCard } from '../TaskCard/TaskCard'
import { TasksProps } from '../TasksContainer/types'
import { Chip } from '../ui/Chip/Chip'
import styles from './TaskList.module.css'
import { TaskListEmpty } from '../TaskListEmpty/TaskListEmpty'

interface CompletedTasksProps {
  id: string,
  checked: boolean
}

interface TaskListProps {
  tasksList: TasksProps[],
  onDeleteTask: (id: string) => void
}

export const TaskList = ({ tasksList, onDeleteTask } : TaskListProps ) => {
  const [totalCompletedTasks, setTotalCompletedTasks] = useState<number>(0)
  const totalTasks = tasksList?.length
 
  useEffect(() => {
    const total = tasksList.filter(task => task.checked).length
    setTotalCompletedTasks(total)
  }, [tasksList])

  const handleCompletedTask = ({ id, checked }: CompletedTasksProps) => {
    const totalTaskChecked = tasksList?.map(task => {
      if (task.id === id) {
        task.checked = checked
      }
      return task
    }).filter(elem => elem.checked).length

    setTotalCompletedTasks(totalTaskChecked)
  }
  
  return (
    <div className={styles.TasksListContainer}>
      <div className={styles.TasksCreatedContainer}>
        <p className={styles.TasksCreatedInfo}>Tarefas criadas <Chip>{totalTasks}</Chip></p>
        <p className={styles.CompletedTasks}>Concluídas <Chip>{totalCompletedTasks} de {totalTasks}</Chip></p>
      </div>
      {tasksList?.length ? (
        <div className={styles.ContainerList}>
          {tasksList?.map(taskItem => {
            return (
              <TaskCard 
                key={taskItem.id} 
                task={taskItem} 
                onCompletedTask={handleCompletedTask}
                onDeleteTask={onDeleteTask}
              />
            )
          })}
        </div>
      ) : <TaskListEmpty />}
    </div>
  )
}