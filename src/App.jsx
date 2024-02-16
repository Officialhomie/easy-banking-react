import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/about' element={<About />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
