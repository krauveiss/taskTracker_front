export type Task = {
    id: string,
    title: string,
    done: boolean,
    created_at: string
}

export type CreateTaskInput = {
    title: string
}

export type EditTaskInput = {
    title: string,
    done: boolean

}