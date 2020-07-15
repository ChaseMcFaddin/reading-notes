## Operators & Loops


- Loop - circulate over our code
- While - true - loop over code
- For - for a certain number of times
- Iterate - each time it loops
- Condition - think of conditional statements 
- Increment - increase by 1 or more
- Decrement - decrease by 1 or more

Preferred methods
`==` equal too
`!==` not true

Other methods
`===` - strict equal
`!===` - strict not equal
`>` - greater than
`<` - lesser than
`>=` - greater than or equal too
`<=` - lesser than or equal too

Comparison operators usually return a single true or false value. Whereas logical operators allow you to compare multiple results.

Loops check a condition. If the condition is true, the code block will run. Then the conditino will be checked again, if true, the code block will run a second time. And so on until the condition is false.

Three types of loops:
1. For
    - used to run a condition a certain amount of times (most used loop)
2. While
    - Runs the code block as long as the condition is true
3. Do While
    - Same as `while` but will run the code block once even if the condition is false

```
for (var i = 0; i < 10; i++){
    document.write(i);
}
```
`(in parantheses is the counter)`

### Breakdown of Counter

1. Initialization `var i = 0`
    - Here we create a varialbe and set it to 0
2. Condition `i < 10`
    - The loops should continue until it reaches the specified number
3. Update `i++`
    - Everytime the loop has run the statements it adds one to the counter


[Back to Main page](README.md)