import React from 'react';
import "./Home.css"

import Sidebar from '../../Components/Sidebar';
import Objectives from '../Objectives';

import { MdOutlineFilterList } from 'react-icons/md';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

export default function Home() {

  const obj = [
    {id: 1, title: 'São Fransisco', percentageAchieved: '50%', valueAchieved: 'R$ 6.000,00', valueObjective: 'R$ 12.000,00'},
    {id: 2, title: 'Los Anjeles', percentageAchieved: '12%', valueAchieved: 'R$ 2.400,00', valueObjective: 'R$ 20.000,00'},
    {id: 3, title: 'Londres', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 4, title: 'Suiça', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 5, title: 'Tokyo', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 6, title: 'Toronto', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 7, title: 'Budapest', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
  ]

  const [objectives, setObjectives] = useState(obj);
  const [showObejectiveScreen, setShowObjectiveScreen] = useState(false);

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
                    <div className='objectives' key={object.id}>
                      <p id='Title'>{object.title}</p>
                      <p id='Percent'>{object.percentageAchieved}</p>
                      <p id='Achieved'>{object.valueAchieved}  /  {object.valueObjective}</p>
                      <div className='options-buttons'>
                        <AiFillEdit onClick={() => handleEdit(object.id)}/>
                        <FaTrash onClick={() => handleDelete(object.id)}/>
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