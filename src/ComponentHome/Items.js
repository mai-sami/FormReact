import React, { PureComponent } from 'react'
import logoUser from '../assets/Rectangle 1.png'
import { getUserName, getUserEmail } from '../User'
import '../ComponentHome/header.css'
class Items extends PureComponent {

    render() {
        return (
            <div className='headerItems'>
                <div >
                    <button className='logoutHeader' onClick={this.props.logout}>Logout</button>
                </div>
                <div className='all_contentUser'>
                    <div className='details_home'>
                        <p className='nameUser'>{getUserName()}</p>
                        <p className='emailUser'>{getUserEmail()}</p>
                    </div>
                    <img src={logoUser} className="logoUser" alt="logoUser" />

                </div>

            </div>
        )
    }
}

export default Items