## Javascript Notes

- Javascript

- conditionals: IF/ When statements
- codeblock
- operators: assigning operators, strict equals, + or -
- data types
    - number: 2,4, 2020 (specifically whole numbers)
    - boolean: true or false
    - string: "42" "forty-two" "any content mostly" 
- variable: assigning variables


A script is a series of instructions that a computer can follow one-by-one.
A statement is an instruction and each one starts on a new line.
Statements can be organized in to code block

```
//insert js starting on Duckett JS &jQuery here - from pg 46

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!'
}
document.write('<h3>' + greeting + '</h3>');
```
Lines 22-24,27,29,31,33,35 are statements

Lines 26,28,30,32 determines what code will run
The curly braces indicate the state and end of code blocks

A script will have to temporarily store bits of information. It stores this in variables

Example: `width x height = area`

In this example, the script must remember 4 steps:

1. Remember the value for *width*
2. Remember the value for *height*
3. Multiply *width* by *height* to get the *area*
4. Communicate results to the user




















