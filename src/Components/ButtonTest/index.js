import React from 'react';

import './ButtonTest.css';

export default function ButtonTest({func}) {
 return (
   <div>
        <button onClick={func}>Test Button</button>
   </div>
 );
}


{/* <ButtonTest func={() => dispatch(dispatchLogin('teste@teste.com', '123123'))}/> //Exemplo de como usar o componente*/}