## To Build

1	Simple CRUD node app. Which gets, adds, updates and deletes things from a database. Provides relevant (get, post etc) endpoints.

2	Add Dependency Injection (awlix)

3	Unit test 

4	Integrattion Test 

5	Add Swagger 

6	Add docker 

7	TDD adding filtering of the things in a database. Try to use sorting algorithm

8	Promisify some code / mongo connection etc?

9	Deploy 
	

## ENVS

````export USER_NAME=value````
````export PASSWORD=value````

## To Run
````nodemon server.js````

## Check Local database
````show dbs````
````show collections````
````db.users.insert({name: "ss", email:"test@test")````


## Deployment
https://www.digitalocean.com/community/tutorials/how-to-connect-node-js-to-a-mongodb-database-on-a-vps


## Structure 

Server.js file which does start and stop
Mongo connection file which does the start and stop of that.
Index.js file which controls the starting and stopping of them both. 

store.js is db in meerkat 

brings up a server then asigns it to memory then RETURNS it.
Key to return it so can communicate with it.
