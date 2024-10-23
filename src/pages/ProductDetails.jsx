import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // destructure product
const product = products.find((item) => item.id === parseInt(id));

// if product is not found
if (!product) {
  return (
    <section className="h-screen flex justify-center items-center">
      <h2>Product Not Found</h2>
    </section>
  )
}

const { title, image, price, description } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-0">
        {/* image & wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[50%]"
              src={image}
              alt=""
            />
          </div>

          {/* text */}

          <div className="flex-1 text-center lg:text-left lg:pl-8">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>

            <div className="text-3xl text-red-600 font-bold mb-4 ">
              $ {price}
            </div>

            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-black py-4 px-8 text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
