import {Link} from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import AddTask from './AddTask'


const ProductManagement = () => {
  return (
    <div>
        <h4>Product Data to Show:</h4>
      
        <>
      { showAddTask && <AddTask onAdd ={addTask}/>}
      <h4>User Data to show:</h4>

      {products.length > 0 ? (
      <Products products={products} onDelete ={deleteTask}/>
      ):(
        'No Data to Show')}
      </>

        
    </div>
  )
}

export default ProductManagement