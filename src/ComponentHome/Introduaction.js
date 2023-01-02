import React, { Component } from 'react'
import './header.css'
import first from '../assets/SPIDERMAN.png'
import secand from '../assets/GOD OF WAR-2.png'
import last from '../assets/SUPERMAN-2.png'

class Introduaction extends Component {

    render() {
        return (
            <div className='introHome'>
                <h3 >NEW GAMES </h3>
                <div className='allImageGrid'>
                    <div className='ImageGrid'>
                        <img src={secand} alt='first' className='gridItem' />
                        <div className='textImage'>
                            <p className='firstText'>
                                Join in the new DLC with Kratos to
                            </p>
                            <p className='seacnd' >
                                learn more about him and his future.
                            </p>
                        </div>

                    </div>
                    <div className='ImageGrid'>
                        <img src={last} alt='first' className='gridItem' />
                        <div className='textImage'>
                            <p className='firstText' >
                                Be part of the Suicide Squad
                            </p>
                            <p className='seacnd' >
                                and kill the Justice League!
                            </p>
                            <p className='firstText' >
                                -Amanda Waller
                            </p>
                        </div></div>
                    <div className='ImageGrid'>
                        <img src={first} alt='first' className='gridItem' />
                        <p className='textImage Revers' >
                            Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks.
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Introduaction