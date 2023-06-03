import React from 'react';
import "./Home.css"

import Sidebar from '../../Components/Sidebar';

import { MdOutlineFilterList } from 'react-icons/md';
import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

export default function Home() {

  const obj = [
    {id: 1, title: 'Viagem para São Fransisco', percentageAchieved: '50%', valueAchieved: 'R$ 6.000,00', valueObjective: 'R$ 12.000,00'},
    {id: 2, title: 'Los Anjeles', percentageAchieved: '12%', valueAchieved: 'R$ 2.400,00', valueObjective: 'R$ 20.000,00'},
    {id: 3, title: 'Londres', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 4, title: 'Londres', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 5, title: 'Londres', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 6, title: 'Londres', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
    {id: 7, title: 'Londres', percentageAchieved: '100%', valueAchieved: 'R$ 10.000,00', valueObjective: 'R$ 10.000,00'},
  ]

  const [objectives, setObjectives] = useState(obj);

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
              <div className='render-area-obejectives'>
                <div className='scroll-area-objectives'>
                  {objectives.map((object) => {
                    return(
                      <div className='objectives' key={object.id}>
                        <p id='Title'>{object.title}</p>
                        <p id='Percent'>{object.percentageAchieved}</p>
                        <p id='Achieved'>{object.valueAchieved} / {object.valueObjective}</p>
                        <div className='options-buttons'>
                          <AiFillEdit/>
                          <FaTrash/>
                        </div>
                      </div>
                    );
                  })}
                </div>
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