const initialState = {
    tasks: []
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK': return { ...state, tasks: [...state.tasks, action.payload] };
        case 'DELETE_TASK': return { ...state, tasks: state.tasks.filter(x => !(x.id === action.payload)) };
        default: return state
    }
}
export default tasksReducer;