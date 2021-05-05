
const createAction = (actionType) => (payload) =>{
    return {
        type: actionType,
        payload: payload
    }
}

const createLoadingAction = (actionType) => (payload) =>{
    return {
        type: `${actionType}_LOADING`,
        payload: payload
    }
}

const createSuccessAction = (actionType) => (payload) =>{
    return {
        type: `${actionType}_SUCCESS`,
        payload: payload
    }
}

const createFailureAction = (actionType) => (payload) =>{
    return {
        type: `${actionType}_FAIL`,
        payload: payload
    }
}

export default {
    createAction,
    createLoadingAction,
    createSuccessAction,
    createFailureAction
};