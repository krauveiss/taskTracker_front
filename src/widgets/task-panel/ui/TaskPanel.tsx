import { Button, Card, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import type { Task } from '../../../entities/task/model/types'

type TaskPanelProps = {
    task: Task,
    onDelete: () => void
}
export const TaskPanel = ({ task, onDelete }: TaskPanelProps) => {
    return (
        <Card
            sx={{
                p: 2,
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: 200
            }}
        >
            <div>
                <div style={{ fontWeight: 600, wordBreak: 'break-word' }}>
                    {task.title}
                </div>
                <div style={{ opacity: 0.7 }}>
                    {task.done ? 'Выполнено' : 'Не выполнено'}
                </div>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={onDelete}>
                    <DeleteIcon />
                </IconButton>
            </div>
        </Card>
    )
}
