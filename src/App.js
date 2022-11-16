import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import Provider from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <Provider>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryName' element={<ItemListContainer/>}/>
          <Route path='/itemdetail/:detalles' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Provider>  
    </BrowserRouter>
  );
}

export default App;
