import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
        <Route path='/itemdetail/:detalles' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
