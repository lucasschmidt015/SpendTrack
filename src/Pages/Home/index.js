import React from 'react';
import "./Home.css"

import Sidebar from '../../Components/Sidebar';

import { MdOutlineFilterList } from 'react-icons/md';

export default function Home() {

  const handleNew = () => {
    console.log('Handle new <----------');
  }

 return (
   <div className='home-container'>
        <Sidebar/>
        <div className='reamaining-area'>
          <h1>Dashboard page</h1>
          <div className='line-dashboard'>
            <div className='dash-model'>
              <div className='title-model'>
                <h2>Earnings / Expenses</h2>
                <MdOutlineFilterList/>
              </div>
            </div>
            <div className='dash-model'>
              <div className='title-model'>
                <h2>Objectives</h2>
                <button onClick={handleNew}>New</button>
              </div>
            </div>
          </div>
          <div className='line-dashboard'>
            <div className='dash-model'>
              <div className='title-model'>
                <h2>Main Expenses</h2>
                <MdOutlineFilterList/>
              </div>
            </div>
            <div className='dash-model'>
              <div className='title-model'>
                <h2>Year-End Forecast</h2>
                <MdOutlineFilterList/>
              </div>
            </div>
          </div>
        </div>
   </div>
 );
}