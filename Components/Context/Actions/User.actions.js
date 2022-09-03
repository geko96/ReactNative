
import {UserTypes} from "../Types/Index";

const { 
    SET_USER,
    SET_TOKEN,
    SET_IS_LOGGED_IN,
    SET_NAME,
    SET_EMAIL,
    SET_PHONE,
    SET_IS_ADMIN,
    SET_IS_SUPER_ADMIN
} = UserTypes;

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

export const SetLoged = (isLoggedIne) => ({
    type: SET_IS_LOGGED_IN,
    payload: isLoggedIne
})