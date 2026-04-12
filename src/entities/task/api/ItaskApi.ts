import type { CreateTaskInput, Task, EditTaskInput } from "../model/types";

export interface ITaskApi {
    getList(): Promise<Task[]>,
    create(input: CreateTaskInput): Promise<Task>,
    toggle(id: string): Promise<void>,
    delete(id: string): Promise<void>,
    editTask(id: string, input: EditTaskInput): Promise<Task>
}