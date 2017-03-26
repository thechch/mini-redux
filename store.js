const createStore = (reducer, initialState) => {
    const currentReducer = reducer;
    const currentState = initialState;
    const listener = () => {};

    return {
        getState() {
            return currentState;
        },
        dispatch(action) {
            currentState = currentReducer(currentState, action);
            listener();
            return action;
        },
        subscribe(newListener) {
            listener = newListener;
        }
    };
}