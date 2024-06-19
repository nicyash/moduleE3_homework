function typeNum() {
    const array = [20, 5, "dfvds", 0, null, 3]

    let odd = 0;
    let even = 0;
    let zero = 0;
    let other = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            if (array[i] === 0) {
                zero += 1;
            } else if (array[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }          
        } else {
          other +=1;
        }
    }

    console.log(`Количество четных чисел: ${even}`)
    console.log(`Количество нечетных чисел: ${odd}`)
    console.log(`Количество нулей: ${zero}`)
    console.log(`Количество остаьных: ${other}`)
}

typeNum()