import Button from "../elements/button/Button";
import { Link } from "react-router-dom";

const CardProduct = (props) => {
  const {children} =  props;
  return (
    <div className="w-full max-w-xs bg-grey-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const {image, id} = props;
  return (
    <Link to={`/product/${id}`}>
      {/* kalau di public, langsung panggil foldernya aja */}
      <img src={image} alt="Products" className="p-8 rounded-t-lg h-60 w-full object-cover"/>
    </Link>
  );
};

const Body = (props) => {
  const {children, name} = props
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight my-5">{name.substring(0, 20)}...</h5>
        <p className="text-s">
          {children.substring(0, 100)}...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const {price, handleAddCart, id} = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold">$ {price.toLocaleString('en-US', {styles: 'currency', currency: 'USD'})}</span>
      <Button variant='bg-blue-600' onClick={() => handleAddCart(id)}>Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;