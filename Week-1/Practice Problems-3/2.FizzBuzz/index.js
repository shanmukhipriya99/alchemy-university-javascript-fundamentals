function fizzBuzz(numbers) {
    numbers.map((item, index) => {
        if(item%3===0 && item%5===0) numbers[index] = "fizzbuzz"
        else if(item%3===0) numbers[index] = "fizz"
        else if(item%5===0) numbers[index] = "buzz"
        else numbers[index] = ""
    })
    return numbers.join("");
}

module.exports = fizzBuzz;