import React from 'react';
import './Objectives.css'

import { VscChromeClose } from 'react-icons/vsc';

import { useState } from 'react';

export default function Objectives({ funcClose }) {

    const [title, setTitle] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [achievedValue, setAchievedValue] = useState('');
    const [description, setDescription] = useState('');

 return (
   <div className='Objectives-Container'>
        <div className='formObjectives'>
            <div className='primeira-linha-objectives'>
                <h1>New Objective</h1>
            </div>
            <div className='input-area-objectives'>
                <input placeholder='Title'
                       type='text'
                       value={title}
                       onChange={(e) => setTitle(e.target.value)}
                />
                <input placeholder='Total Value'
                       type='number'
                       value={totalValue}
                       onChange={(e) => setTotalValue(e.target.value)}
                />
                <input placeholder='Achieved Value'
                       type='number'
                       value={achievedValue}
                       onChange={(e) => setAchievedValue(e.target.value)}
                />
                <textarea placeholder='Description'
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className='submit-button-objective'>
                <button onClick={funcClose}>Cencel</button>
                <button>Seve</button>
            </div>
        </div>
   </div>
 );
}
