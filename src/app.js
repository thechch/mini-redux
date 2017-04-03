import createStore from './store/store.js';
import connect from './connect/connect.js';
import todosReducer from './reducers/index.js';
import { addTodo, deleteTodo } from './actions/index.js';

//Test store
store.subscribe(() => console.log(store.getState()))
store.dispatch({ payload: { text: "Do smth" } })

let id = store.getState()[0].id;
store.dispatch()

const store = createStore(todosReducer);

let AddTodo = ({ todos }) => {

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (todoId) => {
            dispatch(deleteTodo({ payload: { id: todoId } }))
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