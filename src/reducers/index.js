let nextId = 0;
const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: nextId++,
                text: action.payload.text,
            }
        case 'REMOVE_TODO':
            return state.filter(item => item.id != action.payload.id)
    }
}

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo({}, action)
            ]
        case 'REMOVE_TODO':
            return todo(state, action)
        default:
            return state
    }
}

export default todosReducer;