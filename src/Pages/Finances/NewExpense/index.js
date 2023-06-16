import React from 'react';

import { useState } from 'react';

import { NewContainer, PromptAreaExpense } from './styles';

export default function NewExpense({onClickNew}) {

    const [types, setTypes] = useState([
        {Id: '1', Name: 'Lazer'},
        {Id: '2', Name: 'Alimentação'},
        {Id: '3', Name: 'Transporte'},
        {Id: '4', Name: 'Utiliários'},
    ]);

 return (
   <NewContainer>
        <PromptAreaExpense>
            <button onClick={() => onClickNew()}>Close</button>
        </PromptAreaExpense>
   </NewContainer>
 );
}