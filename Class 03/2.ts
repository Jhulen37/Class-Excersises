interface studentDetails  {
    name: string, 
    occupation: string, 
    age: number
    size: {inches:number, centimeters:number}[]
}

const studentDetails:studentDetails = {
    name: '69', 
    occupation: "Sales Advisor",
    age: 24,
    size: [{
        inches:2.5, 
        centimeters: 3
    }]
    
}

function infoReturn(student:studentDetails) {
    console.log(student)
}
infoReturn(studentDetails)