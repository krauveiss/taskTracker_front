import { http } from "../../../shared/api/http";
import type { Task, CreateTaskInput, EditTaskInput } from "../model/types";
import type { ITaskApi } from "./ItaskApi";

export const taskApi: ITaskApi = {
    async getList() {
        const response = await http.get<{ data: Task[] }>('/api/tasks');
        return response.data;
    },
    create(input: CreateTaskInput) {
        return http.post<Task>("/api/task", input);
    },
    toggle(id: string) {
        return http.patch<void>(`/api/task/${id}/toggle`);
    },
    delete(id: string) {
        return http.delete<void>(`/api/task/${id}`)
    },
    editTask(id: string, input: EditTaskInput) {
        return http.put<Task>(`/api/task/${id}`, input)
    }


}