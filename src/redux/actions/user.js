import reduxUtils from "../../utils/reduxUtils";

const { createAction } = reduxUtils;

export const actionTypes = {
    GET_PROFILE: 'user/GET_PROFILE',
    REGISTER_ACCOUNT: 'user/REGISTER_ACCOUNT',
    UPDATE_PROFILE: 'user/UPDATE_PROFILE'
};

export const actions = {
    getProfile: createAction(actionTypes.GET_PROFILE),
    updateProfile: createAction(actionTypes.UPDATE_PROFILE),
    registerAccount: createAction(actionTypes.REGISTER_ACCOUNT),
};
