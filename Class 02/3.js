function arrayOfMultiples(num,length) {
    let array = []
    let originalNum = num
    for(let i = 0;i<length;i++){
        array.push(num)
        num += originalNum
    }
    return array
}
console.log(arrayOfMultiples(12,10))