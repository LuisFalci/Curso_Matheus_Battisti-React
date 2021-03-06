import React, { useContext } from 'react'
import { CounterContext } from "../context/CounterContext"
import ChangeCounter from "../components/ChangeCounter"

const Products = () => {
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Product</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor contexo */}
      <ChangeCounter />
    </div>
  )
}

export default Products