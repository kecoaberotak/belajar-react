import { Fragment } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

const products = [
  {
    id: 1,
    name: "Sepatu",
    price: "Rp 1.000.000",
    image: "images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eaque facilis dolor ipsum harum optio."
  },
  {
    id: 2,
    name: "Sepatu Dua",
    price: "Rp 2.000.000",
    image: "images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    id: 3,
    name: "Sepatu Baru",
    price: "Rp 500.000",
    image: "images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio harum? Id nihil, cupiditate natus unde odio totam dignissimos delectus!"
  },
]

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  return(
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <h1>{email}</h1>
        <Button variant ="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map(product => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image}/>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}/>
          </CardProduct>
        ))}
      </div>
    </Fragment>
  )
}

export default ProductsPage;