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
                <button className='btn rounded' onClick={handleNumber}>Tambah</button>
                {number > 10 && <span>State count sudah lebih dari 10!</span>}
            </div>
        </div>
    )
}

export default Tugas8;