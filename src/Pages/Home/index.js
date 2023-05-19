import React from 'react';
import "./Home.css"
import { useDispatch } from 'react-redux';

import Sidebar from '../../Components/Sidebar';
import ButtonTest from '../../Components/ButtonTest';

import { dispatchLogin } from '../../Store/Models/User/actions';

export default function Home() {

  const dispatch = useDispatch();

 return (
   <div className='home-container'>
        <Sidebar/>
        <div className='reamaining-area'>
          <h1>Dashboard page</h1>
          <ButtonTest func={() => dispatch(dispatchLogin('teste@teste.com', '123123'))}/>
        </div>
   </div>
 );
}