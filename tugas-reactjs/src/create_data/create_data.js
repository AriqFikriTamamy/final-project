import React, { useEffect } from 'react';
// import {setInput} from 'react';
import {useState} from 'react';
import axios from 'axios';
import '../App.css'

function CreateData() {
    const [setData] = useState(null);
    const [input, setInput] = useState(
        {
        name : "",
        course: "",
        score: "",
    }
)

const handleInput = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    if(name === 'name'){
        setInput({...input, name: value})
    }else if(name === 'course'){
        setInput({...input, course: value})
    }else if(name === 'score'){
        setInput({...input, score: value})
    }
}

const [fetchStatus, setFetchStatus] = useState(true);
useEffect(() => {
    if(fetchStatus === true){
        axios.get('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score')
        .then((res) => {
            setData([...res.data])
        }).catch((error) => {
        })

        setFetchStatus(false);
    }
}, [fetchStatus, setData, setFetchStatus])

const handleSubmit = (event) => {
    event.preventDefault();
    let {name, course, score} = input;
    axios.post('https://6678f9f40bd45250562081d9.mockapi.io/api/student-score', {name, course, score})
    .then((res) => {
        console.log(res);
    })

    setInput({
        name: "",
        course: "",
        score: "",
    })
}
    return (
        <>
            <div className='add-data'>
                <h1 className='add'>Tambah Data</h1>
                <form onSubmit={handleSubmit}>
                    <div className='name'>
                        <label>Nama</label>
                        <br></br>
                        <input onChange={handleInput} type='text' name='name' value={input.name}/>
                    </div>
                    <br></br>
                    <div className='course'>
                        <label>Mata Kuliah</label>
                        <br></br>
                        <input onChange={handleInput} type='text' name='course' value={input.course}/>
                    </div>
                    <div className='score'>
                        <label>Nilai</label>
                        <br></br>
                        <input onChange={handleInput} type='number' name='score' value={input.score}/>
                    </div>
                    <div className='submit'>
                        <label>Submit</label>
                        <br></br>
                        <input type={'submit'} id='submit'/>
                    </div>
                </form>
            </div>
        </>

    )
}

export default CreateData;