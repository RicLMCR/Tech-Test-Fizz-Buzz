//Write a program that returns the numbers from N to ...

//function call with argument N as number
//increment counter that adds 1 to N in a for loop
//stop when number reaches M (second number)
//moduls to check for divisibles of 3 & 5 within if/else statement
//add each result to array
//return result

let fizzArray= [];

const fizzBuzz = (n,m)=>{
    for (let i=n; i<=m; i++){
        if (i % 3 ===0 & i % 5 ===0) {
            fizzArray.push("FizzBuzz");
        } else if (i % 3 === 0){
            fizzArray.push("Fizz");
        } else if (i % 5 ===0){
            fizzArray.push("Buzz");
        } else {
            fizzArray.push(i);
        }
    } 
    finalArray = fizzArray.toString();
    console.log("Final array is", finalArray);
    return(finalArray);
}

fizzBuzz(1, 5);