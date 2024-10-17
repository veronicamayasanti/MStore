import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductProvider from './contexts/ProductContext.jsx'
import SidebarProvider from './contexts/SidebarContext.jsx'

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </SidebarProvider>
);
