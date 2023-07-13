import CardProduct from "../components/fragments/CardProduct";

const ProductsPage = () => {
  return(
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg"/>
        <CardProduct.Body title='Sepatu'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium eaque facilis dolor ipsum harum optio?
        </CardProduct.Body>
        <CardProduct.Footer price='Rp 1.000.000'/>
      </CardProduct>

      <CardProduct>
        <CardProduct.Header image="images/luis-felipe-lins-LG88A2XgIXY-unsplash.jpg"/>
        <CardProduct.Body title='Shoes'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minima?
        </CardProduct.Body>
        <CardProduct.Footer price='Rp 5.000.000'/>
      </CardProduct>
    </div>
  )
}

export default ProductsPage;