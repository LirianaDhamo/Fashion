import { Link, useNavigate } from "react-router-dom";
import mylogo from "../images/mylogo.png";
import { FaRegHeart, FaUser, FaBars } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md p-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between space-x-2 sm:space-x-4">
        
        {/* Left: Logo + Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link to="/" className="flex-shrink-0">
            <img src={mylogo} alt="logo" className="h-8 md:h-12" />
          </Link>

          {/* Show only on mobile */}
          <button
            onClick={() => navigate("/category")}
            className="text-xl md:hidden"
            title="Go to Categories"
          >
            <FaBars />
          </button>
        </div>

        {/* Middle: Search */}
        <div className="flex flex-grow justify-center items-center px-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-[130px] sm:max-w-[180px] md:max-w-md px-2 py-1 border border-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-black text-sm"
          />
          <button className="px-2 py-1 border border-black rounded-r-md hover:bg-[beige] hover:text-black transition text-sm">
            Search
          </button>
        </div>

        {/* Right: Icons (now show on all screen sizes) */}
        <div className="flex items-center space-x-2 sm:space-x-3 text-xl md:text-2xl text-gray-700">
          <Link to="/shoping-card" className="hover:text-black transition">
            <HiOutlineShoppingBag />
          </Link>
          <Link to="/favorites" className="hover:text-black transition">
            <FaRegHeart />
          </Link>
          <Link to="/profile" className="hover:text-black transition">
            <FaUser />
          </Link>
        </div>
      </div>
    </nav>
  );
}