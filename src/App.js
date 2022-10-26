import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount';

const onAdd = (cantidad) => {
  console.log(`Agregaste ${cantidad} productos`)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <ItemListContainer saludo="Bienvenid@ a mi tienda!!!"/>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </div>
  );
}

export default App;
