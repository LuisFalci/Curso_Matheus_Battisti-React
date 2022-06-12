const Events = () => {
    // O parâmetro "e" pega todos os eventos
    // Por padrão, usamo handleAlgumaCoisa para definir os nomes de eventos
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento")
    }

    const rederSomething = (x) => {
        if(x){
            return <h1>Renderiza isso</h1>
        }else{
            return <h1>Renderiza o do else</h1>
                
            
        }
    }
    return(
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
            <button onClick={() => console.log("Clicou!")}>
            Clique aqui
            </button>
            <button onClick={() =>{
                 if(true){
                    console.log("Isso não deveria existir")
                }
            } }>
            Clique aqui
            </button>
            </div>
            {rederSomething(true)}
            {rederSomething(false)}
        </div>
    )
}

export default Events