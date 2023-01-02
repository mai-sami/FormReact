import React, { PureComponent } from 'react'
import './index.css'
import frinds from '../assets/FRIENDS.png'
import logoFirst from '../assets/Ellipse 5.png'
import logoSecand from '../assets/Ellipse 3.png'
import logoThird from '../assets/Ellipse 4.png'
import middle from '../assets/Rectangle 11.png'
import circel from '../assets/png-clipart-disgaea-3-playstation-3-playstation-4-xbox-360-trophy-golden-cup-game-medal 1.png'

var DataItem = [
    { text: "Hogwarts Legacy 50%", image: logoFirst },
    { text: "Crash Bandicoot N. Sane Trilogy 34%", image: logoThird },
    { text: "God Of War: Ragnarök 72.5%", image: logoSecand },
    { text: "Crash Bandicoot N. Sane Trilogy 34%", image: logoThird },

]

class EndSecation extends PureComponent {

    render() {
        return (
            <div className='ndseaction'>
                <div className='firstUl'>
                    <h2>last played</h2>
                    <div className='allBorder'>
                        {DataItem.map((item) =>
                            <div className='itemOne'>
                                <img className='itemOneImg' src={item.image} alt={item.image} />
                                <p className='Trext' >{item.text}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='secandUL'>
                    <h2>most recent trophy</h2>
                    <div className='allMiddels'>
                        <img src={middle} alt="middle" className='middle' />
                        <div className='div_image'>
                            <div className='ALLTEXTS'>
                                <p className='textImageGreen'>perfect KILL streak
                                </p>
                                <p className='textSubImageGreen'>You are in the 0.5%</p>
                            </div>
                            <div className='circelImage'>
                                <img src={circel} alt="circel" className='circelCild' />
                            </div>
                        </div>
                        <div className='middelText'>
                            <p className='name'>assassin's creed odyssey</p>
                            <p className='texts'>last played: 34 hours ago</p>
                        </div>
                    </div>

                </div>
                <div className='lastUl'>
                    <h2>friends</h2>
                    <img src={frinds} alt="frinds" />
                </div>
            </div>
        )
    }
}

export default EndSecation