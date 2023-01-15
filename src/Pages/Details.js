
import axios from 'axios'
import React, { Component } from 'react'
import { useParams } from 'react-router'
import Items from '../ComponentHome/Items'
import Sidebar from '../ComponentHome/Sidebar'
import { getUserEmail, getUserName } from '../User'
import logoUser from '../assets/Rectangle 1.png'
import { SpinnerCircular, SpinnerCircularFixed } from 'spinners-react';
import Spinner from '../Components/Spinner'

function DetailsId({logout}) {
    const { id } = useParams()
    return (
        <>
             <Details logout={logout} id={id} />
        </>
    )
}

export default DetailsId




class Details extends Component {
    state = {
        data: [],
        isLodding:false
    }
    async componentDidMount() {
        this.setState({ isLodding: true })

        const token = localStorage.getItem("token")
        const res = await axios.get(`https://react-tt-api.onrender.com/api/users/${this.props.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
        )
        this.setState({ isLodding: false })

        this.setState({ data: res.data })

        //            .then(json => this.setState({ data: json }))
    }
    render() {
        return (
            <div className='Content__profile'>
                
                <Sidebar />
                <div className='ContentUser'>

                <Items logout={this.props.logout}/>
                <div className='profile'>
                    <div className='boxing'>
                    {
                        this.state.isLodding ?
                        <Spinner/>

                            : 
                            <>
                    <img src={logoUser} className="logoUser" alt="logoUser" />
                         <div className=' boxing details'>
                            <p className='TiTle'>name: {this.state.data.name}</p>
                            <p className='TiTle'>Email : {this.state.data.email}</p>

                        </div>
                             </>
    }
                    </div>
                </div>
                </div>



            </div>
        )
    }
}
