import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import Button from "../components/elements/button/Button";
import { getProducts } from "../services/product-service";
import { useLogin } from "../hooks/useLogin";
// import Counter from "../components/fragments/Counter";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState([0]);
  const [products, setProducts] = useState([])
  const username = useLogin();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    if(products.length > 0 && cart.length > 0){
      const sum = cart.reduce((acc, item) => {
        const product = products.find(product => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
  
      setTotalPrice(sum);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('cart');
    window.location.href = '/login';
  };

  const handleAddCart = (id) => {
    if(cart.find(item => item.id === id)){
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
    } else {
      setCart([...cart, {id, qty: 1}]);
    }
  };

  // useRef untuk referensi value
  // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);

  // const handleAddCartRef = (id) => {
  //   console.log(cartRef.current)
  //   cartRef.current = [...cartRef.current, {id, qty: 1}]
  //   localStorage.setItem('cart', JSON.stringify(cartRef.current));
  // }

  // useRef untuk manipulasi dom
  const totalPriceRef = useRef(null);

  useEffect(() => {
    if(cart.length > 0){
      totalPriceRef.current.style.display = 'table-row';
    }else totalPriceRef.current.style.display = 'none';
  }, [cart]);

  // Get Data dari API
  useEffect(() => {
    getProducts(data => {
      setProducts(data);
    });
  }, []);

  return(
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        <h1>{username}</h1>
        <Button variant ="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map(product => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image}/>
              <CardProduct.Body name={product.title}>
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
              {products.length > 0 && cart.map(item => {
                const product = products.find(product => product.id === item.id)
                return(
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 20)}...</td>
                    <td>$ {product.price.toLocaleString('en-US', {styles: 'currency', currency: 'USD'})}</td>
                    <td>{item.qty}</td>
                    <td>$ {(item.qty * product.price).toLocaleString('en-US', {styles: 'currency', currency: 'USD'})}</td>
                  </tr>
                )
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}><b>Total Price</b></td>
                <td><b>$ {totalPrice.toLocaleString('en-US', {styles: 'currency', currency: 'USD'})}</b></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="mt-5 mb-5 flex justify-center">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;