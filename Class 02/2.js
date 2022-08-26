let listOfObjects = [
    {
        name:"pizza",
        price:6.00
    },
    {
        name:"salad",
        price:9.99
    },
    {
        name:"icecream",
        price:3.75
    }
]
const log = () => {
    let ul = document.getElementById("list")
    listOfObjects.forEach((food)=>{
        let li = document.createElement("li")
        li.innerText = `${food.name} costs $${food.price}`
        ul.appendChild(li)
    })

}
