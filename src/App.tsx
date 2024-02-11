import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/MyNavbar"
import Background from "./components/backlgound/Background"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import AnimatedCursor from 'react-animated-cursor';


const App = () => {
  return (
    <Router>
      <AnimatedCursor
        innerSize={8}
        outerSize={10}
        color='0, 68, 147'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={5}
        outerStyle={{
          borderColor: '#004493', // Example border color
          borderWidth: '4px', // Example border width
          borderStyle: 'double', // Example border style
          borderRadius: '50%', // Example border radius
          padding:"10px",
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
          }
        ]}
      />
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
