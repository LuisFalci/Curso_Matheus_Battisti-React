const Events = () => {
    // O parâmetro "e" pega todos os eventos
    // Por padrão, usamo handleAlgumaCoisa para definir os nomes de eventos
    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento")
    }
    return(
        <div>
            <button onClick={handleMyEvent}>Clique aqui</button>
        </div>
    )
}

export default Events