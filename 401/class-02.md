# Arrays, Loops, and Imports
 
  
## Java Imports
Java has many useful built in classes and methods. These packages are nicely organized in packages, and to use them, you have to import them into your project. Some things, like String and Interger, don't need to be imported because they reside in the java.lang package, which is basically auto-imported for the sake of convenience.  

## Java Loops
### For Loop
A for loop is a control sturcture that allows us to repeat certain operations by incrementing and evaluating a loop counter. Ex.
for (int i = 0; i < 6; i++) {
    System.out.println("Simple for loop: i = " + i);
}
### forEach()
Since Java 8, there is a dedicated forEach() method that loops through each element in an array.  
Ex.
List < String > names = new ArrayList<>();
names.add("Mark");
names.add("Maddux");
names.add("Tom");
names.add("Glavine");
names.add("John");
names.add("Smoltz");
 
names.forEach(name -> System.out.println(name));

### While Loop
The while loop is Java's most fundamental loop statement. It repeats a statement or a block of statements while its' controlling Boolean-expression is true. It can be exited early with a break.

### Do While Loop
A do while loop is like a while loop, except that the first condition evaluation happens after the first iteration of the loop. So it runs at least once.  




### Reading Links
[Java Imports](https://howtoprogramwithjava.com/java-imports/)<br>
[A Guide To Java Loops](https://www.baeldung.com/java-loops)<br>

