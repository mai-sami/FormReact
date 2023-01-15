// import React from 'react'
// import Login from '../Pages/Login';
// import Register from '../Pages/Register';

//      export const Gust = [
//         {
//       path: '/login',
//       component: Login
//     }, 
//     {
//       path: '/register',
//       component: Register,
//     }, 

//   ];



import React, { PureComponent } from 'react'
import { Navigate, Outlet } from 'react-router'

export class Gust extends PureComponent {
    render() {
        return (
            <div>
            {this.props.isAuthorized ? (
              <>
                <Outlet />
              </>
            ) : (
              <Navigate to='/login' />
            )}
          </div>
        )
    }
}

export class AdminRoute extends PureComponent {
  render() {
      return (
          <div>
          {this.props.isAuthorized ? (
            <>
              <Outlet />
            </>
          ) : (
            <Navigate to='/login' />
          )}
        </div>
      )
  }
}

 