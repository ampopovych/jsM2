// Конспект
// function multiply() {
  // Тіло функції
//   console.log("Це лог на момент виклику функції multiply");
// }

// 2. Виклики функції multiply
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply(); // 'Це лог на момент виклику функції multiply'
// multiply();

// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }
// multiply(5,3,2);
function multiply(x, y, z) {
  console.log("Код до return виконується звичайним чином");

  // Повертаємо результат виразу множення
  return x * y * z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
}

// Результат роботи функції можна зберегти у змінну
let result = multiply(2, 3, 5);
console.log(result);