import axios from 'axios'
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Items from '../ComponentHome/Items'
import Sidebar from '../ComponentHome/Sidebar'
import { SpinnerCircularFixed } from 'spinners-react';
import Spinner from '../Components/Spinner'
import { BaseUrl } from '../Api'

class UserList extends PureComponent {
    state = {
        UserList: [],
        isLodding: false
    }
    async componentDidMount() {
        this.setState({ isLodding: true })
        const token = localStorage.getItem("token")
         const res = await axios.get(`${BaseUrl}/users`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        )
        this.setState({ isLodding: false })
        this.setState({ UserList: res.data })
    }
    render() {
        return (
            <div div className='Content__profile'>
                <Sidebar />
                <div className='ContentUser'>
                    <Items logout={this.props.logout}/>
                    {
                        this.state.isLodding ?
                       <Spinner/>
                            : <table className='tables'>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Opreations</th>
                                </tr>
                                {this.state.UserList.map((item) =>
                                    <tr >
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td className='td' ><i class="fa-solid fa-trash trash"></i>
                                            <Link to={`detalis/${(item._id)}`}>
                                                <i class="fa-sharp fa-solid fa-eye eye"></i>
                                            </Link>
                                        </td>
                                    </tr>

                                )}
                            </table>
                    }

                </div>
            </div>
        )
    }
}

export default UserList