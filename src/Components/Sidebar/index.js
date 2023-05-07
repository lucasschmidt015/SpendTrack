import React, { useState } from 'react';
import './Sidebar.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MdDashboard } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsFillGearFill, BsFillFileBarGraphFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';

export default function Sidebar() {

  const dispatch = useDispatch();
  const nav = useNavigate();

  const [sidebarWidth, setSidebarWidth] = useState('60px');
  const [buttomHideMargin, setButtomHideMargim] = useState('62px');
  const [showDescriptions, setShowDescriptions] = useState(false);

  function handleSignOut(){
    dispatch({
      type: 'HANDLE_SIGNOUT',
      info: 'SignOut',
    })
    nav('/');
  }

  const handleSidebarToggle = () => {
    setSidebarWidth(sidebarWidth === '60px' ? '200px' : '60px');
    setButtomHideMargim(buttomHideMargin === '62px' ? '175px' : '62px');
    setShowDescriptions(!showDescriptions);
  }

 return (
   <div className='sidebar' style={{width: sidebarWidth}}>      
        <div className='buttom-hide' onClick={handleSidebarToggle} style={{marginLeft: buttomHideMargin}}>
          <FiMenu/>
        </div>
        <div className='buttom-module'>
          {showDescriptions ? <MdDashboard style={{marginRight: '60px'}}/> : <MdDashboard/>}
          {showDescriptions && <p>Dashboard</p>}         
        </div>
        <div className='buttom-module'>
          {showDescriptions ? <AiFillDollarCircle style={{marginRight: '60px'}}/> : <AiFillDollarCircle/>}
          {showDescriptions && <p>Status</p>}         
        </div>
        <div className='buttom-module'>
          {showDescriptions ? <BsFillFileBarGraphFill style={{marginRight: '60px'}}/> : <BsFillFileBarGraphFill/>}
          {showDescriptions && <p>Report</p>}         
        </div>
        <div className='buttom-module'>
          {showDescriptions ? <BsFillGearFill style={{marginRight: '60px'}}/> : <BsFillGearFill/>}
          {showDescriptions && <p>Options</p>}         
        </div>
        <div className='buttom-module' onClick={handleSignOut}>
          {showDescriptions ? <ImExit style={{marginRight: '60px'}}/> : <ImExit/>}
          {showDescriptions && <p>Exit</p>}         
        </div>
        
   </div>
 );
}