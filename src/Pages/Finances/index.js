import React from 'react';

import { FinancesContainer, RemainingAreaFinances, Earnings, Expenses, GridExpenses } from './styles';
import Sidebar from '../../Components/Sidebar';

import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

export default function Finances() {
 return (
  <FinancesContainer>
      <Sidebar/>
      <RemainingAreaFinances>
        <h1>Finances</h1>
        <Earnings>
          <p>Current balance: R$ 1.500,00</p>
          <p>Percentage applied to obejectives: 50%</p>
          <button>Record earnings</button>
        </Earnings>
        <Expenses>
          <div id='TitleExpenses'>
            <h1>Expenses</h1>
            <button>New</button>
          </div>
          <GridExpenses>
            <table>
              <tr>
                <th id = 'firstH'>Id</th>
                <th id = 'secondH'>Type</th>
                <th id = 'thirdH'>Date</th>
                <th id = 'fourthH'>Description</th>
                <th id = 'fifthH'>#</th>
              </tr>
              <tr>
                <td id = 'firstR'>123</td>
                <td id = 'secondR'>Test</td>
                <td id = 'thirdR'>15/02/2002</td>
                <td id = 'fourthR'>Bla bla bla...</td>
                <div id = 'buttons-grid'>
                  <AiFillEdit/>
                  <FaTrash/>
                </div>
              </tr>
            </table>
          </GridExpenses>
        </Expenses>
      </RemainingAreaFinances>
  </FinancesContainer>
 );
}