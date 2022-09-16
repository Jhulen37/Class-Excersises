function returnArray(numOne, numTwo){
    let counted = []
    if(numTwo > numOne){
        for (let i = numOne; i <= numTwo; i++){
            counted.push(i)
        }
    }
    if(numOne > numTwo){
        for (let i = numTwo; i <= numOne; i++){
            counted.push(i)
        }
        counted.reverse()
    }
    console.log(counted);

    
}
returnArray(12,2)
    