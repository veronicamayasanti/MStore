import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../images/mstore.png";

function Header() {
  // header state
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsMenuOpen(true) : setIsMenuOpen(false);
    });
  })
  return (
    <header
      className={`${
        isMenuOpen ? "bg-white shadow-md py-4" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" /> 
            <p className="text-[20px] font-bold">MStore</p>
          </div>
        </Link>

        {/* cart */}
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag size={25} />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
