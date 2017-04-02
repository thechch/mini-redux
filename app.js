const todo = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: Math.floor(Math.random() * 100),
                text: action.payload.text,
            }
        case 'REMOVE_TODO':
            return state.filter(item => item.id != action.payload.id)
    }
}

function todosReducer(state = [], action) {
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

const store = createStore(todosReducer);

//Test store
store.subscribe(() => console.log(store.getState()))
store.dispatch({ type: 'ADD_TODO', payload: { text: "Do smth" } })

let id = store.getState()[0].id;
store.dispatch({ type: 'REMOVE_TODO', payload: { id: id } })


let AddTodo = ({ todos }) => {

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}
AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

ReactDOM.render(
    <Provider store={store}>
        <AddTodo />
    </Provider>,
    document.getElementById('app')
)