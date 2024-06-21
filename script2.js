
// Проверяется именно переменная result, формируйте строку в ней
const count = 11;
const lines = 5;
let result = '';
function task() {
    for (let i = 0; i <= lines; i++) {
        for (let j = 0; j < count; j++) {
            if (j === lines - i) {
                for (let k = 0; k <= i*2;k++) {
                    result = result + '*';
                } 
                break;
            } else {
            result = result + ' ';
            }       
        }
    result = result + '\n'; 
    } 
console.log(result);
/* for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);  */
}
task();


// Место для первой задачи
function sayHello(name) {
    return(`Привет, ${name}`);
}


// Место для второй задачи
function returnNeighboringNumbers(number) {
    return([number-1, number, number+1]);
}


// Место для третьей задачи
function getMathResult(a, b) {
    let result = a;
    if (typeof b === 'number') {
    for (let i=2; i <= b; i++) {
        let c = a*i;
        result = result + '---' + c;
    }
    return result;
    } else {
        return result;
    }
}
