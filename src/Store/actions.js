export const addTask = task => {
    return (
        {
            type: 'ADD_TASK',
            payload: task
        }
    )
}
export const deleteTask = idTask => {
    return (
        {
            type: 'DELETE_TASK',
            payload: idTask
        }
    )
}