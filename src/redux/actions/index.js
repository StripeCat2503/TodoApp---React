import { actionTypes as todoActionTypes, actions as todoActions } from "./todo";
import { actionTypes as userActionTypes, actions as userActions } from "./user";

export const actionTypes = {
    ...todoActionTypes,
    ...userActionTypes
}

export const actions = {
    ...todoActions,
    ...userActions
}