import { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'

function Header() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  return (
    <header className="bg-sky-200">
      <h1>Header</h1>
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag size={20} />
      </div>
    </header>
  );
}

export default Header
