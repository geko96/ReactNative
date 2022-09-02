import { useState } from "react";
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
    return state;
}

export default UserDataReducer;