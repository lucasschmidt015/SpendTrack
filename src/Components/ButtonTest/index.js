import React from 'react';

import './ButtonTest.css';

export default function ButtonTest({func}) {
 return (
   <div>
        <button onClick={func}>Test Button</button>
   </div>
 );
}