const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Werlin, Wirving' ,'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Werlin, Wirving' ,
    'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
    'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
    'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton',
    'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose',
    'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert',
    'Blair, Tony', 'Blake, William'];




// const invSortSurname = people.sort(function(first, second) {
//     const firstSurname = first.split(' , ')[0];
//     const secondSurname = second.split(' , ')[0];
//     if(firstSurname > secondSurname) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// console.log(invSortSurname);


//const transport = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

//
// Вивести масив винахідників які народились в 1500-х роках.
//     Вивести масив тільки імен винахідників які народились в 1800-х роках
// Вивести масив з імен та прізвищ винахідників (['Albert Einstein', ... ])
// Відсортувати винахідників за кількістю прожитих років
// Відсортувати людей але тільки за прізвищем
// Перевірити чи є хоча б один винахідник народжений в 1878, якщо так то функція повертає true якщо ні то false
// * Знайдіть суму років які прожили всі винахідники разом
// * Знайти суму кожного типу транспорту, які є в масиві



// //Task1
// // Вивести масив винахідників які народились в 1500-х роках.
// console.log(inventors);
//
// console.log(inventors.filter(function (elem) {
//     return (elem.year > 1499 && elem.year < 1600);
// }));
//
//
// //Task 2
// // Вивести масив тільки імен винахідників які народились в 1800-х роках
// let k = inventors.filter(function (el) {
//     return (el.year > 1799 && el.year < 1900);
// });
//
//
// console.log(k.map(function (elem) {
//     return elem.first;
// }));

//Task 3
// // Вивести масив з імен та прізвищ винахідників (['Albert Einstein', ... ])
// console.log(inventors.map(function (elem) {
//     return elem.first + " "+ elem.last;
// }));


// Task4
// Відсортувати винахідників за кількістю прожитих років
// console.log(inventors.sort(function (a,b) {
//     let k = a.passed - a.year;
//     let j = b.passed - b.year;
//     return k - j;
// }));


//Task5
// Відсортувати людей але тільки за прізвищем
// console.log(inventors.sort(function (a, b) {
//     return  a.last.localeCompare(b.last);
// }));


//Task6
// Перевірити чи є хоча б один винахідник народжений в 1878, якщо так то функція повертає true якщо ні то false


// Правильне рішення !
// let k = inventors.some(function (el) {
//     return (el.year === 1878);
// });
//
// console.log(k);



// let k = inventors.map(function (el) {
//     return el.year;
// });
// console.log(k);
//
// console.log(k.includes(1879))
//
// ;




//Task 7

// Знайдіть суму років які прожили всі винахідники разом
//
// let k = inventors.map(function (el) {
//     return el.passed - el.year;
// });
//
// console.log(k);
//
//
// console.log(k.reduce(function (sum, current) {
//     return sum + current;
// }, 0));
//
//
//
// let totalYears = inventors.reduce(function (total,current) {
//     return total + (current.passed- current.year);
// },0);
//
// console.log(totalYears);

//Task 8
// * Знайти суму кожного типу транспорту, які є в масиві
//const transport = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];


// solution @DidOstap
// let t =transport.reduce(function (obj,item) {
//
//    if (!obj[item]){
//        obj[item] = 1;
//        return obj;
//    }
//    else {
//        obj[item]++;
//        return obj;
//    }
// },{});
// console.log(t);




//my solution

// do {
//     let sortingTransport = transport.sort(function (a, b) {
//         return a.localeCompare(b);
//     });
//
//
//     let transportCount = sortingTransport.reduce(function (total, current, index, array) {
//         if (current === array[0]) {
//             total++;
//         }
//         return total;
//     }, 0);
//     transportCount > 1 ? console.log(`There are ${transportCount} ${sortingTransport[0]}'s`) : console.log(`There are ${transportCount} ${sortingTransport[0]}`);
//
//     // console.log(sortingTransport);
//
//     let newArr = sortingTransport.splice(0, transportCount);
//
//
//     // console.log(sortingTransport);
// }while (transport.length >0);
