import * as Type from '../types';

const initialState = {
    users: [],
    loading: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case Type.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.users
            };
        case Type.GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            };
        default:
            return state;
    }
};

export default userReducer;
