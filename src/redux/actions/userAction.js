import * as Type from '../types';

export const getUsers = (users) => {
    return {
        type: Type.GET_USERS_REQUESTED,
        payload: users
    }
};
