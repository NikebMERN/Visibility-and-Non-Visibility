/* eslint-disable no-unused-vars */
// ----------- Case-1 Blink-Click ----------- //

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

const BlinkClick = () => {
  const [icon, setIcon] = useState('show')
  const [blink, setBlink] = useState('password');

  const showandhide = () => {
    if(blink === "password"){
      setBlink('text');

      setTimeout(()=>{
        setBlink('password');
        setIcon('VisibilityIcon');
      }, 200)

    }else{
      setBlink('password');
    }
  }
  
  return (
    <div className='text-center my-5'>
        <label htmlFor="input" className='fw-100'><h1>Insert Your Password Blink Show</h1></label>
        <div className='container mx-3'>
        <input type={blink} className='p-3' />
        <VisibilityIcon className={icon} onClick={showandhide} />
        </div>
    </div>
  )
}

export default BlinkClick;