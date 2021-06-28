import React, { useEffect, useState } from 'react';

import './App.css';

type AppState = {
  message: string ;
};

const App = () => {
  const [message , setMessage] = useState('My message');

  useEffect(() => {
    fetch('http://localhost:3000/courses')
      .then(res => res.json() , )
      .then(obj => {
        setMessage(obj.message)
      });

  },[]);

  return (
    <div>
      {message}
    </div>
  );
}
/*
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

export default App;
