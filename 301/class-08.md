## SQL 

- SQL stands for Structured Query Language
 - A language deisgned to allow both technical and non-technical users the ability to query, mainupulate, and transform data from a relational database.
 - It also provides a safe and scalable storeage database for millions of websites and applications
 
SQL Command Classificiations
 - Data Definition Langauge (DDL)
  + CREATE TABLE, ALTER TABLE, DROP TABLE etc.
 - Data Manipulation Lanaguage (DML)
  + INSERT, UPDATE, DELETE etc.
 - Data Query Language (DQL)
  + SELECT
 - Data Control Language (DCL)
  + GRANT, REVOKE, etc
 - Transaction Control Commands
  + COMMIT, ROLLBACK etc

Best way to learn SQL is practice writing commands on a real relational database such as 
  - Ingres
  - SQLite
  
 ### Constraints
 
 - A constraint is a rule that you apply or abide by while doing SQL operations.
 
 Constraint Types
  - Primary Key
  - Unique Key
 
 Differences include that a primary key cannot take on a NULL value and Unique keys can apply to many fields.
 
 A query is a SQL statement used to extract data from your database and present it in a readable fashion. 
  1. First we are limited to our subset of data
  2. Order that subset using abbreviations
  3. Designate location
  4. Finally combine conditions

### Manipulating Data

  - Inserting NULL's to signify values in statements like INSERT
  - You can insert new data into a table using INSERT & SELECT
  - To modify the data use UPDATE
  - Delete data using DELETE
  
- The process of breaknig down data into logical tables and removing redundancies is called **Normalization**

Additional ways to put conditions on queries
  - Counting the records in a table
  - Column aliases
  - Order of execution of SELECT queries
  - Using the LIKE operator
  
If encountering conditions requires changing a field value you can use mathematical calculations on:
  - String values (concatenation)
  - Literal values

- An **aggregate function** is used to compute information from a table(s).
  - DISTINCT
  - COUNT (Used within DISTINCT
  - MIN
  - GROUP BY
  - HAVING

- A join operation allows you to retrieve data from multiple tables in a single SELECT query. 

### Sub-queries

- A subquery is a query written as part of bigger query. 

Types of subqueries:
  - Scalar
  - Table
