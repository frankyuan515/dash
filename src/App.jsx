import './App.css';
import { useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import Products from './components/Products'


function App() {
//shwo user data  
const [showAddTask, setShowAddTask] = useState(false)
const [tasks, setTasks]=useState(
    [

    ]
)

useEffect(()=>{
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }
  getTasks()
}, [])

//fetch Users
const fetchTasks = async()=>{
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  console.log(data)
return data
  
}

//show product data

const [showAddProduct, setShowAddProduct] = useState(false)
const [products, setProducts]=useState([])

useEffect(()=>{
  const getProducts = async () => {
    const productsFromServer = await fetchProducts()
    setProducts(productsFromServer)
  }
  getProducts()
}, [])

//fetch products
const fetchProducts = async()=>{
  const res = await fetch('http://localhost:5000/products')
  const data = await res.json()
  console.log(data)
return data
  
}



//Add Users
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers:{
     'Content-type': 'application/json'
    },
      body:JSON.stringify(task),
})

  const data =await res.json()

  setTasks ([...tasks, data])
}


//Delete Users
const deleteTask = async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method:'DELETE',

  })
  console.log('Delete is working', id)
  setTasks(tasks.filter((task)=>task.id !==id))
}

  return (
    <Router>
    <div className="container">
      <Header onAdd ={()=> setShowAddTask(!showAddTask)} />
    <Routes>
    <Route path='/' element = {
      <>
      {showAddTask && <AddTask onAdd ={addTask}/>}
      <h4>User Data to show:</h4>

      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete ={deleteTask}/>
      ):(
        'No Data to Show')}
      </>

    } />

    <Route path='/ProductManagement' element = {

    <>
      {showAddProduct && <AddTask onAdd ={addTask}/>}
      <h4>Product Data to show:</h4>

      {products.length > 0 ? (
      <Products products={products} onDelete ={deleteTask}/>
      ):(
        'No Data to Show')}
    </>

    } />
    
    </Routes>

    <Footer />
    </div>
    </Router>
  )
}

export default App;
