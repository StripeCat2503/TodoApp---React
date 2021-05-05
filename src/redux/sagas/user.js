import { actions, actionTypes } from "../actions";
import { takeLatest, takeEvery } from "redux-saga/effects";

const { GET_PROFILE } = actionTypes;

function* getProfile(){
    yield console.log('get profile!');
}

export default [
    takeLatest(GET_PROFILE, getProfile)
];