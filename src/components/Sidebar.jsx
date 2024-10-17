import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'

import CartItem from './CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import { useContext } from 'react'

function Sidebar() {
  const { sidebarOpen, handleCloseSidebar } = useContext(SidebarContext);
  return (
    
    <div>
      <h1>Sidebar</h1>
    </div>
  )
}

export default Sidebar
