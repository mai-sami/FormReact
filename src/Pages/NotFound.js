import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class NotFound extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='notFound'>
            Sorry this page not found 404
            <Link className='links' to={'/'}> Please Go To Home Page</Link>
            </div>
        )
    }
}

export default NotFound