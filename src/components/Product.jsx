import {FaTimes} from 'react-icons/fa'


//for products management
const Product = ({product, onDelete}) => {
    return (
      <div className = 'product'>
          <h3>
              {product.title}  
              <FaTimes style={ {color:'red'} }
              onClick ={() => onDelete(product.id)}/>
          </h3> 
          <p>{product.description}</p>
          <p>{product.cost}</p>
      </div>
    )
  }

export default Product
