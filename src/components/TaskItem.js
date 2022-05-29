import { createRef, useEffect } from 'react';
import Control from './Control';
import { useSelector, useDispatch } from 'react-redux';
import {
    removeTask,
    updateTaskValue,
    setTaskGettingEdit,
    toggleTaskCompletionStatus,
    updateTaskGettingEdit,
    removeTaskGettingEdit
} from '../actions';
import './TaskItem.css'; 

const TaskItem = props => {
    const dispatch = useDispatch();
    const taskGettingEdit = useSelector(state => state.taskGettingEdit);
    const { currentValue, originalValue } = taskGettingEdit;
    const {id, isCompleted, task} = props.taskItem;
    const isGettingEdit = id === taskGettingEdit.id;
    const textareaRef = createRef();


    const handleTaskEdit = () => {
        const textarea = textareaRef.current;
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
        dispatch(setTaskGettingEdit(props.taskItem));
    }

    const handleTaskSave = () => {
        let task = currentValue.trim() || originalValue;
        if(task){
            dispatch(updateTaskValue(taskGettingEdit.id, task));
        }
        dispatch(removeTaskGettingEdit());
    }

    const resizeTextarea = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
	    textarea.style.height = `${textarea.scrollHeight}px`;
    }

    useEffect(resizeTextarea, [currentValue, textareaRef]);

    return (
        <li 
            className="task_item"
            onMouseEnter={resizeTextarea}
            onMouseLeave={resizeTextarea}
        >

            <label className="toggle_label">
                <input 
                    type="checkbox" 
                    onChange={() => dispatch(toggleTaskCompletionStatus(id))}
                    checked={isCompleted}
                />
            </label>

            <textarea 
                className={`task_text ${isCompleted ? 'completed' : ''}`} 
                value={isGettingEdit ? currentValue : task }
                readOnly={!isGettingEdit}
                onInput={e => dispatch(updateTaskGettingEdit(e.target.value))}
                rows={1}
                ref={textareaRef}
                onClick={!isGettingEdit ? () => dispatch(toggleTaskCompletionStatus(id)) : null}
            ></textarea>

            <div className="controls">
                {!isGettingEdit ? (
                    <Control
                        action={handleTaskEdit}
                        classNameValue="fas fa-pen"
                    />
                ) : (
                    <Control
                        action={handleTaskSave} 
                        classNameValue="fas fa-save"
                    />
                )}
                <Control
                    action={() => dispatch(removeTask(id))} 
                    classNameValue="fas fa-trash"
                />
            </div>
        </li>
    );
}

export default TaskItem;