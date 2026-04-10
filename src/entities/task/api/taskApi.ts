import { http } from "../../../shared/api/http";
import type { Task, CreateTaskInput } from "../model/types";
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
        return http.patch<Task>(`/api/task/${id}/toggle`);
    }

}