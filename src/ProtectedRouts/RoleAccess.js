import {Outlet } from "react-router";

 

export const RoleAccess = ({ roles = [] }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(roles.length, "user")
  return  roles.includes(user?.isAdmin)

    ? <Outlet />
    :  false
}
 





