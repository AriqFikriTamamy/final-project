import React from 'react';
import Tugas6 from './tugas6/tugas6';
import Tugas7 from './tugas7/tugas7';

function App() {
  return (
    <React.Fragment>
      <Tugas6/>
      <Tugas7 name="nama anda" batch="batch anda" email="email anda"/>
    </React.Fragment>
  );
}

export default App;
