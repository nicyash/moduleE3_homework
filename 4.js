function printNum(startNum, endNum) {
    let currentNum = startNum;

    let intervalId = setInterval(function() {
        console.log(currentNum);
        if (currentNum === endNum) {
            clearInterval(intervalId);
        }
        currentNum++;
    }, 1000);
}

printNum(1, 5);