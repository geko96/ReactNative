import { useState } from "react";
import UserTypes from "../Types/Index";


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

const InitialState = {
    UserID: 0,
    Token: "",
    IsLoggedIn: false,
    Name: "",
    Email: "",
    Phone: "",
    IsAdmin: false,
    IsSuperAdmin: false,
}


const UserDataReducer = (state = InitialState, action) => {
    console.log("UserDataReducer", action);
    switch (action.type) {
        case SET_USER:
            return {
                ...state, UserID : action.payload
            }
        case SET_IS_LOGGED_IN:
            return {
                ...state, IsLoggedIn : action.payload
            }

        default:
            return state;

    }
}

export default UserDataReducer;