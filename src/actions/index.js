export const updateNewTaskInput = value => {
    return {
        type: 'UPDATE_NEW_TASK_INPUT',
        payload: {value},
    }
}

export const addTask = task => {
    return {
        type: 'ADD_TASK',
        payload: {task},
    }
}

export const removeTask = id => {
    return {
        type: 'REMOVE_TASK',
        payload: {id},
    }
}

export const updateTaskValue = (id, task) => {
    return {
        type: 'UPDATE_TASK_VALUE',
        payload: {id, task},
    }
}

export const toggleTaskCompletionStatus = id => {
    return {
        type: 'TOGGLE_TASK_COMPLETION_STATUS',
        payload: {id},
    }
}

export const setTaskGettingEdit = taskItem => {
    return {
        type: 'SET_TASK_GETTING_EDIT',
        payload: {taskItem},
    }
}

export const removeTaskGettingEdit = () => {
    return {
        type: 'REMOVE_TASK_GETTING_EDIT'
    }
}

export const updateTaskGettingEdit = task => {
    return {
        type: 'UPDATE_TASK_GETTING_EDIT',
        payload: {task},
    }
}