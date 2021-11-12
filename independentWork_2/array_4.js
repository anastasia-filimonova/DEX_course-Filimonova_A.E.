Напишите функцию sumInput(), которая:

Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
Подсчитывает и возвращает сумму элементов массива.
P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

Решение (не работает): 

function sumInput() {
   
    let numbers = [];
    let number = +prompt('Введите число');
    let sum = 0;

    while (isFinite(number)) {
        numbers.push(number);
        
      if (number !== null && number !== "") {
          break;
        }        
      }
    
    for (let number of numbers) {
        sum += number;
      }
    
    return sum;
}

sumInput();
