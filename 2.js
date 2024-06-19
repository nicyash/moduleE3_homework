function primeNum(num) {
    let result;
    
    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                result = `${num} - не является простым числом`;
                return result;
            }
        }
        result = `${num} - простое число`;
    } else if (num > 1000) {
        result = 'Данные неверны';
    }
    return result;
}

console.log(primeNum(1001))