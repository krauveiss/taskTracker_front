import TaskCard from '../../../shared/ui/TaskCard'
import type { Task } from '../../../entities/task/model/types'
import { Button } from '../../../shared/ui/Button'

type TaskPanelProps = {
    task: Task,
    onDelete: () => void
}
export const TaskPanel = ({ task, onDelete }: TaskPanelProps) => {
    return (
        <TaskCard>
            <div>{task.title}</div>
            <div>{task.id}</div>
            <div>{task.done ? 'Выполенео' : 'Не выполнено'}</div>
            <button onClick={onDelete}>Удалить задачу</button>
        </TaskCard>
    )
}
