import {useState} from 'react';

const ManageData = () =>{
    let someData = 10;

    const [number, setNumber] = useState(15);

    return(
        <div>
            <h1>ManageData</h1>
            <p>Valor: {someData}</p>
            <div>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
            </div>
            <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(number+1)}>Mudar o State</button>
            </div>
        </div>
    )
}

export default ManageData