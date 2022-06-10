import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar';
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<PortfolioContainer></PortfolioContainer>}></Route>
        <Route path='/home' element={<PortfolioContainer></PortfolioContainer>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
      </Routes>

    </div>
  );
}

export default App;
