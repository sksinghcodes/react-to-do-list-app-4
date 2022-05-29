import { useSelector, useDispatch } from 'react-redux';
import { updateNewTaskInput, addTask } from '../actions';
import './AddTaskForm.css';

const  AddTaskForm = props => {
    const dispatch = useDispatch();
    const newTaskInput = useSelector(state => (state.newTaskInput));

    const handleTaskSubmit = () =>{
        const task = newTaskInput.trim();
        if(task) {
            dispatch(addTask(task));
        }
        dispatch(updateNewTaskInput(''));
    }

    return ( 
        <div className="add_task_form">
            <input 
                type="text" 
                value={newTaskInput}
                onInput={e => dispatch(updateNewTaskInput(e.target.value))}
                onKeyPress={e => {if(e.key === "Enter") handleTaskSubmit()}}
                placeholder="Type here..."
            />
            <button
                className="fas fa-plus"
                onClick={handleTaskSubmit}
            ></button>
        </div>
    );
}

export default AddTaskForm;