import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/MyNavbar"
import Background from "./components/backlgound/Background"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"


const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Background />
      <div className='relative z-10 min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
