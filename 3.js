function getFunc(num1) {			
    return function(num2) {  //возвращаем функцию
        return num1 + num2
    }
};

const sumFunc = getFunc(5); 		//задаем значение num1 и записываем в sumFunc функцию

const sumResult = sumFunc(1);		//задаем значение num2 и получаем сумму num1 + num2

console.log(sumResult);