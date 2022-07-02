import './App.css';
import Header from './components/Header/Header';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Order from './components/Order/Order';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/order' element={<Order></Order>}></Route>
      </Routes>
    </div>
  );
}

export default App;
