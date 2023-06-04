import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//import './Sidebar.css'
import { teste } from './styles.js';
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
  
  const sidebarInfo = useSelector(state => state.SidebarConf[0].activePage);

  const [sidebarWidth, setSidebarWidth] = useState('60px');
  const [buttomHideMargin, setButtomHideMargim] = useState('62px');
  const [showDescriptions, setShowDescriptions] = useState(false);

  const handleExit = () => {
    dispatch(handleSignOut());
    nav('/');
  }

  const handleSidebarToggle = () => {
    setSidebarWidth(sidebarWidth === '60px' ? '200px' : '60px');
    setButtomHideMargim(buttomHideMargin === '62px' ? '200px' : '62px');
    setShowDescriptions(!showDescriptions);
  }

  const handleChangePage = (page) => {
    dispatch(setActivePage(page))
    // nav(`/${page}`);
  }

 return (
   <sidebarStyle style={{width: sidebarWidth}}>      
        <div className='buttom-hide' onClick={handleSidebarToggle} style={{marginLeft: buttomHideMargin}}>
          <FiMenu/>
        </div>
        <div className={sidebarInfo === 'home' ? 'buttom-module-active' : 'buttom-module'} id='dashboard' onClick={() => handleChangePage('home')}>
          {showDescriptions ? <MdDashboard style={{marginRight: '100px'}}/> : <MdDashboard/>}
          {showDescriptions && <p>Dashboard</p>}         
        </div>
        <div className={sidebarInfo === 'status' ? 'buttom-module-active' : 'buttom-module'} id='status' onClick={() => handleChangePage('status')}>
          {showDescriptions ? <AiFillDollarCircle style={{marginRight: '100px'}}/> : <AiFillDollarCircle/>}
          {showDescriptions && <p>Status</p>}         
        </div>
        <div className={sidebarInfo === 'report' ? 'buttom-module-active' : 'buttom-module'} id='report' onClick={() => handleChangePage('report')}>
          {showDescriptions ? <BsFillFileBarGraphFill style={{marginRight: '100px'}}/> : <BsFillFileBarGraphFill/>}
          {showDescriptions && <p>Report</p>}         
        </div>
        <div className={sidebarInfo === 'options' ? 'buttom-module-active' : 'buttom-module'} id='options' onClick={() => handleChangePage('options')}>
          {showDescriptions ? <BsFillGearFill style={{marginRight: '100px'}}/> : <BsFillGearFill/>}
          {showDescriptions && <p>Options</p>}         
        </div>
        <div className='buttom-module' id='exit' onClick={handleExit}>
          {showDescriptions ? <ImExit style={{marginRight: '100px'}}/> : <ImExit/>}
          {showDescriptions && <p>Exit</p>}         
        </div>
        
   </sidebarStyle>
 );
}