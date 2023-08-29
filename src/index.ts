// 1. Heloo World task
function exercise1() {
    let greeting: string
    greeting = "Hello World"
    console.log(greeting)
}

exercise1()


// 2. loop which prints string to console n times
function exercise2() {
    let custom_string:string
    let custom_number:number

    custom_string = "Hello"
    custom_number = 3

    let index:number = 0
    while(index < 3){
        console.log(custom_string)
        index++
    }

    // // Type 'number' is not assignable to type 'string'
    // custom_string = custom_number
}
exercise2()

// 3. code that generates array of numbers - from n to m
function excercise3() {
    let n:number
    let m:number
    const result:number[] = []

    n = 1 
    m = 10

    const highest_number:number = (m >= n ? m : n)

    for(let index:number = 1; index <= highest_number; index++){
        result.push(index)
    }

    console.log("result: ", result)
}
excercise3()
