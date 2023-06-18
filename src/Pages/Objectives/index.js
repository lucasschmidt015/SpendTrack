import React from 'react';
import './Objectives.css'

import { useState } from 'react';
import { toast } from 'react-toastify';
import { sendDataAutoID, getUserUid } from '../../Utils/GeneralFirebase';

export default function Objectives({ funcClose }) {

    const [title, setTitle] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [achievedValue, setAchievedValue] = useState('');
    const [description, setDescription] = useState('');

    const handleNewObjective = async () => {
        const userUid = getUserUid();
        const response = await sendDataAutoID('Objectives', {
            userUid: userUid,
            title: title,
            percentageAchieved: calcAchievedPercentage(achievedValue, totalValue),
            totalValue: parseFloat(totalValue),
            achievedValue: parseFloat(achievedValue),
            description: description,
        })

        if (response){
            toast.success("Registered successfully!");
            funcClose();
        } else {
            toast.warn("Something went wrong!");
        }
    }

    const calcAchievedPercentage = (achievedValue, totalValue) => {
        return parseInt((achievedValue * 100) / totalValue);
    }

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
                    <button onClick={() => handleNewObjective()}>Seve</button>
                </div>
            </div>
        </div>
    );
}
