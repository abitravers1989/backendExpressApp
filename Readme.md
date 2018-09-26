Resources:

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

https://help.shopify.com/en/api/tutorials/building-node-app

Response methods to end/ close / return the callback:

https://expressjs.com/en/guide/routing.html#response-methods

1. Set up basic server.
1. Set up GET route - e-2-e test.

2. Add router for / email. GET. (should have done this later. Commented out. Need to add POST route which accepts email and tests).

2. Add middleware morgan- logging.

3. Add readFile middleware at /filepath with error handling. unit tested.

- got stuck with trying to pass in the fileName path. This needs to be fixed with dependency injection so it can be tested. 


3. Add error handling middleware.

DONT NEED ERROR HANDLING UNTIL POST. 

TO DO:

7. Add POST route.
8. Impliment error handling. 

9. Add mongo db 
10. Refactor GET and POST 

11. Fix tests - unit and e-2-e
12. Delete, GET by one, PUT routes.

4. refactor to server and route.

4. Dependency injection awlix - fix readfile middleware so tests pass. 

5. Unit test middleware properly

6. Add mongoDB.


27th Sept
Over-complicated this. Steps now to be:

New MVP:
1.	GET and POST. E-2-e test. If error handling middleware / validation middleware – unit tests.
2.	Mongo DB.
3.	Refactor GET and POST.
5. Dependency injection for middleware. 
6.	Add delete and Put 





change to: 26ths Wens 

1. POST end point with e-2-e test. 
Add swagger to validate input to end point so i know when doing front end app.


 

