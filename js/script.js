//TODO Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//TODO La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//TODO Usiamo i nuovi metodi degli array foreach o filter.

//* creo un array e lo riempio con 'numeriDaCreare' numeri random
const arrayNumeri = [];
const numeriDaCreare = 10;
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

while (arrayNumeri.length < numeriDaCreare){
    arrayNumeri.push(randomNum(1,100));
}

console.log(arrayNumeri);
console.log('*********');


const minVal = 1;
const maxVal = 5;

let arrayFiltered = [];

//* soluzione con forEach
arrayNumeri.forEach((element,index) => {
    if(index >= minVal && index <= maxVal){
        arrayFiltered.push(element);
    }
});
console.log('Soluzione fatta con forEach');
console.log(arrayFiltered);


//* soluzione con filter
arrayFiltered = arrayNumeri.filter((element,index) => index >= minVal && index <= maxVal);
console.log('Soluzione fatta con filter');
console.log(arrayFiltered);