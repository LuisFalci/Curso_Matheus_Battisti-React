import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';

function App() {
  const name = "Gabriel";
  const [userName] = useState("Maria");
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Ferrari", color: "Branco", newCar: false, km: 2323},
    {id: 2, brand: "Ferrari", color: "Amarela", newCar: false, km: 4444},
  ]

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
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
    </div>

  );
}

export default App;
