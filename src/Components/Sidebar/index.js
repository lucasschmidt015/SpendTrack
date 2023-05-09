import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './Sidebar.css'
import { handleSignOut } from '../../Store/Models/User/actions';
import { setActivePage } from '../../Store/Models/SidebarConf/actions';

import { MdDashboard } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { AiFillDollarCircle } from 'react-icons/ai';
import { BsFillGearFill, BsFillFileBarGraphFill } from 'react-icons/bs';
import { ImExit } from 'react-icons/im';

export default function Sidebar() {

  const dispatch = useDispatch();
  const nav = useNavigate();
  const sidebarInfo = useSelector(state => state.SidebarConf);

  const [sidebarWidth, setSidebarWidth] = useState('60px');
  const [buttomHideMargin, setButtomHideMargim] = useState('62px');
  const [showDescriptions, setShowDescriptions] = useState(false);

  const handleExit = () => {
    dispatch(handleSignOut());
    nav('/');
  }

  const handleSidebarToggle = () => {
    setSidebarWidth(sidebarWidth === '60px' ? '200px' : '60px');
    setButtomHideMargim(buttomHideMargin === '62px' ? '175px' : '62px');
    setShowDescriptions(!showDescriptions);
  }

  const handleChangePage = (page) => {
    dispatch(setActivePage(page))
    nav(`/${page}`);
  }

 return (
   <div className='sidebar' style={{width: sidebarWidth}}>      
        <div className='buttom-hide' onClick={handleSidebarToggle} style={{marginLeft: buttomHideMargin}}>
          <FiMenu/>
        </div>
        <div className='buttom-module' id='dashboard'>
          {showDescriptions ? <MdDashboard style={{marginRight: '80px'}}/> : <MdDashboard/>}
          {showDescriptions && <p>Dashboard</p>}         
        </div>
        <div className='buttom-module' id='status'>
          {showDescriptions ? <AiFillDollarCircle style={{marginRight: '80px'}}/> : <AiFillDollarCircle/>}
          {showDescriptions && <p>Status</p>}         
        </div>
        <div className='buttom-module' id='report'>
          {showDescriptions ? <BsFillFileBarGraphFill style={{marginRight: '80px'}}/> : <BsFillFileBarGraphFill/>}
          {showDescriptions && <p>Report</p>}         
        </div>
        <div className='buttom-module' id='options'>
          {showDescriptions ? <BsFillGearFill style={{marginRight: '80px'}}/> : <BsFillGearFill/>}
          {showDescriptions && <p>Options</p>}         
        </div>
        <div className='buttom-module' id='exit' onClick={handleExit}>
          {showDescriptions ? <ImExit style={{marginRight: '80px'}}/> : <ImExit/>}
          {showDescriptions && <p>Exit</p>}         
        </div>
        
   </div>
 );
}