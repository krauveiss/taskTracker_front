import { Box, Button, Card, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import type { Task } from '../../../entities/task/model/types'
import { ChangeCircle, DoneAll, HourglassBottom, ModeEdit } from '@mui/icons-material'
import { useState } from 'react'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    width: 200,
    p: 4,
    borderRadius: 5
};

type TaskPanelProps = {
    task: Task,
    onDelete: () => void,
    onToggle: () => void,
    onEdit: (id: string, title: string, done: boolean) => void
}
export const TaskPanel = ({ task, onDelete, onToggle, onEdit }: TaskPanelProps) => {
    const [editText, setEditText] = useState('');

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
        setEditText(task.title);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleEditButtion = () => {
        handleClose();
        onEdit(task.id, editText, task.done);
    }


    const datse = new Date(task.created_at);
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>

                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ marginBottom: '10px' }}>
                            Edit task
                        </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <TextField label="Task title" value={editText} variant="standard" size='small' onChange={(e) => { setEditText(e.target.value) }} />
                            <Button size='small' onClick={handleEditButtion}>OK</Button>
                        </div>
                    </div>
                </Box>
            </Modal>

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
                    {task.done ? <DoneAll sx={{ color: 'green' }}></DoneAll> : <HourglassBottom sx={{ color: 'orange' }}></HourglassBottom>}
                    <div>
                        {datse?.toLocaleString()}
                    </div>
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
                    <Tooltip title='Edit task'>
                        <IconButton onClick={handleOpen}>
                            <ModeEdit />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title='Delete task'>
                        <IconButton onClick={onDelete}>
                            <DeleteIcon sx={{ color: '#f25270' }} />
                        </IconButton>
                    </Tooltip>

                </div>
            </Card>
        </>
    )
}
