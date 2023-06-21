import React from 'react';
import './Objectives.css'

import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { sendDataAutoID, getUserUid } from '../../Utils/GeneralFirebase';

import { getSpecificData } from '../../Utils/GeneralFirebase';

export default function Objectives({ funcClose, editId, funcClearId }) {

    const [title, setTitle] = useState('');
    const [totalValue, setTotalValue] = useState('');
    const [achievedValue, setAchievedValue] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const getEditingData  = async () => {
            if (editId !== null) {
                const response = await getSpecificData('Objectives', editId);
                setTitle(response.title);
                setTotalValue(response.totalValue);
                setAchievedValue(response.achievedValue);
                setDescription(response.description);
            }
        }

        getEditingData();
    }, []);

    const handleNewObjective = async () => {
        if (editId){
            //Call here the function to update datas, It is on the GeneralFirebase file;
        } else {
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

        funcClearId(null);
        
    }

    const handleCancel = () => {
        funcClearId(null);
        funcClose();
    }

    const calcAchievedPercentage = (achievedValue, totalValue) => {
        return parseInt((achievedValue * 100) / totalValue);
    }

    return (
        <div className='Objectives-Container'>
            <div className='formObjectives'>
                <div className='primeira-linha-objectives'>
                    <h1>{editId !== null ? 'Edit' : 'New'} Objective</h1>
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
                    <button onClick={() => handleCancel()}>Cencel</button>
                    <button onClick={() => handleNewObjective()}>Seve</button>
                </div>
            </div>
        </div>
    );
}
