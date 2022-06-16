import React, { useState } from 'react'
import "./MyForm.css";

const MyForm = () =>  { 
    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (event) =>{
        // preventDefault cancela a ação. Neste caso ela irá impedir o envio do formulário (recarregar a página)
        event.preventDefault();
        console.log("Enviando formulario");
    }

  return (
    <div>
        {/* 5 - Envio de form */}
        {/* 1 - Criação de form */}
        <form onSubmit={handleSubmit}>
           <div>
            <label htmlFor="name">Nome:</label>
            <input 
            type="text" 
            name="name" 
            placeholder="Digite seu nome"
            onChange={handleName}
            />
           </div>
           {/* 2 - label envolvendo input*/}
           <label>
            <span>Email:</span>
            {/* 4 - simplificação de manipulação de state */}
           <input 
           type="email" 
           name="email" placeholder="Digite seu email"
           onChange={(e) => setEmail(e.target.value)}
           />
           </label>
           <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm