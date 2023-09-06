import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Book';
import Collections from './pages/Collections';
import Overview from './pages/Overview';
import Explore from './pages/Explore';
import Info from './pages/Info';
import Item from './pages/Item';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/collections" element={<Collections />}>
            <Route path="" element={<Overview />} />
            <Route path="explore" element={<Explore />} />
            <Route path="about/:id" element={<Info />} />
          </Route>
          <Route path="/collections/object/:id" element={<Item />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
