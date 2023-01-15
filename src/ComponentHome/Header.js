import React, { PureComponent } from 'react'
import EndSecation from './EndSecation'
import './header.css'
import Introduaction from './Introduaction'
import Items from './Items'
class Header extends PureComponent {
    render() {
        return (
            <header className='header_home'>
                <Items logout={this.props.logout} />
                <Introduaction />
                <EndSecation />
            </header>
        )
    }
}

export default Header