// useParams pega o nome passado da url. Neste caso pegamos o nome do id
import { useParams } from "react-router-dom";

const Product = () => {
  //4  - rota dinamica 
  const { id } = useParams();
  return(
    <div>
        Product: {id}
    </div>
  )
};

export default Product;
