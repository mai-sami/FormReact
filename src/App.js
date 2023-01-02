import React, { PureComponent } from 'react'
import Login from './Pages/Login'
import Register from './Pages/Register'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import NotFound from './Pages/NotFound'
class App extends PureComponent {
 state= {
pathHome:'/'
 }
  render() {
    return (
    //   <div className='app'>
    // {window.location.pathname === this.state.pathHome?<Register 
    // StateRoute={(e) => this.setState(e)}/>
    // : <Login StateRoutes={(e) => this.setState(e)} />}
      
    //   </div>
    <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="*" element={<NotFound />} />

    </Routes>
    )
  }
}

export default App