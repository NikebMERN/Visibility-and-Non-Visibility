import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Alwaysonshow = () => {
    const [icon, setIcon] = useState(true)
    const [onShow, setOnShow] = useState('password');

    const show = () => {
        if (onShow === 'password') {
            setOnShow('text');
            setIcon(false);
        } else {
            setIcon(true);
            setOnShow('password');
        }
    }

    return (
        <div className='text-center my-5'>
            <label htmlFor="input" className='fw-100'><h1>Insert Your Password Always Show</h1></label>
            <div className='container mx-3'>
                <input type={onShow} className='p-3' />
                {icon && <VisibilityIcon onClick={show} />}{!icon && <VisibilityOffIcon onClick={show} />}
            </div>
        </div>
    )
}

export default Alwaysonshow;