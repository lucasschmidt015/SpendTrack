import React from 'react';
import "./Home.css"

import Sidebar from '../../Components/Sidebar';
import Objectives from '../Objectives';

import { useState } from 'react';
import numeral from 'numeral';

import { MdOutlineFilterList } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

import { getRealTimeData } from '../../Utils/GeneralFirebase';

export default function Home() {

  const [objectives, setObjectives] = useState([]);
  const [showObejectiveScreen, setShowObjectiveScreen] = useState(false);

  getRealTimeData('Objectives', setObjectives, true);

  const handleNew = () => {
    setShowObjectiveScreen(!showObejectiveScreen);
  }

  const handleEdit = (id) => {
    console.log(`ID: ${id}`);
  }

  const handleDelete = (id) => {
    console.log(`ID: ${id}`);
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
              <div className='render-area-obejectives'>
                {objectives.map((object) => {
                  return(
                    <div className='objectives' key={object.uid}>
                      <p id='Title'>{object.title}</p>
                      <p id='Percent'>{object.percentageAchieved}%</p>
                      <p id='Achieved'>R$ {numeral(object.achievedValue).format('0,0.00')}  /  R$ {numeral(object.totalValue).format('0,0.00')}</p>
                      <div className='options-buttons'>
                        <AiFillEdit onClick={() => handleEdit(object.uid)}/>
                        <FaTrash onClick={() => handleDelete(object.uid)}/>
                      </div>
                    </div>
                  );
                })}

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
        {showObejectiveScreen && (
          <Objectives funcClose = {handleNew}/>
        )}
        
   </div>
 );
}