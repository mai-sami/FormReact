import React, { PureComponent } from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import './App.css'
import Home from './Pages/Home'
import { Navigate, Route, Routes } from 'react-router'
import NotFound from './Pages/NotFound'
import Profile from './Pages/Profile'
import { Gust} from './ProtectedRouts/Gust'
import UserList from './Pages/UserList'
import DetailsId from './Pages/Details'
import { RoleAccess } from './ProtectedRouts/RoleAccess'
 class App extends PureComponent {
  state = {
    isAuthorized: false,
    isRegister: false
  };


  // UserRoutes = UsersRoutes.map(({ path, component }, key) => <Route exact path={path} component={component} key={key} />);
  componentDidMount() {
    const token = localStorage.getItem('user');
    if (token) this.setState({ isAuthorized: true, isRegister: true });
  }

  login = () => this.setState({ isAuthorized: true, isRegister: true });
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({ isAuthorized: false });
  }

  render() {
    return (


      <Routes>

        <Route index element={<Navigate to='/login' />} />
        <Route exact path="login/register" element={<>{this.state.isRegister ?
          <Navigate to='/login' /> : <Register login={this.login} />}</>} />
        <Route path='/login' element={<>{this.state.isAuthorized ?
          <Navigate to='/dashboard' /> : <Login login={this.login} />}</>} />
        <Route path='/dashboard' element={<Gust isAuthorized={this.state.isAuthorized}
          logout={this.logout} />}>
          <Route index element={<Home logout={this.logout} />} />
          <Route element={<RoleAccess roles={[true]} />}>
            <Route path="users" element={<UserList logout={this.logout} />} />
            <Route path="users/detalis/:id" element={<DetailsId logout={this.logout} />} />
          </Route>
          <Route element={<RoleAccess roles={[false]} />}>
            <Route path='profile' element={<Profile logout={this.logout} />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    )
  }
}

export default App