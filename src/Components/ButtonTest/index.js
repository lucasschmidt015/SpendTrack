import React from 'react';

import './ButtonTest.css';

export default function ButtonTest({func}) {
 return (
   <div className='button-test'>
        <button onClick={func}>Test Button</button>
   </div>
 );
}