import React from 'react';
import '../App.css';

function Tugas7(props){
    return(
        <div className="App">
            <div className='title'>
                <h1>Data diri peserta kelas Reactjs</h1>
                <hr></hr>
                <ul>
                    <li className='font-bold'>Nama Lengkap: <span className='font-normal'>{props.name}</span></li>
                    <li className='font-bold'>Email: <span className='font-normal'>{props.email}</span></li>
                    <li className='font-bold'>Batch Pelatihan: <span className='font-normal'>{props.batch}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Tugas7;