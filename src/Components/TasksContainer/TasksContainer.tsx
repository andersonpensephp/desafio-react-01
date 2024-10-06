import { useState } from "react"
import { AddTask } from "../AddTask/AddTask"
import { TaskList } from "../TaskList/TaskList"
import { v4 as uuidv4 } from 'uuid';
import styles from './TaskContainer.module.css'
import { TasksProps } from "./types";

export const TasksContainer = () => {
  const [tasks, setTasks] = useState<TasksProps[]>([])

  const handleCreatedTasks = (textTask: string) => {
    const objTask = {
      id: uuidv4(),
      text: textTask,
      checked: false
    }

    setTasks([
      ...tasks,
      objTask
    ])
  }

  const handleDeleteTask = (id: string) => {
    const deletedTask = tasks.filter(task => task.id !== id)
    setTasks(deletedTask)
  }

  return (
    <main className={styles.Container}>
     <AddTask onCreatedTask={handleCreatedTasks} />
     <TaskList tasksList={tasks} onDeleteTask={handleDeleteTask} />
    </main>
  )
}