import React from 'react';
import {useState} from 'react';

const Tugas8 = () => {
    const [number, setNumber] = useState(1);

    const handleNumber = () => {
        setNumber(number + 1);
        {if(number >= 10){
            return(
                <p>Lebih dari 10</p>
            )
        }}
    }
    return(
        <div className='App'>
            <div className='title'>
                <p id='number'>{number}</p>
                <button className='btn' onClick={handleNumber}>Tambah</button>
            </div>
        </div>
    )
}

export default Tugas8;