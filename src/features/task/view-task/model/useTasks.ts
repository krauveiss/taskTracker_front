import { useCallback, useEffect, useState } from "react";
import type { Task } from "../../../../entities/task/model/types";
import { taskApi } from "../../../../entities/task/api/taskApi";


export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTasks = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await taskApi.getList();
            setTasks(data);
        }
        catch (e) {
            setError('Не удалось загрузить задачи');
        } finally {
            setLoading(false);
        }
    }, [])

    const deleteTask = useCallback(
        async (id: string) => {
            try {
                await taskApi.delete(id);
                await fetchTasks();
            } catch {
                setError("Не удалось удалить задачу");
            }
        }, [fetchTasks]
    )

    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    return { tasks, loading, error, fetchTasks, deleteTask };
}