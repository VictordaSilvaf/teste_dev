import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';


function App() {
  return (
    <>
     <div className="App">
       <NavBar />
       <Home />
       <Products />
       <CategorySection />
       <Footer />
     </div>
    </>
  );
}

export default App;
