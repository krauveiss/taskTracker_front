import type { CreateTaskInput, Task } from "../model/types";

export interface ITaskApi {
    getList(): Promise<Task[]>,
    create(input: CreateTaskInput): Promise<Task>,
    toggle(id: string): Promise<void>,
    delete(id: string): Promise<void>
}