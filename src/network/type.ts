export type FetchTodoListResponse = {
    limit: number,
    skip: number,
    total: number,
    todos: TodosDto[]
}

export type TodosDto = {
    completed: boolean | string,
    id: number,
    todo: string,
    userId: number
}