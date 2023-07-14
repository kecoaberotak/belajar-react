import { Fragment, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";

const products = [
  {
    id: 1,
    name: "Sepatu",
    price: 1000000,
    image: "images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eaque facilis dolor ipsum harum optio."
  },
  {
    id: 2,
    name: "Sepatu Dua",
    price: 2000000,
    image: "images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    id: 3,
    name: "Sepatu Baru",
    price: 500000,
    image: "images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio harum? Id nihil, cupiditate natus unde odio totam dignissimos delectus!"
  },
]

const email = localStorage.getItem('email');

const ProductsPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      qty:  1
    }
  ]);

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    window.location.href = '/login';
  };

  const handleAddCart = (id) => {
    if(cart.find(item => item.id === id)){
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
    } else {
      setCart([...cart, {id, qty: 1}]);
    }
  };

  return(
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <h1>{email}</h1>
        <Button variant ="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.map(product => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}/>
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id} handleAddCart={handleAddCart}/>
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-2">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => {
                const product = products.find(product => product.id === item.id)
                console.log(product)
                return(
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(item.qty * product.price).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;