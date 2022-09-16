function redundantReturn(str){
    return function(bread) {
        return `bread is good ${bread} ${str}`;
    }
}

let redundantMessage = redundantReturn('words');

// console.log(redundantMessage('hello'));


