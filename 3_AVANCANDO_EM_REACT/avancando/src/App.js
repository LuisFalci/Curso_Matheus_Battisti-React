import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';

function App() {
  const name = "Gabriel";
  const [userName] = useState("Maria");
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Ferrari", color: "Branco", newCar: false, km: 2323},
    {id: 3, brand: "Ferrari", color: "Amarela", newCar: false, km: 4444},
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  return (
    <div className="App">
      <ManageData />
      
      <ListRender />

      <ConditionalRender />

      <ShowUserName name="Luis"/>
      <ShowUserName name={name}/>
      <ShowUserName name={userName}/>
      
      <CarDetails brand="Fiat" km="10000" color="Vermelho" />
      <CarDetails brand="Fiat" km="10000" color="Vermelho" />
      {/* loop em array de objetos */}

      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color} 
        km={car.km} newCar={car.newCar} />
      ))}

      <Container myValue="5">
        <p>Conteudo filho de container</p>
      </Container>

      {/* Executar Função */}
      <ExecuteFunction myFunction={showMessage}/>
    </div>

  );
}

export default App;
