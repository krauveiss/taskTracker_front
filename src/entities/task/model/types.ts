export type Task = {
    id: string,
    title: string,
    done: boolean,
    createdAt: string
}

export type CreateTaskInput = {
    title: string
}