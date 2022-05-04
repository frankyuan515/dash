import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Control Units</p>
        
        <button><Link to="/">Users Management</Link></button>
        <br />
        <button><Link to="/ProductManagement">Products Management</Link></button>
    </footer>
  )
}

export default Footer