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
  const [counter,setCounter] = useState<number>(0);

  const incCounter = () =>{
    setCounter(counter +1);
  }
    return( 
        <div>
            {props.message ? props.message : "There is no message."}
            <br/>
            Counter = {counter}
            <br/>
            <button onClick={incCounter}>click me to increase</button>

        </div>
    )
}


export default App2;
