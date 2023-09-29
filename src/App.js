
import './App.css';
import Header from './Header';
import Restaurant from './Restaurant';
import './Footer.js'
import Footer from './Footer.js';
import { Route, Routes } from 'react-router-dom';
import Singleview from './Singleview';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Restaurant></Restaurant>}/>
        <Route path='/singleview/:id' element={ <Singleview></Singleview>}/>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
