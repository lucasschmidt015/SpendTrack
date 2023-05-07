import React from 'react';
import './Sidebar.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { MdDashboard } from 'react-icons/md';
import { ImExit } from 'react-icons/im';

export default function Sidebar() {

  const dispatch = useDispatch();
  const nav = useNavigate();

  function handleSignOut(){
    dispatch({
      type: 'HANDLE_SIGNOUT',
      info: 'SignOut',
    })
    nav('/');
  }

 return (
   <div className='sidebar'>
        <div className='buttom-module'>
          <MdDashboard/>
        </div>
        <div className='buttom-module'>
          <MdDashboard/>
        </div>
        <div className='buttom-module'>
          <MdDashboard/>
        </div>
        <div className='buttom-module'>
          <MdDashboard/>
        </div>
        <div className='buttom-module' onClick={handleSignOut}>
          <ImExit/>
        </div>
   </div>
 );
}