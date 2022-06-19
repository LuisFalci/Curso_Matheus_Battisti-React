import { useParams, Link } from "react-router-dom";

const Info = () => {
    const { id } = useParams();
  return (
    <div>
            <div>
      <h1>Informações sobre o produto: {id}</h1>
    </div>
    </div>
  )
}

export default Info