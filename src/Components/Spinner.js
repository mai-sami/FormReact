import React, { PureComponent } from 'react'
import { SpinnerCircularFixed } from 'spinners-react'

class Spinner extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='snipper'>

            <SpinnerCircularFixed size={90} thickness={131} speed={79} color="rgb(26 12 13)" secondaryColor="#eee" />
        </div>
        )
    }
}

export default Spinner