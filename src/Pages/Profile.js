import React, { Component } from 'react'
import Sidebar from '../ComponentHome/Sidebar'
import logoUser from '../assets/Rectangle 1.png'
import { getUserName ,getUserEmail} from '../User'
 import Items from '../ComponentHome/Items'

class Profile extends Component {
 
    render() {
        console.log(this.props.logout,"this.props.logout")
        return (
            <div div className='Content__profile'>
                <Sidebar />
                <div className='ContentUser'>
                <Items logout={this.props.logout}/>
                <div className='profile'>
                    <div className='boxing'>
                    <img src={logoUser} className="logoUser" alt="logoUser" />
                    {/* <i class="fa-sharp fa-solid fa-users iconsUser"></i> */}
                        <div className=' boxing details'>
                            <p className='TiTle'>name: {getUserName()}</p>
                            <p className='TiTle'>Email : {getUserEmail()}</p>

                        </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Profile