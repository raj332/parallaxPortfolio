import React,{useState} from 'react'
import "./navbar.scss"
import { Link } from 'react-scroll'

const Navbar = () => {
  const [isChecked, setisChecked] = useState(false)
  return (
    <div className='navbar'>
      <div id="logo">RAJ</div>
         <input type="checkbox" id="active" checked={isChecked} onClick={()=>{isChecked?setisChecked(false):setisChecked(true)}}/>
    <label htmlFor="active" className="menu-btn"><span></span></label>
    <label htmlFor="active" className="close"></label>
    <div className="wrapper">
      <ul>
<li ><Link to='home' onClick={()=>{setisChecked(false)}} spy={true} smooth={true} >HOME</Link></li>
<li><Link to='portfolio'  onClick={()=>{setisChecked(false)}} spy={true} smooth={true}>PORTFOLIO</Link></li>

<li><Link to="education"  onClick={()=>{setisChecked(false)}} spy={true} smooth={true}>Eduction</Link></li>
<li><Link to ="profile" onClick={()=>{setisChecked(false)}} spy={true} smooth={true}>ABOUT</Link></li>
<li><Link to ="contactcard" onClick={()=>{setisChecked(false)}} spy={true} smooth={true}>CONTACT</Link></li>
</ul>
</div>

    </div>
  )
}

export default Navbar