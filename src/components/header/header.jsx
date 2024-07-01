import React from 'react'
import "./header.css"
import images from '../../images/images'

const Header = () => {
  return (
    <div>
      <div className='topHeader'>
        <img className='profileImage' src={images.arnab} alt='profileImage' />
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <p className='nameText'>Arnab Roy</p>
          <img className='blueTick' src='https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-4.png' alt='profileImage' />
        </div>
      </div>
    </div>
  )
}

export default Header
