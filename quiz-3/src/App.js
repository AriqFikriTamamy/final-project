// import logo from './logo.svg';
import './App.css';
import Navbar from  './component/navbar'
import Home from  './component/home'
import ManageData from  './component/manage_data/manageData'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/manage-data' element={<ManageData/>}/>
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
