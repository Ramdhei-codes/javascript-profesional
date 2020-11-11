console.log('Hello Typescript!')

function add(a: number, b: number) {
    return a + b
}

console.log(add(6, 8))

//Numeros
let age: number = 18
let ageOfMom: number = 38
let difference = ageOfMom - age


//strings
const nombre: string = "Ramdhei"

//boolean
const amILegal: boolean = true

//Arrays

const names: string[] = ["Paola", "Maria Paula", "Mateo", "Alejandro"]

//Podemos poner arrays de más de un tipo
const numbersAndStrings: Array<number | string> =  ["Hola", 76]

//enums
enum Color {
    Rojo = "Rojo",
    Azul = "Azul"
}


//Funciones

function add2(a: number, b: number):number {
    return a + b
}

function moneyBox(): (number) => number {
    let money:number = 0
    const moreMoney = (quantity:number) => {
        money += quantity
        console.log(`There is $${money} in the money box`)
        return money
    }
    return moreMoney
}

function fullName(firstName: string, lastName:string = 'López'):void{
    console.log(`${firstName} ${lastName}`)
}

fullName('Ramdhei')