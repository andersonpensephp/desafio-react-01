import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { Button } from "../ui/Button/Button"
import { Input } from "../ui/Input/Input"
import styles from './AddTask.module.css'

interface AddTaskProps {
  onCreatedTask: (arg: string) => void
}

export const AddTask = ({ onCreatedTask } : AddTaskProps) => {
  const [textTask, setTextTask] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextTask(e.target.value)
    e.target.setCustomValidity('')
  }

  const handleClickButton = (e: FormEvent) => {
    e.preventDefault()
    const { addTask } = e.target
    if (onCreatedTask) {
      onCreatedTask(addTask.value)
    }
    setTextTask('')
  }

  const handleInvalidTask = (e: InvalidEvent<HTMLInputElement>) => {
    e.target.setCustomValidity('Esse campo é obrigatório')
  }

  return (
    <form onSubmit={handleClickButton}>
      <div className={styles.Container}>
        <Input 
          type="text" 
          name="addTask"
          placeholder="Adiciona uma nova tarefa" 
          value={textTask} 
          onChange={handleChange} 
          onInvalid={handleInvalidTask}
          required
        />
        <Button type="submit">Criar</Button>
      </div>
    </form>
  )
}