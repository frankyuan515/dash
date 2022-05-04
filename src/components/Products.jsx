import Product from './Product'
//for products management
const Products = ({products, onDelete}) => {

    return (
      <>
      {products.map((product, index)=> (
          <Product key = {index} product = {product}
          onDelete = {onDelete}
          />
      
          ))}
      </>
    )
  }

  export default Products