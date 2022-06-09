import './App.css';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
