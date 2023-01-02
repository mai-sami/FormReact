import React, { PureComponent } from 'react'
import logoUser from '../assets/Rectangle 1.png'
import EndSecation from './EndSecation'
import './header.css'
import Introduaction from './Introduaction'
class Header extends PureComponent {
    render() {
        return (
            <header className='header_home'>
                <div className='all_contentUser'>
                    <div className='details_home'>
                        <p className='nameUser'>Name user</p>
                        <p className='emailUser'>name</p>
                    </div>
                    <img src={logoUser} className="logoUser" alt="logoUser" />
                </div>
                <Introduaction />
                <EndSecation />
            </header>
        )
    }
}

export default Header