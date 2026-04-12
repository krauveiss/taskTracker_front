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
                setTasks(prev => prev.filter(t => t.id !== id));
            } catch {
                setError("Не удалось удалить задачу");
            }
        }, [fetchTasks]
    )

    const toggleTask = useCallback(async (id: string) => {
        try {
            await taskApi.toggle(id);

            setTasks(prev =>
                prev.map(task =>
                    task.id === id
                        ? { ...task, done: !task.done }
                        : task
                )
            );
        } catch (e) {
            console.log(e)
            setError("Не удалось изменить задачу");
        }
    }, []);

    const editTask = useCallback(async (id: string, title: string, done: boolean) => {
        try {
            await taskApi.editTask(id, { title, done });

            setTasks(prev =>
                prev.map(task =>
                    task.id === id
                        ? { ...task, done: task.done, title: title }
                        : task
                )
            );
        } catch (e) {
            console.log(e)
            setError("Не удалось изменить задачу");
        }
    }, []);


    useEffect(() => {
        fetchTasks()
    }, [fetchTasks])

    return { tasks, loading, error, fetchTasks, deleteTask, toggleTask, editTask };
}