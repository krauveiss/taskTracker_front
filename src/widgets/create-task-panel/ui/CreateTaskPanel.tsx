
import { Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material'
import useTaskForm from '../../../features/task/create-task/model/useTaskForm'

export const CreateTaskPanel = ({ onCreated }: { onCreated: () => void }) => {
    const { title, setTitle, onSubmit, loading } = useTaskForm();

    const handleSubmit = (e: React.SubmitEvent) => {
        onSubmit(e);
        onCreated();
    }

    return (
        <Card sx={{ maxWidth: 400, mx: 'auto', mt: 2, borderRadius: '20px' }}>
            <form onSubmit={handleSubmit}>

                <CardContent>
                    <Stack spacing={2}>
                        <Typography variant="h6" >
                            Create Task
                        </Typography>

                        <TextField
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            label="Task title"
                            fullWidth
                            size='small'
                            required
                            minRows={1}
                        />

                        <Button
                            type="submit"
                            disabled={loading}
                            variant="contained"
                            style={{ borderRadius: '10px', fontWeight: 600, fontFamily: 'sans-serif' }}
                        >
                            Create Task
                        </Button>
                    </Stack>
                </CardContent>
            </form>
        </Card >
    )
}
