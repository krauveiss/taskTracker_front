import { Grid, Skeleton } from "@mui/material";
import { useTasks } from "../../../features/task/view-task/model/useTasks";
import { CreateTaskPanel } from "../../../widgets/create-task-panel/ui/CreateTaskPanel";
import { TaskPanel } from "../../../widgets/task-panel/ui/TaskPanel";

export function TasksPage() {
    const { tasks, fetchTasks, deleteTask, toggleTask } = useTasks();

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                minHeight: '100vh'
            }}
        >
            <CreateTaskPanel onCreated={fetchTasks} />
            <div style={{ marginTop: '20px' }}>
                <Grid container spacing={2} sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                    {tasks.map(task => (
                        <Grid key={task.id}>
                            <TaskPanel task={task} onDelete={() => deleteTask(task.id)} onToggle={() => toggleTask(task.id)}></TaskPanel>
                        </Grid>
                    ))}
                </Grid>
            </div>


        </div>
    );
}