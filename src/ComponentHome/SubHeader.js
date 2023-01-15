import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { isAdminRole } from '../User'

class SubHeader extends PureComponent {
    render() {
        return (
            <div className='subHeader'>
                <h3 >NEW GAMES </h3>
                <div>
                    {
                        isAdminRole() ? <Link to={'users'}>
                            <button className='allUsers'>All User</button>
                        </Link> : <Link to={'profile'}> <button className='logoutHeader'>Profiles</button></Link>
                    }
                </div>
            </div>
        )
    }
}

export default SubHeader