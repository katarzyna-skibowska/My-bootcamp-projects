// 1.

function add (a, b){
    console.log (typeof(a), typeof(b)) 
        return a + b
    }
    
    let result = add
    console.log(add(1, 100))
    

    // 2.
    
    let magdaNowak = {
        name: "Magda",
        surname: "Nowak",
        hobby: ["taniec", "podróże", "sport"]
    }
    
    let adamKowalski = {
        name: "Adam",
        surname: "Kowalski",
        hobby: ["gitara", "sport", "jedzenie"]
    }
    
    let team = []
    
    team.push(
        magdaNowak,
        adamKowalski
    )
    
    function introduction1(obj){
    return(
        "Mam na imię " + obj.name + " " + obj.surname + "," +
        " moje hobby to " + obj.hobby.join(", ") + "."
    )
    }
    
    function introduction2(obj){
        return `Mam na imię ${obj.name} ${obj.surname},
        moje hobby to ${obj.hobby.join(", ")}.`
    }
    
    // console.log(introduction1(magdaNowak))
    // console.log(introduction1(adamKowalski))
    
    // console.log(introduction2(magdaNowak))
    // console.log(introduction2(adamKowalski))


   team.forEach(function introduction1 (element){
    console.log(element)
   })

   team.forEach(function introduction2 (element){
    console.log(element)
   })

//    tutaj coś mi nie wychodziło z wywołaniem za pomocą forEach funkcji introduction1 i introduction2


   // 3
    
   let arturJakiś = {
    pesel: 91919191919,
    adress: {street: "Okularowa", city: "Warszawa", zipCode: "01-066"},
    age: 20
}


let martaKot = {
    pesel: 35353535353,
    adress: {street: "Szeroka", city: "Poznań", zipCode: "10-121"},
    age: 32
}

let janWojniak = {
    pesel: 35353535353,
    adress: {street: "Oliwkowa", city: "Wrocław", zipCode: "09-477"},
    age: 39
}


function ageHigherThan (obj) {
    return obj.age > 30 ? true : false
}

console.log(ageHigherThan(arturJakiś))
console.log(ageHigherThan(martaKot))
console.log(ageHigherThan(janWojniak))


let team2 = []

team2.push(arturJakiś, martaKot, janWojniak)

let array2 = team2.filter(ageHigherThan)

console.table(array2)

    // 4
    
    let team3 = [arturJakiś, martaKot, janWojniak]

    const sumAge = team3.reduce((acc, person) => acc + person.age, 0)
    console.log(sumAge)


    // 5


    function adderA(y){
        return sum 
    }
    
    function sum (x, y){
        return x + y
    }
    
    
    const result1 = sum (1, 1)
    console.log(result1)
    
    // powyżej moje próby rozwiązania tego zadania ale nie udało mi się tego rozwiązać:(
    