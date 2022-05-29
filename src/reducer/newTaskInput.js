const initialTaskInput = '';

function newTaskForm(taskInput = initialTaskInput, action){
    if(action.type === 'UPDATE_NEW_TASK_INPUT') {
        return action.payload.value;
    } else {
        return taskInput;
    }
}

export default newTaskForm;