import { connect } from "react-redux";
import { deleteTask } from "../Store/actions";
const TaskList = ({ tasks, dispatch }) => {
    return (
        <ul>
            {tasks.map(task => <li onClick={() => dispatch(deleteTask(task.id))} key={task.id}>{task.content}</li>)}
        </ul>
    );
}

const getData = state => ({
    tasks: state.tasks
})
export default connect(getData)(TaskList);