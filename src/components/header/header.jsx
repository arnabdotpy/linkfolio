import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div>
      <div className='topHeader'>
        <img className='profileImage' src='https://media.licdn.com/dms/image/D5603AQF5cGov52id2g/profile-displayphoto-shrink_200_200/0/1706943249869?e=1717027200&v=beta&t=pcFdCS9uHwNN2lXbSEWm7G6FtRTS9KInKpxVZQZaVeM' alt='profileImage' />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p className='nameText'>Arnab Roy</p>
          <img className='blueTick' src='https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-4.png' alt='profileImage' />
        </div>
      </div>
    </div>
  )
}

export default Header
