import React from 'react'
import Image from 'next/image'
import team1 from '../asset/images/team1.png'
import team2 from '../asset/images/team2.png'
import team3 from '../asset/images/team3.png'
import team4 from '../asset/images/team4.png'
import Bimage from '../asset/images/CRIT.png'

function team() {
  return (
    <div className='team-container'>
     <div className='team-row'>
       <div className='team-section'>
        <div className='team-content'>
            <h2>meet our teams</h2>
                <div className='team-images'>
                <div className='team-col-1'>
                    <Image src={team1}/>
                    <div className='team-content1'>
                    <h4>Crisbern</h4>
                    <p>Backend Dev</p>
                    </div>
                </div>

                <div className='team-col-2'>
                    <Image src={team2}/>
                    <div className='team-content1'>
                    <h4>Richard</h4>
                    <p>Frontend Dev</p>
                    </div>
                </div>

                <div className='team-col-3'>
                    <Image src={team3}/>
                    <div className='team-content1'>
                    <h4>Crisbern</h4>
                    <p>Backend Dev</p>
                    </div>
                </div>

                <div className='team-col-4'>
                    <Image src={team4}/>
                    <div className='team-content1'>
                    <h4>Crisbern</h4>
                    <p>Graphics Designer</p>
                    </div>
                </div>
                </div>
       </div>
      </div>
     </div>
    </div>

  )
}

export default team