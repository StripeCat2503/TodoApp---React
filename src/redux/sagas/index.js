import { all } from "redux-saga/effects";
import todoSaga from "../sagas/todo";
import userSaga from "../sagas/user";

const sagas = [
    ...todoSaga,
    ...userSaga
];

function* rootSaga(){
    yield all(sagas);
}

export default rootSaga;