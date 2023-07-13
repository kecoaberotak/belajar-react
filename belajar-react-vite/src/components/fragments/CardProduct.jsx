import Button from "../elements/button/Button";

const CardProduct = (props) => {
  const {children} =  props;
  return (
    <div className="w-full max-w-sm bg-grey-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props) => {
  const {image} = props;
  return (
    <a href="#">
      {/* kalau di public, langsung panggil foldernya aja */}
      <img src={image} alt="Products" className="p-8 rounded-t-lg"/>
    </a>
  );
};

const Body = (props) => {
  const {children, name} = props
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight">{name}</h5>
        <p className="text-s">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const {price} = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold">{price}</span>
      <Button variant='bg-blue-600'>Add to cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;