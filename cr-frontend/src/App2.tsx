import React, { useEffect, useState } from 'react';

import './App.css';

// ---------------------------- Use class component & set state---
type App2Props = {
  message?: string ;          // use '?' to let either have/not have
};

type App2State = {
  counter : number;
};

const App2 = (props: App2Props) => {
    return(
        <div>
            {props.message ? props.message : "There is no message."}
        </div>
    )
}


export default App2;
