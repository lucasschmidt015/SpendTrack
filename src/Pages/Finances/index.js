import React from 'react';

import Sidebar from '../../Components/Sidebar';
import NewExpense from './NewExpense';

import { FinancesContainer, RemainingAreaFinances, Earnings, Expenses, GridExpenses } from './styles';
import { FaTrash } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

import { useState } from 'react';

export default function Finances() {

  const [activeNewExpenseScreen, setNewExpenseScreen] = useState(false);

  const [expenses, setExpenses] = useState([
    {Id: '1', Type: 'Teste', Date: '15/02/2002', Description: 'Bla bla bla...'},
    {Id: '2', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '3', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '4', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '5', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '6', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '7', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '8', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '9', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '10', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '11', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '12', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '13', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '14', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '15', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '16', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '17', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '18', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
    {Id: '19', Type: 'Teste2', Date: '16/05/2012', Description: 'Bla bla bla Fon...'},
  ]);

  const onClickNew = (id = null) => {
    if (activeNewExpenseScreen)
    {
      setNewExpenseScreen(false);
      return;
    }

    if (id !== null){
      console.log(`Vai editar no ID: ${id}`);
      return;
    } 

    console.log(`Chamar a tela de novo`);
    setNewExpenseScreen(true);
  }

  const onClickDelete = (id) => {
    console.log(`Vai deletar o ID: ${id}`);
  }

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
            <button onClick={() => onClickNew()}>New</button>
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
              {expenses.length == 0 ? (
                <></>
              ) : (
                expenses.map(expense => (
                  <tr key={expense.Id}>
                    <td id = 'firstR'>{expense.Id}</td>
                    <td id = 'secondR'>{expense.Type}</td>
                    <td id = 'thirdR'>{expense.Date}</td>
                    <td id = 'fourthR'>{expense.Description}</td>
                    <div id = 'buttons-grid'>
                      <AiFillEdit onClick={() => onClickNew(expense.Id)}/>
                      <FaTrash onClick={() => onClickDelete(expense.Id)}/>
                    </div>
                  </tr>
                ))
              )}
              
            </table>
          </GridExpenses>
        </Expenses>
      </RemainingAreaFinances>
      {activeNewExpenseScreen && <NewExpense onClickNew={onClickNew}/>}
  </FinancesContainer>
 );
}