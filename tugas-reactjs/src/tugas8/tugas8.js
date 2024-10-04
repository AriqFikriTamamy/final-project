import React from 'react';
import {useState} from 'react';

const Tugas8 = () => {
    const [number, setNumber] = useState(1);

    const handleNumber = () => {
        setNumber(number + 1);
        
    }
    return(
        <div className='App'>
            <div className='title'>
                <p id='number'>{number}</p>
                <button className='btn' onClick={handleNumber}>Tambah</button>
                {number > 10 && <p>State count sudah lebih dari 10!</p>}
            </div>
        </div>
    )
}

export default Tugas8;