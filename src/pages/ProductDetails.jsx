import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import {CartContext} from '../contexts/CartContext'
import {ProductContext} from '../contexts/ProductContext'
function ProductDetails() {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  const product = product.find((item) => {
    return item.id === parseInt(id);
  })
  
  
  // if product is no found
if(!product) {
  return (
    <section className="h-screen flex justify-center items-center">Loading...</section>

    
  )
}

console.log(product);

  return (
    <div>
      <h1>Product Details</h1>
    </div>
  )
}

export default ProductDetails
