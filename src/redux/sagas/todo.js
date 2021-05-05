import { actions, actionTypes } from "../actions";
import { takeLatest, takeEvery, call } from "redux-saga/effects";
import { sendRequest } from "../../services/apiService";
import { apiConfig } from "../../constants/apiConfig";

const { GET_TODO_LIST } = actionTypes;

function* getTodoList(){
    yield console.log('get todo list!');

    const result = yield call(sendRequest, apiConfig.todo.getList);

    console.log('result:', result);
}

export default [
    takeLatest(GET_TODO_LIST, getTodoList)
];