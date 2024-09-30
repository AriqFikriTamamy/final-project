// Soal 1
function cetakFunction() {
    let nama = 'Ariq';
    return `Hallo Nama saya ${nama}`
}

console.log(cetakFunction());

// Soal 2
function myFunction() {
    return angka1 + angka2;
}

let angka1 = 20;
let angka2 = 7;
let output = myFunction(angka1, angka2);
console.log(output);

// Soal 3
const Hello = () => {
    return 'Hello';
}

console.log(Hello());

// Soal 4
let obj = {
    nama: 'john',
    umur: 22,
    bahasa: 'Indonesia'
}

console.log(obj.bahasa);

// Soal 5
let arrayDaftarPeserta = ['John Doe', 'laki-laki', 'baca buku', 1992];
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenis_kelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahun_lahir: arrayDaftarPeserta[3],

};
console.log(objDaftarPeserta);

// Soal 6
let fruit = [{
    nama: 'Nanas',
    warna: 'Kuning',
    adaBijinya: false,
    harga: 9000
}, {
    nama: 'Jeruk',
    warna: 'Oranye',
    adaBijinya: true,
    harga: 5000
}, {
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    adaBijinya: true,
    harga: 10000
}, {
    nama: 'Pisang',
    warna: 'Kuning',
    adaBijinya: false,
    harga: 5000
}];

const noSeed = fruit.filter((item) => {
    return item.adaBijinya != true
})

console.log(noSeed);

// Soal 7
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
}
// kode diatas ini jangan di rubah atau di hapus sama sekali



/* 
Tulis kode jawaban destructuring di sini 
*/

const name = phone.name;
const brand = phone.brand;
const year = phone.year;


// kode di bawah ini jangan dirubah atau dihapus
console.log(name, brand, year);

// Soal 8
let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172
}

let objOutput = {}

// kode diatas ini jangan di rubah atau di hapus sama sekali

/* 
    Tulis kode jawabannya di sini 
*/
objOutput = {
    ...dataBukuTambahan,
    ...buku
}

// kode di bawah ini jangan dirubah atau dihapus
console.log(objOutput);

// Soal 9
let mobil = {

    merk: "bmw",

    color: "red",

    year: 2002

}



const functionObject = (param) => {

    return param

}

console.log(functionObject(mobil))