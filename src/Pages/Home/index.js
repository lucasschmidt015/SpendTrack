import React from 'react';
import "./Home.css"

import Sidebar from '../../Components/Sidebar';

export default function Home() {
 return (
   <div className='home-container'>
        <Sidebar/>
        <div className='reamaining-area'>
          <h1>Dashboard page</h1>
        </div>
   </div>
 );
}