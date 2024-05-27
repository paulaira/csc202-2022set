//console.log("Starting ES6 and above");
import log, {
     appName as am,
     dummyFunction as df,
     genericFunction as gf, genericFunction2 as gf2, genericFunction3 as gf3,
     multiplier, multiplier2,
     Person
} from './tools.js';

log("Starting ES6 and above with modularity");
log("Welcome! The application name is " + am + ". There is a function that returns " + df());
log(`Welcome! The application name is "${am}". 
There is a function that returns " ${df()}`);
log(gf());
log(gf2());
log(gf3());
let a = 2;
let b = 3;
let c = 10;
log(`Product of ${a} and ${b} is ${multiplier2(a, b, c)}`)
let person1 = new Person("Pius", "Onobhayedo", "Male", 1.7);
let person2 = new Person("Mary", "Joseph", "Female", undefined);
console.log(person1);
console.log(person2);


new Promise((resolve, reject) => {
     setTimeout(() => {
          resolve("Timeout is over"); //send out a success feedback with data using resolve
     }, 1000) //set timeout for 1000ms i.e. 1second. 
}).then((data) => {
     log(`${data}`);//This should output "Timeout is over"
}).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
     log(`${error}`);
});
/*Let us still maintain the last log statement so that we can illustrate better how the asynchronous call 
that returns after the timeout does not stop the main execution thread.*/
let user1 = new Person("myusername", "mypassword", "Pius", "Onobhayedo", "Male", undefined);
log(`The username of ${user1.firstName} is ${user1.username}`);

let url = 'https://jsonplaceholder.typicode.com/users/1'; //Get data for a user with id 1 
fetch(url)
     .then(response => response.json()) //convert data returned to json
     .then(data => log(`Data: Id = ${data.id}, Name = ${data.name}, Email = ${data.email}`)) //use the json data 
     .catch(error => log(`Error: ${error}`));
let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json()) 
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json()) 
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())
Promise.all([fetch1,fetch2,fetch3])//get the data for the three calls in an array. 
     .then((data)=>{
     })
