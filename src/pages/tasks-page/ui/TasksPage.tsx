import { useTasks } from "../../../features/task/view-task/model/useTasks";
import { CreateTaskPanel } from "../../../widgets/create-task-panel/ui/CreateTaskPanel";
import { TaskPanel } from "../../../widgets/task-panel/ui/TaskPanel";

export function TasksPage() {
    const { tasks, loading, fetchTasks, deleteTask } = useTasks();

    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', height: '90vh', marginTop: '20px' }}>
            <CreateTaskPanel onCreated={fetchTasks} />
            {
                !loading ? (
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', gap: '20px' }}>
                        {tasks.map(task => (
                            <TaskPanel task={task} key={task.id} onDelete={() => deleteTask(task.id)}></TaskPanel>
                        ))}
                    </div>
                ) : (
                    <div>Загрузка</div>
                )
            }

        </div>
    );
}