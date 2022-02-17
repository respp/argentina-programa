import React, {useState, useEffect} from 'react';
import './App.css';
import Load from './components/load/Load';
import Cover from './components/cover/Cover';
import Nav from './components/navbar/Navbar';
import About from './components/about/About';
import Slider from './components/slider/Slider';
import Info from "./components/info/Info";
import Footer from './components/footer/Footer'

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      {/* <Load /> */}
      <Nav isScrolling={scrollHeight}/>
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
