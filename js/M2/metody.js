// // Метрод join - склеює всі елементи масиву
// const sumaElementiv = family.join("¬+-");
// console.log(sumaElementiv);


// Завдання перебрати символи і поменяти регістр на протилежний 1:49
// const string = 'JavaScript';

// // Метод split варіант 1
// const letters = string.split('');
// let invertString ='';
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     if (letter === letter.toLowerCase()) {
//         // console.log(`${letter} це буква нижнього реєстру`);
//         invertString += letter.toUpperCase();

//     } else {
//         // console.log(`${letter} це буква верхнього реєстру`);
//         invertString += letter.toLowerCase();
//     }
// }
// console.log(invertString);


// // Метод split варіант 2
// const letters = string.split('');
// let invertString ='';
// console.log(letters);
// for (const letter of letters) {
//     console.log(letter);
//     letter === letter.toLowerCase()
//         ?
//         // console.log(`${letter} це буква нижнього реєстру`);
//         invertString += letter.toUpperCase()
//         :
//         // console.log(`${letter} це буква верхнього реєстру`);
//         invertString += letter.toLowerCase()
    
// }
// console.log(invertString);


// // Метод split варіант 3
// const letters = string.split('');
// let invertString ='';
// // console.log(letters);
// for (const letter of letters) {
   
//     invertString +=
//     letter === letter.toLowerCase()
        // ?
//         // console.log(`${letter} це буква нижнього реєстру`);
//          letter.toUpperCase()
//         :
//         // console.log(`${letter} це буква верхнього реєстру`);
//         letter.toLowerCase()
    
// }
// console.log(invertString);

//  Метод split Задача. Заголовок тексту перевести в нижній реєстр і з'єднати слова дифісами
// const zaholovok = `Даний заголовок містить 6 слів`;
// console.log(zaholovok);
// const normZaholovok = zaholovok.toLowerCase();
// console.log(normZaholovok);
// let words = normZaholovok.split('');
// console.log(words);
//  words = normZaholovok.split(' ');
// console.log(words);
// words = normZaholovok.split('  ');
// console.log(words);

console.log(Boolean(0));