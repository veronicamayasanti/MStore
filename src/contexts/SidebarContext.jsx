import { useState, createContext } from "react";

export const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <SidebarContext.Provider
      value={{ sidebarOpen, setSidebarOpen, handleCloseSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
