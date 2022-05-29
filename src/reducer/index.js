import { combineReducers } from 'redux';
import taskGettingEdit from './taskGettingEdit';
import taskList from './taskList';
import newTaskInput from './newTaskInput';

const rootReducer = combineReducers({
    newTaskInput,
    taskGettingEdit,
    taskList,
})

export default rootReducer;