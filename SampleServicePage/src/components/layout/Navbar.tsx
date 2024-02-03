import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/booking">Book Now</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar