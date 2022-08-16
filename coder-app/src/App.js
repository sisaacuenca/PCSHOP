import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/navBar/Navbar';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>        
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>      
          <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
     ); 
}

export default App;