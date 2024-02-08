//Sugeneruokite masyvą iš 10 elementų, kurio elementai būtų masyvai iš 5 elementų su reikšmėmis nuo 5 iki 25.

const randArray = [];
for (let i = 0; i < 10; i++) {
    randArray[i] = [];
    for (let j = 0; j < 5; j++) {
        randArray[i][j] = rand(5, 25);
    }
}

console.log(randArray);

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Suskaičiuokite kiek masyve yra elementų didesnių už 10;
let count = 0
for (let i = 0; i < randArray.length; i++) {
    for (let j = 0; j < randArray[i].length; j++) {
        if (randArray[i][j] > 10) count++;
    }
}

//Raskite didžiausio elemento reikšmę;

console.log("There are " + count + " elements larger tha 10")
max = 0;
for (let i = 0; i < randArray.length; i++) {
    if (Math.max(...randArray[i]) > max) max = Math.max(...randArray[i])
}
console.log("the max value of array is " + max);

//Suskaičiuokite kiekvieno antro lygio masyvų su vienodais indeksais sumas (t.y. suma reikšmių turinčių indeksą 0, 1 ir t.t.)
const columnSum = (array) => {
    const sumArray = [];
    for (let i = 0; i < array[i].length; i++) {
        let sum = 0;
        for (let j = 0; j < array.length; j++) {
            sum += array[j][i];
        }
        sumArray.push(sum);
    }
    return sumArray;
}
console.log("the array of sums of evry level element with same index")
console.log(columnSum);

//Visus antro lygio masyvus “pailginkite” iki 7 elementų  

for (let i = 0; i < randArray.length; i++) {
    while (randArray[i].length < 7) randArray[i].push(rand(5, 25));
}

console.log("Extended array")
console.log(randArray);

// Suskaičiuokite kiekvieno iš antro lygio masyvų elementų sumą atskirai ir sumas panaudokite kaip reikšmes sukuriant naują masyvą. T.y. pirma naujo masyvo reikšmė turi būti lygi mažesnio masyvo, turinčio indeksą 0 dideliame masyve, visų elementų sumai 

console.log("2 dimensional extended array column sum array")
console.log(columnSum(randArray));

//Sukurkite masyvą iš 10 elementų. Kiekvienas masyvo elementas turi būti masyvas su atsitiktiniu kiekiu nuo 2 iki 20 elementų. Elementų reikšmės atsitiktinai parinktos raidės iš intervalo A-Z. Išrūšiuokite antro lygio masyvus pagal abėcėlę (t.y. tuos kur su raidėm).

const letterArray = [];
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let i = 0; i < 10; i++) {
    letterArray[i] = [];
    let elements = rand(2, 20)
    for (let j = 0; j < elements; j++) {
        letterArray[i][j] = letters[rand(0, 25)];
    }
}

letterArray.forEach((element) => element.sort());

console.log(letterArray);


//Išrūšiuokite trečio uždavinio pirmo lygio masyvą taip, kad elementai kurių masyvai trumpiausi eitų pradžioje. Masyvai kurie turi bent vieną “K” raidę, visada būtų didžiojo masyvo visai pradžioje.

letterArray.sort((a, b) => a.length - b.length);
letterArray.forEach((element, index, array) => element.includes("K") && array.unshift(...array.splice(index,1)))


console.log(letterArray);