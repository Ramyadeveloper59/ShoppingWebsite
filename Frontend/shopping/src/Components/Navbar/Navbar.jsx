// import logo from '../Assets/logo.png'
import logo from '../Assets/lo.png'
import '../Navbar/Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown_icon from '../Assets/dropdown_icon.png'

const Navbar = () => {

  // Navbar 
  const [navbarMenu, setNavbarMenu] = useState("shop")
  console.log(navbarMenu);

  // Cart Count Value
  const {cartCountValue} = useContext(ShopContext);

  // Toggle Button
  const menuRef = useRef();

  const toggleButton = (event)=>{
    menuRef.current.classList.toggle('nav-menu-visible')
    event.target.classList.toggle('open')
  }

  return (
    // NavBar 
    <div className='navbar'>
      <div className="navbar-logo">
        {/* Website logo */}
        <img src={logo} alt="Logo" className='w-[3rem] h-[3rem] max-[800px]:w-[5rem] max-[800px]:h-[3rem]'/>
        <p className='max-[800px]:text-[10px]'>SHOPPY</p>
      </div>
      {/* NavBar Menu */}
      {/* Toggle  button */}
      <img className='nav-dropdown' onClick={toggleButton} src={nav_dropdown_icon} alt="Drop Down Icon" />
      <ul ref={menuRef} className='navbar-menu'>
        <li onClick={() => { setNavbarMenu("shop") }}><Link to='/'>Shop</Link>{navbarMenu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setNavbarMenu("kids") }}><Link to='/kids'>Kids</Link>{navbarMenu === "kids" ? <hr /> : <></>}</li>
        <li onClick={() => { setNavbarMenu("mens") }}><Link to='/mens'>Men</Link>{navbarMenu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setNavbarMenu("womens") }}><Link to='/womens'>Women</Link>{navbarMenu === "womens" ? <hr /> : <></>}</li>
      </ul>
      <div className='navbar-login-cart'>
        {/* Login Button */}
        <Link to='/login'><button>Login</button></Link>
        {/* Cart Logo */}
        <Link to='/cart'><img src={cart_icon} alt="Cart Icon Logo" /></Link>
        {/* Data Count in Cart */}
        <div className='navbar-cart-count'>{cartCountValue()}</div>
      </div>
    </div>
  )
}

export default Navbar
