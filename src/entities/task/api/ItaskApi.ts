import type { CreateTaskInput, Task } from "../model/types";

export interface ITaskApi {
    getList(): Promise<Task[]>,
    create(input: CreateTaskInput): Promise<Task>,
    toggle(id: string): Promise<Task>,
    delete(id: string): Promise<void>
}