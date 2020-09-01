**Local Storage**

Persistent local storage is an advantage native client applications (NCA) have over web applications

If your NCA needs local storage it can embed a database, create your own file format or any number of solutions

Cookies have been historically used by web applications but have 3 downsides

1. Slowing down your web application
2. Sending data unencrypted
3. Limited to 4KB

What we really want

1. Lots of storage
2. On the client
3. Persists page refreshes
4. Isn't transmitted to the server

Historically advances such as Flash Storage or Google Gears have required a plug-in or have been browser specific.

Introducing **HTML5 Storage**

This is available in:
+ IE
+ Firefox
+ Safari
+ Chrome
+ Opera
+ iPhone
+ Android

HTML5 Storage is based on key value pairs. 
The information is stored as strings.
You can use `parseInt` and `parseFloat` to get different data types

You can use `setItem` to overwrite a named key and using `getItem` on a non-existent key will result in a *null*.

Tracking changes to the local storage will usually use 3 methods:
1. setItem()
2. removeItem()
3. clear()

Limitations of HTML5 are that the storage capactity is 5 MB.


[Back to the main page](../README.md)