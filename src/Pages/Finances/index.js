import React from 'react';

import { FinancesContainer, RemainingAreaFinances, Earnings, Expenses, GridExpenses } from './styles';
import Sidebar from '../../Components/Sidebar';

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
                <th>Id</th>
                <th>Type</th>
                <th>Date</th>
                <th>Description</th>
                <th>#</th>
              </tr>
              <tr>
                <td>123</td>
                <td>Test</td>
                <td>15/02/2002</td>
                <td>Bla bla bla...</td>
                <div id='buttons-grid'>
                  
                </div>
              </tr>
            </table>
          </GridExpenses>
        </Expenses>
      </RemainingAreaFinances>
  </FinancesContainer>
 );
}