export const addTodo = (payload) => {
  return {
    type: 'ADD_TODO',
    payload,
  }
}

export const deleteTodo = (payload) => {
  return {
    type: 'REMOVE_TODO',
    payload,
  }
}