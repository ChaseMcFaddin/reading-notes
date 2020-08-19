## Read-10: JS Errors & Debugging

Order of execution

Execution context:
- Global context
- Function context
- Eval Context

Variable Scope:
- Global scope
- Function-level scope

**The Stack**

Javascript interpetor processes one line of code at a time. When a statement needs data from another function, it stacks the new function on top of the current task. 

If Javascript encounters an error, it throws an exception. 

**Error Objects**

Error objects can help you find where your mistakes are.

There are seven types of built-in errors objects
1. Error
2. SyntaxError
3. ReferenceError
4. TypeError
5. RangeError
6. URIError
7. EvalError

**Debugging**

1. Debug the script to fix errors
2. Handle errors gracefully

Start with:
1. Where is the problem
2. What exactly is the problem

> Use the console to help find errors

Write from the script, logging it into the console

Console methods
1. console.log
2. console.info() - Used for general info
3. console.warn() - used for warninga
4. console.error() - used to hold errors
5. console.group() - used to group messages together
6. console.groupEnd() - used to indicate the end of a group
7. console.table() - Lets you output a talbe
8. console.assert() - Test if condition is met

**Handling exceptions**

If you know you're going to receive an error, you can handle it with Try, Catch, Finally. 

1. Try
  - Try to execute the code
2. Catch
  - If there is an exception, run this code
3. Finally
  - This always get executed

**Conclusion**

- If you understand executino context and stacks, you will more easily find your error. 

[Back to the main page](../README.md)