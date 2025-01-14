import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assests/logo3.png';
import {RiMenu3Line , RiCloseLine} from 'react-icons/ri';


import './header.css';

const Header = ({handleSport}) => {

  const [showNav, setShowNav] = useState(false);
  

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }

  

  const Menu = () => {
    return(
      <div className='navbar-items-desk'>
        <div className="nav-left">
              <p className='login'><Link to='/'>Home</Link></p>
              <p className='login'><Link to='/popular'>Popular</Link></p>
              <p className='login'><Link to='/profile'>Profile</Link></p>
              <p className='login'><a href='#gene'>Generate</a></p>
              <div className="dropdown show flex drop-div">
                <a className="btn-drop dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sports
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <p className="dropdown-item drb-itm" onClick={() => handleSport('football')}>Football</p>
                  <p className="dropdown-item drb-itm" onClick={() => handleSport('tennis')}>Tennis</p>
                  <p className="dropdown-item drb-itm" onClick={() => handleSport('basketball')}>Basketball</p>
                </div>
              </div>
      </div>

            <div className="nav-right">
               <p className='login'><Link to='/login'>login</Link></p>
              <p className='sign-up'><Link to='/signup'>Sign up</Link></p>
            </div>  
              
      </div>
    )
  }

  return (
    <div className='vedio-highlight-header'>
      <div className="vedio-highlight-navbar">

            <div className="logo">
              <Link to='/'><img src={logo} alt="" /></Link>
            </div>

            <Menu />

            <div className="navbar-menu">
                  {
                    showNav?<RiCloseLine color="#fff" size={27} onClick={() => toggleNavItems(false)}/>
                    :<RiMenu3Line color="#fff" size={27} onClick={() => toggleNavItems(true)}/>
                  }
                  { showNav && <div className="navbar-items">
                    
                  <p className='login' onClick={() => toggleNavItems(false)}><Link to='/'>Home</Link></p>
                  <p className='login' onClick={() => toggleNavItems(false)}><Link to='/popular'>Popular</Link></p>
                  <p className='login' onClick={() => toggleNavItems(false)}><Link to='/profile'>Profile</Link></p>
                  <p className='login' onClick={() => toggleNavItems(false)}>Generate</p>
                  {/* <div className="dropdown show flex drop-div">
                      <a className="btn-drop dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sports
                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <p className="dropdown-item drb-itm" onClick={() => handleSport('football')}>Football</p>
                        <p className="dropdown-item drb-itm" onClick={() => handleSport('tennis')}>Tennis</p>
                        <p className="dropdown-item drb-itm" onClick={() => handleSport('basketball')}>Basketball</p>
                      </div>
                  </div> */}
                  <p className='login' onClick={() => toggleNavItems(false)}><Link to='/login'>login</Link></p>
                  <p className='sign-up' onClick={() => toggleNavItems(false)}><Link to='/signup'>Sign up</Link></p>
                  
                
                </div>}
            </div>
      </div>
        
    </div>
  )
}

export default Header;
