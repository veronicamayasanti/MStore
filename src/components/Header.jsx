import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../images/mstore.png";

function Header() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  return (
    <header className="bg-sky-200">
      <div className="">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img src={Logo} alt="" />
          </div>
        </Link>

        {/* cart */}
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="cursor-pointer flex relative max-w-[50px]"
        >
          <BsBag size="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center ">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
