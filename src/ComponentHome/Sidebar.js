import React, { Component } from 'react'
import './sidebar.css'
import logo from '../assets/Game-two (游戏).png'
import moon from '../assets/Vector (Stroke).png'
import Sun from '../assets/Sun-one (太阳1) (1).png'

class Sidebar extends Component {
    componentDidMount() {
        this.setLight()
    }
    state = {
        isThem: true
    }
    setLight = () => {
        this.setState((prevState) => ({ isThem: prevState.isThem = false }));
        localStorage.setItem("theme", "light");
        document.body.style.cssText = 'background: #FFF;color:black !important';

    };
    setDark = () => {
        this.setState((prevState) => ({ isThem: prevState.isThem = true }));
        localStorage.setItem("theme", "dark");
        document.body.style.cssText = 'background: #454545;color: #D8D8D8';

    };

    // console.log(localStorage.getItem("theme"),"nice work")
    render() {

        return (
            <div className='sidbar' >
                <hr />
                <img src={logo} alt='logo' className='logo' />
                <div className='middleside'>
                    <i class="fa-regular fa-heart last" style={this.state.isThem === true ? { color: 'white' } : { color: 'rgb(81 81 81 / 67%)' }}></i>
                    <i class="fa-solid fa-gear last" style={this.state.isThem === true ? { color: 'white' } : { color: 'rgb(81 81 81 / 67%)' }}></i>
                    <i class="fa-solid fa-puzzle-piece last " style={this.state.isThem === true ? { color: 'white' } : { color: 'rgb(81 81 81 / 67%)' }}></i>
                </div>
                <div className='switch'>
                    <img src={moon} alt='moon' onClick={this.setDark} />
                    <img src={Sun} alt='Sun' onClick={this.setLight} />
                </div>
            </div>
        )
    }
}

export default Sidebar
