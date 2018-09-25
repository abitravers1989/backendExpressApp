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

4. refactor to server and route.

4. Dependency injection awlix - fix readfile middleware so tests pass. 

5. Unit test middleware properly

6. Add mongoDB.

7. Add POST route. 

