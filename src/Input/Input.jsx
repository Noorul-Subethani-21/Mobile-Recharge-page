import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Input.css'
const Input = () => {
  return (
    <div>
        <div className='head'>
            <h2>Enter Number</h2>
            <input type="number" placeholder='8569742136' style={{background:'#fff'}} />
        </div>

        <div className='field' style={{marginTop:'35px'}}>
            <input type="text" placeholder='Select Your Operator' style={{background:'#fff'}}/>
            <div style={{

padding: '10px',
    border: '1px solid gray',
    width: '100%',
    fontSize: '20px',
    color: 'black',
display:'flex',
flexDirection:'row',
marginLeft:'20px',
background:'#fff',
borderRadius:'12px'
            }}>
                       <input type="text" placeholder='Select Your Operator' style={{border:'none',background:'#fff' }}   />
                       <KeyboardArrowDownIcon style={{marginTop:'10px'}} /> 

            </div>
            </div>
        </div>
    
  )
}

export default Input