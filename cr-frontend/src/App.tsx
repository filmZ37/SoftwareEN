import React, { useEffect, useState } from 'react';

import './App.css';

type AppState = {
  message: string ;
};


// ----------------------------- Use const & hook message ----------------------------
const App = () => {
  const [Courses , setCourses] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json() , )
      .then(Courses => {
        setCourses(Courses)
      });

  },[]);

  return (

    <div className='App' >
      <ul>
        {Courses.map((item) => (
          <li key={item.id}>{item.number} - {item.title}</li>
        ))}
      </ul>
      
    </div>
  );
}

/* ----------------------------------- Use class component & Mount ---------------
class App extends React.Component<{},AppState> {
  state: AppState = {
    message: 'DEFAULT MESSAGE IN FRONTEND',
  };

  componentDidMount(){
    fetch('http://localhost:3000/courses')
      .then(res => res.json() , )
      .then(obj => {
        this.setState({message: obj.message})
      });
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

*/
/*
// ---------------------------- Use class component & set state---
type AppProps = {
  message?: string ;          // use '?' to let either have/not have
};

type AppState = {
  counter : number;
};

class App extends React.Component<AppProps , AppState> {
  state : AppState = {
    counter : 0 
  };

  incCounter = () =>{
    this.setState({counter: this.state.counter+1});
  };

  render() {
    return (
      <div>
        {this.props.message ? this.props.message : 'Nothings here'}
        <br/>
        Counter : {this.state.counter}
        <br/>
        <button onClick={this.incCounter} > click me to Increase</button>
      </div>
    )
  }
}
*/


export default App;
