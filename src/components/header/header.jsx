import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
      <div className='topHeader'>
        <img className='profileImage' src='https://media.licdn.com/dms/image/D4D03AQHyFOpdaQFqAA/profile-displayphoto-shrink_400_400/0/1697461982367?e=1709769600&v=beta&t=PLbGArajIEkPYkBMPozfKOsc2iRyPgxDo80PnXDwCbg' alt='profileImage' />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p className='nameText'>Arnab Roy</p>
          <img className='blueTick' src='https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-4.png' alt='profileImage' />
        </div>
      </div>
    </div>
  )
}

export default Header
