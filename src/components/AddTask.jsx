import {useState} from 'react'


const AddTask = ({onAdd}) => {
const [text, setText] = useState('')
const [email, setEmail] = useState('')

const onSubmit = (e)=>{
    e.preventDefault()
    if(!text){
        alert('Please add a task')
        return
    }

    onAdd({text, email})

    setText('')
    setEmail('')
}
  return (
   <form className='add-form' onSubmit={onSubmit}>

       <div className='form-control'>
           <label>Name</label>
           <input type="text" placeholder="Add Name" value={text} 
           onChange={(e) => setText(e.target.value)}/>
       </div>

       <div className='form-control'>
           <label>Email</label>
           <input type="text" placeholder="Add Email" value={email} 
           onChange={(e) => setEmail(e.target.value)}/>
       </div>

       <input type="submit" value='ADD' className='btn btn-block'/>

   </form>
  )
}
 export default AddTask