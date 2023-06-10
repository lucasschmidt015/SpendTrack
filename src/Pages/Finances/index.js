import React from 'react';

import { remaningAreaFinances } from './styles';
import Sidebar from '../../Components/Sidebar';

export default function Finances() {
 return (
   <div className='FinancesContainer'>
        <Sidebar/>
        <remaningAreaFinances>
            <p>Teste</p>
        </remaningAreaFinances>
   </div>
 );
}