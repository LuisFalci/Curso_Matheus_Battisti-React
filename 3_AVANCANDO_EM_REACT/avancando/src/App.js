import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';

function App() {
  const name = "Gabriel"
  const [userName] = useState("Maria")

  return (
    <div className="App">
      <ManageData />
      
      <ListRender />

      <ConditionalRender />

      <ShowUserName name="Luis"/>
      <ShowUserName name={name}/>
      <ShowUserName name={userName}/>
      
    </div>

  );
}

export default App;
