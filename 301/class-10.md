## Call Stack & Debugging

- A call stack is a mechanism for an interpreter to keep track of its place in a script using multiple functions
  1. When a script calls a function, the interpreter adds it to the call stack and starts the function
  2. Any functions called by that function are added to the stack furtherup and run as they are reached
  3. When the current function is finished, the interpreter takes it off the stack
  4. If the stack takes up too much space, you'll receive a stack overflow error message
    + A stack overflow occurs when a recursive function doesn't have an exit point
 
 Call stacks are critical to Asyncronous Javascript (which includes a callback function, event loop, and task queue).
 
 Call stacks use Last In, First Out (LIFO) data structure
 
 Key takeaways:
  - Call stacks are single threaded - can only do one thing at a time
  - Code execution is synchronous
  - A function invocation creates a stack frame the temporarily occupies memory
  - Uses LIFO data structure
  
 ### Debugging
 
 Types of errors
  - Reference errors
  - Syntax errors
  - Range errors
  - Type errors
  
Most debugging starts with a simple `console.log()`

Tools to avoid runtime errors
  - Quokka
  - ESlint
  
 







