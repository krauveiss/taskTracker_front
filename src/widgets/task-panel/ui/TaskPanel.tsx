import { Button, Card, IconButton, Tooltip } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import type { Task } from '../../../entities/task/model/types'
import { ChangeCircle, DoneAll } from '@mui/icons-material'

type TaskPanelProps = {
    task: Task,
    onDelete: () => void,
    onToggle: () => void
}
export const TaskPanel = ({ task, onDelete, onToggle }: TaskPanelProps) => {
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
            <div style={{ opacity: 0.7 }}>
                {task.done ? <DoneAll sx={{ color: 'green' }}></DoneAll> : ''}
            </div>
            <div>
                <div style={{ fontWeight: 600, wordBreak: 'break-word' }}>
                    {task.title}
                </div>

            </div>

            <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                <Tooltip title={task.done ? 'Mark as uncompleted' : 'Mark as completed'}>
                    <IconButton onClick={onToggle}>
                        <ChangeCircle />
                    </IconButton>
                </Tooltip>
                <Tooltip title='Delete task'>
                    <IconButton onClick={onDelete}>
                        <DeleteIcon sx={{ color: '#f25270' }} />
                    </IconButton>
                </Tooltip>

            </div>
        </Card>
    )
}
