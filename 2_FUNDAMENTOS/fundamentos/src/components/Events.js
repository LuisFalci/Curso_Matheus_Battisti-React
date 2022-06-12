const Events = () => {
    // O parâmetro "e" pega todos os eventos
    // Por padrão, usamo handleAlgumaCoisa para definir os nomes de eventos
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento")
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
        </div>
    )
}

export default Events