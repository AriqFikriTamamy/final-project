import React from 'react';
import Tugas6 from './tugas6/tugas6';
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
import Tugas10 from './tugas10/tugas10';
// import CreateData from './create_data/create_data';
import Tugas11 from './tugas11/tugas11';
// import {useState} from 'react';

// import {Link} from 'next/link';
// import {Navbar} from 'flowbite-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';

// function App() {
//   return (
//     <React.Fragment>
//       {/* <Tugas6/> */}
//       {/* <Tugas7 name="nama anda" batch="batch anda" email="email anda"/> */}
//       {/* <Tugas8/> */}
//       {/* <Tugas9/> */}
//       {/* <Tugas10/> */}
//       {/* <CreateData/> */}
//       <Tugas11/>
//     </React.Fragment>
//   );
// }

// Versi React Router
// Tugas 12

const App = () => {
  return(
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Tugas6/>}/>
          <Route path='/tugas7' element={<Tugas7 name="nama anda" batch="batch anda" email="email anda"/>}/>
          <Route path='/tugas8' element={<Tugas8/>}/>
          <Route path='/tugas9' element={<Tugas9/>}/>
          <Route path='/tugas10' element={<Tugas10/>}/>
          <Route path='/tugas11' element={<Tugas11/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;