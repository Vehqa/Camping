import './styles/App.scss';
import './styles/Library.scss';
import { Routes, Route } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import Home from './Home';

function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
