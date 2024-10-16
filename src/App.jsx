// import react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import pages
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

//import components
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
