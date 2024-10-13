// import React from 'react';
// import { useState } from 'react';
import axios from 'axios';


export const handleDelete = (id, setFetchStatus) => {
    // let idData = parseInt(event.target.value);
    axios.delete(`https://quiz-api-rho.vercel.app/api/mobile-apps/${id}`).then((res) => {
            setFetchStatus(true)
        }).catch((error) => {
            console.error('Gagal hapus data', error)
        })
}