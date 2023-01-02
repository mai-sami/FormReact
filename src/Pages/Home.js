import React, { PureComponent } from 'react'
import Header from '../ComponentHome/Header'
import Sidebar from '../ComponentHome/Sidebar'

class Home extends PureComponent {
    render() {
        return (
            <div className='homePage'>
                <Sidebar />
                <Header />
                
            </div>
        )
    }
}

export default Home