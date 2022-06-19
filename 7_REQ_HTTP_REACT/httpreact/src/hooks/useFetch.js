import {useState, useEffect} from 'react'

// 4 - custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando post
    // configura método (se é post)
    const [config, setConfig] = useState(null);
    // nome do método
    const [method, setMethod] = useState(null);
    // sempre que alterarmos os dados, call fetch atualiza os dados
    const [callFetch, setCallFetch] = useState(null);

    // 6 - loading
    const [loading, setLoading] = useState(false);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        }
    }
   
    useEffect(() => {
        const fetchData = async () => {

            // 6 - loading
            // obtendo os dados (carregando)
            setLoading(true);

            const res = await fetch(url);

            const json = await res.json();

            setData(json);
            // dados obtidos (carregado)
            setLoading(false);
        };
        fetchData();
    }, [url, callFetch]);

    useEffect(() => {
        const httpRequest = async () => {
        if(method === "POST"){
            let fetchOption = [url, config];

            const res = await fetch(...fetchOption);
            
            const json = await res.json();
            
            setCallFetch(json);
        } 
    }
    httpRequest(); 
    }, [config, method, url]);

    return { data, httpConfig, loading };
}