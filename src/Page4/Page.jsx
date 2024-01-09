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

            <div className="form-container" style={{marginTop:'20px', width:'50%', background:'#fff'}}>
        <div className="form" style={{marginTop:'20px', background:'#fff', fontSize:'20px', borderRadius:'20px', border:'1px solid gray',   fontFamily: "Poppins"}}>
          <SearchIcon className="icon" style={{marginTop:'20px'}} />
          <input type="search" placeholder="Search by Number or Name" style={{fontSize:'20px', outline:'none',  fontFamily: "Poppins", width:'90%', border:'none'}} />
        </div>
        
      </div>

      <div style={{ fontFamily: "Poppins", color:'rgb(20, 9, 80)', display:'flex', flexDirection:'row', gap:'5%', marginBottom:'20px'}}>
    <h3 style={{width:'20%', borderBottom: '2px solid transparent', transition: 'border-bottom 0.3s', cursor: 'pointer', }}
        onMouseOver={(e) => e.target.style.borderBottom = '5px solid rgb(20, 9, 80)'}
        onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
        BEST SELLING PACKS
    </h3>
    <h3 style={{width:'20%', borderBottom: '2px solid transparent', transition: 'border-bottom 0.3s', cursor: 'pointer'}}
        onMouseOver={(e) => e.target.style.borderBottom = '5px solid rgb(20, 9, 80)'}
        onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
        DATA PACKS
    </h3>
    <h3 style={{width:'20%', borderBottom: '2px solid transparent', transition: 'border-bottom 0.3s', cursor: 'pointer'}}
        onMouseOver={(e) => e.target.style.borderBottom = '5px solid rgb(20, 9, 80)'}
        onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
        SPECIAL RECHARGE
    </h3>
    <h3 style={{width:'20%', borderBottom: '2px solid transparent', transition: 'border-bottom 0.3s', cursor: 'pointer'}}
        onMouseOver={(e) => e.target.style.borderBottom = '5px solid rgb(20, 9, 80)'}
        onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
        FULL TALKTIME
    </h3>
    <h3 style={{width:'20%', borderBottom: '2px solid transparent', transition: 'border-bottom 0.3s', cursor: 'pointer'}}
        onMouseOver={(e) => e.target.style.borderBottom = '5px solid rgb(20, 9, 80)'}
        onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
        TOP UP
    </h3>
    <h3 style={{width:'20%', borderBottom: '2px solid transparent', transition: 'border-bottom 0.3s', cursor: 'pointer'}}
        onMouseOver={(e) => e.target.style.borderBottom = '5px solid rgb(20, 9, 80)'}
        onMouseOut={(e) => e.target.style.borderBottom = '2px solid transparent'}>
        2G DATA
    </h3>
</div>
<div style={{display:'flex', flexDirection:'row'}}>
  <div style={{borderLeft:'5px solid orange',fontFamily:'Poppins', width:'30%' }}>
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


  <div style={{borderLeft:'5px solid orange',fontFamily:'Poppins', width:'30%' ,  height:'20%', marginLeft:'20%' }}>
  
  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
    <span style={{fontWeight:'bold'}} >₹ 147</span>
    <div style={{borderLeft:'3px solid gray', display:'flex', flexDirection:'column'}}>
      <span style={{marginLeft:'10px'}}>Data</span>
      <span style={{marginLeft:'10px', fontWeight:'bold'}}>3GB</span>
      
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
      <span>Validity</span>
      <span style={{fontWeight:'bold'}}> 35Days</span>
    </div>
    <ChevronRightIcon />
    </div>
    <div>
      <p>3GB free data + 200 Min free voice anynet Local/STD/Roaming incl . MTNL. network + BSNL Tune for 35 days</p>
    </div>
  </div>
 
  </div>




  <div style={{display:'flex', flexDirection:'row', marginTop:'30px'}}>
  <div style={{borderLeft:'5px solid rgb(20, 9, 80) ',fontFamily:'Poppins', width:'30%' }}>
  <div style={{padding:'20px', justifyContent:'space-between',  }}>
    <button style={{background:'rgb(20, 9, 80)', padding:'10px', border:'1px solid rgb(20, 9, 80)', width:'50%', color:'#fff', fontSize:'15px', fontFamily:'Poppins', borderRadius:'10px'}}>Top Pick</button>
    <ChevronRightIcon style={{marginLeft:'15%'}} />
  </div>
  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
    <span style={{fontWeight:'bold'}} >₹ 153</span>
    <div style={{borderLeft:'3px solid gray', display:'flex', flexDirection:'column'}}>
      <span style={{marginLeft:'10px'}}>Data</span>
      <span style={{marginLeft:'10px', fontWeight:'bold'}}>Unlimited</span>
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
      <span>Validity</span>
      <span style={{fontWeight:'bold'}}>26Days</span>
    </div>
    </div>
    <div>
      <p>3GB free data 200 Min free voice anynet Local/STD/Roaming incl. MTNL. network+ free BSNL Tune for 35 days 3GB free data 200 Min free voice anynet <br />///////////////////////Local/STD/ Roaming incl. MTNL. network free BSNL Tune for 35 days 3GB free data 200 Min</p>
    </div>
  </div>


  <div style={{borderLeft:'5px solid orange',fontFamily:'Poppins', width:'30%', marginLeft:'20%' }}>
  <div style={{padding:'20px', justifyContent:'space-between',  }}>
    <button style={{background:'orange', padding:'10px', border:'1px solid orange', width:'50%', color:'#fff', fontSize:'15px', fontFamily:'Poppins', borderRadius:'10px'}}>Trending</button>
    <ChevronRightIcon style={{marginLeft:'15%'}} />
  </div>
  <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
    <span style={{fontWeight:'bold'}} >₹ 153</span>
    <div style={{borderLeft:'3px solid gray' ,display:'flex', flexDirection:'column'}}>
      <span style={{marginLeft:'10px'}}>Data</span>
      <span style={{marginLeft:'10px' , fontWeight:'bold'}}>Unlimited</span>
    </div>
    <div style={{display:'flex', flexDirection:'column'}}>
      <span>Validity</span>
      <span style={{fontWeight:'bold'}}>26Days</span>
    </div>
    </div>
    <div>
      <p>3GB free data 200 Min free voice anynet Local/STD/Roaming incl. MTNL. network+ free BSNL Tune for 35 days 3GB free data 200 Min free voice anynet Local/STD/ Roaming incl. <br />MTNL. network free BSNL Tune for 35 days 3GB free data 200 Min</p>
    </div>
  </div>
 
  </div>












  



        
    </div>
  )
}

export default Page