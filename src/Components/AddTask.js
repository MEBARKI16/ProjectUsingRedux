import { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Store/actions";
const AddTask = ({ dispatch }) => {
    const [taskInput, setTaskInput] = useState('');
    const HandleSubmit = e => {
        e.preventDefault();
        dispatch(addTask({ id: Date.now(), content: taskInput }))
        setTaskInput('');
    }
    return (
        <form onSubmit={HandleSubmit}>
            <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} type="text" />
            <button type="submit">Ajouter</button>
        </form>
    );
}
export default connect()(AddTask);