import CardProduct from "../components/fragments/CardProduct";

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
]

const ProductsPage = () => {
  return(
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
  )
}

export default ProductsPage;