import React from 'react'
import './Page.css'
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const Page = () => {
  return (
    <div style={{ width:'100%'}}>
        <div className='head'>
            <h2>Enter Number</h2>
            <input type="number" placeholder='8569742136' style={{background:'#fff'}} />
        </div>

        <div className='field' style={{marginTop:'35px'}}>
            <input type="text" placeholder='Jio Prepaid' style={{background:'#fff', width:'28%'}}/>
            <div style={{

padding: '10px',
    border: '1px solid gray',
    width: '28%',
    fontSize: '20px',
    color: 'black',
display:'flex',
flexDirection:'row',
marginLeft:'20px',
background:'#fff',
borderRadius:'12px'
            }}>
                       <input type="text" placeholder='Maharashtra' style={{border:'none',background:'#fff', outline:'none' }}   />
                       

            </div>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
           
            <div style={{borderLeft:'5px solid orange',fontFamily:'Poppins', width:'30%' , marginTop:'4%'}}>
            <div style={{padding:'20px', justifyContent:'space-between',  }}>
              <button style={{background:'orange', padding:'10px', border:'1px solid orange', width:'50%', color:'#fff', fontSize:'15px', fontFamily:'Poppins', borderRadius:'10px'}}>Trending</button>
               <ChevronRightIcon style={{marginLeft:'15%'}} />
             </div>
  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
    <span style={{fontWeight:'bold'}} >₹ 107</span>
    <div style={{borderLeft:'3px solid gray', display:'flex', flexDirection:'column'}}>
      <span style={{marginLeft:'10px'}}>Data</span>
      <span style={{marginLeft:'10px', fontWeight:'bold'}}>3GB</span>
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
      <span>Validity</span>
      <span style={{fontWeight:'bold'}}>35Days</span>
    </div>
    </div>
    <div>
      <p>3GB free data + 200 Min free voice anynet Local/STD/Roaming incl . MTNL. network + BSNL Tune for 35 days</p>
    </div>
 
  </div>
  <div style={{marginTop:'10%'}}>
    <button style={{padding:'10px', width:'150%', marginLeft:'190%', border:'1px solid rgb(20, 9, 80) ', background:'rgb(20, 9, 80)', color:'#fff', fontFamily:'Poppins', borderRadius:'10px' }}>Change Plan</button>
  </div>
</div>
      <div style={{marginLeft:'30%'}}>
        <button  style={{padding:'10px', border:'1px solid rgb(20, 9, 80) ', background:'rgb(20, 9, 80)', color:'#fff', fontFamily:'Poppins', width:'20%', borderRadius:'20px' }}>Proceed to Pay</button>
        </div>  
      </div>
     

  )
        }
        export default Page