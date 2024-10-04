import React from 'react';
import Tugas6 from './tugas6/tugas6';
import Tugas7 from './tugas7/tugas7';
import Tugas8 from './tugas8/tugas8';
import Tugas9 from './tugas9/tugas9';
// import {useState} from 'react';

// import {Link} from 'next/link';
// import {Navbar} from 'flowbite-react';

function App() {
  return (
    <React.Fragment>
      <Tugas6/>
      <Tugas7 name="nama anda" batch="batch anda" email="email anda"/>
      <Tugas8/>
      <Tugas9/>
    </React.Fragment>
  );
}

// const App = () => {
//   const [name, setName] = useState('John');

//   const handleName = () => {
//     setName('Doe');
//   }

//   return(
//     <div className='card'>
//       <h1>Testing</h1>
//       <button onClick={handleName}>{name}</button>
//     </div>
//   )
// }

export default App;