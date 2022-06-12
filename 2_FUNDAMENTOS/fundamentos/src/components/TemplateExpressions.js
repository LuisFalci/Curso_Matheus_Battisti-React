const TemplateExpressions = () =>{
    const name = "Luis";
    const data = {
        age: 31,
        job: "Programador",
    }

    return(
        <div>
            <h1>Olá {name}</h1>
            <p>Trabalho como {data.job}</p>
            <p>{4+4}</p>
            <p>{console.log(data)}</p>
            
        </div>
    )
} 

export default TemplateExpressions