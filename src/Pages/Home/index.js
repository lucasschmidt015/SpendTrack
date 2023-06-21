import React from 'react';
import "./Home.css"

import Sidebar from '../../Components/Sidebar';
import Objectives from '../Objectives';

import { useState, useEffect } from 'react';
import numeral from 'numeral';

import { MdOutlineFilterList } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

import { getRealTimeData, deleteDataById, getFullData } from '../../Utils/GeneralFirebase';
import { toast } from 'react-toastify';

export default function Home() {

  const [objectives, setObjectives] = useState([]);
  const [showObejectiveScreen, setShowObjectiveScreen] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    getFullData('Objectives', setObjectives, true);
  }, []);

  const handleNew = () => {
    setShowObjectiveScreen(!showObejectiveScreen);
  }

  const handleEdit = (id) => {
    setEditId(id);
    setShowObjectiveScreen(true);
  }

  const handleDelete = async (id) => {
    const response = await deleteDataById('Objectives', id);

    if (response)
      toast.success('Deleted successfully!');
    else
      toast.warn('Something went wrong!');
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
          <Objectives funcClose = {handleNew} editId = {editId} funcClearId = {setEditId}/>
        )}
        
   </div>
 );
}