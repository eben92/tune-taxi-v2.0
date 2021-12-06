import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsChatRightQuote } from "react-icons/bs";
import "./nav.css";

// Make the search page if it works with
// make the redirect as a logout option

const NavIcons = () => {
  return (
    <div className='navbar-container flex justify-around rounded-lg p-3 bg-gray-300 text-dark'>
      <Link to={`/home`} className='nav-hover'>
        <AiOutlineHome className='icon-size' />
        <p className='text-size mt-2'>Home</p>
      </Link>
      <Link to='/convo' className='nav-hover'>
        <BsChatRightQuote className='icon-size' />
        <p className='text-size mt-2'>Convo</p>
      </Link>
    </div>
  );
};

export default NavIcons;
