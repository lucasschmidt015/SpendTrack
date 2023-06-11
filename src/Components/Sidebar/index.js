import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import './Sidebar.css'
import { SidebarContainer, ButtomHide, ButtomModule } from './stylesSidebar';
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

  const [showDescription, setShowDescription] = useState(false);


  const handleExit = () => {
    dispatch(handleSignOut());
    nav('/');
  }

  const handleChangePage = (page) => {
    if (page !== 'finances' && page !== 'home')
      return;

    dispatch(setActivePage(page))
    nav(`/${page}`);
  }

 return (
   <SidebarContainer showDescription={showDescription}>      
        <ButtomHide showDescription={showDescription} onClick={() => setShowDescription(!showDescription)}>
          <FiMenu/>
        </ButtomHide>
        <ButtomModule active={sidebarInfo === 'home'} showDescription={showDescription} id='dashboard' onClick={() => handleChangePage('home')}>
          <MdDashboard/>
          <p>Dashboard</p>         
        </ButtomModule>
        <ButtomModule active={sidebarInfo === 'finances'} showDescription={showDescription} id='finances' onClick={() => handleChangePage('finances')}>
          <AiFillDollarCircle/>
          <p>Finances</p>         
        </ButtomModule>
        <ButtomModule active={sidebarInfo === 'report'} showDescription={showDescription} id='report' onClick={() => handleChangePage('report')}>
          <BsFillFileBarGraphFill/>
          <p>Report</p>
        </ButtomModule>
        <ButtomModule active={sidebarInfo === 'options'} showDescription={showDescription} id='options' onClick={() => handleChangePage('options')}>
          <BsFillGearFill/>
          <p>Options</p>
        </ButtomModule>
        <ButtomModule showDescription={showDescription} id='exit' onClick={handleExit}>
          <ImExit/>
          <p>Exit</p>
        </ButtomModule>
   </SidebarContainer>
 );
}