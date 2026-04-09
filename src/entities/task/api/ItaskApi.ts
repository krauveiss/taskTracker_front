import type { CreateTaskInput, Task } from "../model/types";

export interface TaskApi {
    getList(): Promise<Task[]>,
    create(input: CreateTaskInput): Promise<Task>,
    toggle(id: string): Promise<Task>
}