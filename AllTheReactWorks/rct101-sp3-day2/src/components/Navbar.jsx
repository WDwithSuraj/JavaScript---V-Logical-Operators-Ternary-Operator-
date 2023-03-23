import {Link} from 'react-router-dom'

export default function Navbar() {
    return <div style={{ display: 'flex', justifyContent: 'space-around', }}>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/login'>Login</Link>
      </div>
}