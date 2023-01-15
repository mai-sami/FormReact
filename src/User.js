import { Navigate } from "react-router";

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
}
export const isLogend = () => {
    return getUser() == null
}

export const getUserName = () => {
    return getUser().name;
}

export const getUserEmail = () => {
    return getUser().email;
}
export const getUserRol = () => {
    return getUser() && getUser().isAdmin
}
export const isAdminRole = () => {
    return getUserRol() === true;
}
 

