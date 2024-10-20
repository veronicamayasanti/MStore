import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Sidebar() {
  const { sidebarOpen, handleCloseSidebar } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  return (
    <div
      className={`${
        sidebarOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35%] xl:w-[15%] transition-all duration-300 z-20 px-4 lg:px-[35px]}`}
    >
      <div className="flex items-center justify-between py-4 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        {/* icons */}
        <div
          onClick={handleCloseSidebar}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className={20} />
        </div>
      </div>
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
