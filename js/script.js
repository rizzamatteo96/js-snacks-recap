//TODO Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//TODO La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//TODO Usiamo i nuovi metodi degli array foreach o filter.


const arrayNumeri = [];
const numeriDaCreare = 10;
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

while (arrayNumeri.length < numeriDaCreare){
    arrayNumeri.push(randomNum(1,100));
}

console.log(arrayNumeri);


