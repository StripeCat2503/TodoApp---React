import reduxUtils from "../../utils/reduxUtils";

const { createAction } = reduxUtils;

export const actionTypes = {
    GET_TODO_LIST: 'todo/GET_TODO_LIST',
    GET_TODO: 'todo/GET_TODO',
    CREATE_TODO: 'todo/CREATE_TODO',
    UPDATE_TODO: 'todo/UPDATE_TODO',
    DELETE_TODO: 'todo/DELETE_TODO'
};

export const actions = {
    getTodoList: createAction(actionTypes.GET_TODO_LIST),
    getTodo: createAction(actionTypes.GET_TODO),
    createTodo: createAction(actionTypes.CREATE_TODO),
    updateTodo: createAction(actionTypes.UPDATE_TODO),
    deleteTodo: createAction(actionTypes.DELETE_TODO),
};
