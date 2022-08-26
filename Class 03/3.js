function objectTaking(bread){
    const values = []
    const keys = Object.keys(bread).sort()
    for(let currentElement of keys){
        values.push(bread[currentElement])
    }
    console.log(keys,values)
}

objectTaking({ a: "Apple", b: "Microsoft", c: "Google" })