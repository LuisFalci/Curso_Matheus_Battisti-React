import { useState } from "react"

const ListRender = () =>{

    const [list] = useState(["Arroz", "Feijão", "Farofa", "Picanha"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Luis", age: 32},
        { id: 2, name: "Pedro", age: 11},
        { id: 3, name: "Igor", age: 42},
    ]);
    
    // Previous pega o estado anterior
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };
    

    // Para não ocorrer erro, utilizar o índice como parâmetro para a chave (terá um valor diferente para cada item da lista)
    return(
        <div>
            <ul>
                {list.map((item, i) =>
                <li key={i}>{item}</li>)}
            </ul>
            <ul>
                {users.map((user) =>
                <li key={user.id}>{user.name} - {user.age}</li>)}
            </ul>
            <button onClick={deleteRandom}>Delete radom user</button>
        </div>
    )
}

export default ListRender