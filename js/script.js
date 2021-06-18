//TODO Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
//TODO La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//TODO Usiamo i nuovi metodi degli array foreach o filter.

//* creo un array e lo riempio con 'numeriDaCreare' numeri random
const arrayNumeri = [];
let numeriDaCreare = parseInt(prompt('Inserisci un numero maggiore di 0'));
while(isNaN(numeriDaCreare) || numeriDaCreare <= 0){
    alert('ATTENZIONE! devi inserire solo un numero che sia maggiore di 0');
    numeriDaCreare = parseInt(prompt('Inserisci un numero'));
}

//* funzione per ricavare numeri random da 1 a 100
const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

while (arrayNumeri.length < numeriDaCreare){
    let numeroRandom = randomNum(1,100);
    if(!arrayNumeri.includes(numeroRandom)){
        arrayNumeri.push(numeroRandom);
    }
}
console.log(arrayNumeri);
console.log('*********');

//* imposto due valori di minimo e massimo
let minVal = parseInt(prompt('Inserisci un numero da 0 a ' + (arrayNumeri.length - 1)));
while(isNaN(minVal) || minVal < 0 || minVal >= arrayNumeri.length){
    alert('ATTENZIONE! devi inserire solo un numero che sia compreso tra 0 e ' + (arrayNumeri.length - 1));
    minVal = parseInt(prompt('Inserisci un numero da 0 a ' + (arrayNumeri.length - 1)));
}

let maxVal = parseInt(prompt('Inserisci un numero da ' + minVal + ' a ' + (arrayNumeri.length - 1)));
while(isNaN(maxVal) || maxVal < minVal || maxVal >= arrayNumeri.length){
    alert('ATTENZIONE! devi inserire solo un numero che sia compreso tra ' + minVal + ' e ' + (arrayNumeri.length - 1));
    maxVal = parseInt(prompt('Inserisci un numero da ' + minVal + ' a ' + (arrayNumeri.length - 1)));
}


//* soluzione con forEach
const forEachMethod = (arrayIn,a,b) => {
    let arrayFiltered = [];
    arrayIn.forEach((element,index) => {
        if(index >= a && index <= b){
            arrayFiltered.push(element);
        }
    });
    return arrayFiltered;
};
console.log('Soluzione fatta con forEach');
console.log(forEachMethod(arrayNumeri,minVal,maxVal));


//* soluzione con filter
const filterMethod = (arrayIn,a,b) => {
    return arrayIn.filter((element,index) => index >= a && index <= b);
};
console.log('Soluzione fatta con filter');
console.log(filterMethod(arrayNumeri,minVal,maxVal));