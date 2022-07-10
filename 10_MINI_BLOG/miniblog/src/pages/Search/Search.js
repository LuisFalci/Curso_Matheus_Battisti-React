import styles from "./Search.module.css";
import React from 'react'

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

function Search() {
    const query = useQuery()
    // o q é o parâmetro que atribuimos em Home (q=${query}) e referencia a parte da url pesquisada -> return Navigate(`/search?q=${query}`)

    const search = query.get("q")
  return (
    <div>
        <h2>Search</h2>
        <p>{search}</p>
        </div>
  )
}

export default Search