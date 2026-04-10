import TaskCard from '../../../shared/ui/TaskCard'
import type { Task } from '../../../entities/task/model/types'

type TaskPanelProps = {
    task: Task
}
export const TaskPanel = ({ task }: TaskPanelProps) => {
    return (
        <TaskCard>
            <div>{task.title}</div>
            <div>{task.id}</div>
            <div>{task.done ? 'Выполенео' : 'Не выполнено'}</div>
        </TaskCard>
    )
}
