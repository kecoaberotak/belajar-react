import { Fragment, useEffect, useState, useContext } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/product-service";
import TableCart from "../components/fragments/tableCart";
import Navbar from "../components/layouts/Navbar";
import { useLogin } from "../hooks/useLogin";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  useLogin();

  const {isDarkMode} = useContext(DarkMode);

  // tampilin data cart ke local storage
  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem('cart')) || []);
  // }, []);


  // const handleAddCart = (id) => {
  //   if(cart.find(item => item.id === id)){
  //     setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
  //   } else {
  //     setCart([...cart, {id, qty: 1}]);
  //   }
  // };

  // useRef untuk referensi value
  // const cartRef = useRef(JSON.parse(localStorage.getItem('cart')) || []);
  // const handleAddCartRef = (id) => {
  //   console.log(cartRef.current)
  //   cartRef.current = [...cartRef.current, {id, qty: 1}]
  //   localStorage.setItem('cart', JSON.stringify(cartRef.current));
  // }

  // Get Data dari API
  useEffect(() => {
    getProducts(data => {
      setProducts(data);
    });
  }, []);

  return(
    <Fragment>
      <Navbar/>
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map(product => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} id={product.id}/>
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} id={product.id}/>  {/* handleAddCart udah ga dipake */}
            </CardProduct>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-2 mb-2">Cart</h1>
          <TableCart products={products}></TableCart>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;