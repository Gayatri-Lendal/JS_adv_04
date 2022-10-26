
//arrow function from w3school
console.log('Hello World!');

function sum(a, b) {
  return a + b;
}

let sum2 = (c, d) => c + d;

console.log(sum2(9, 2));

// function isPositive(number){
//   return number >= 0;
// }

// console.log(isPositive(6));

let isPositive2 = (number) => number >= 0;
console.log(isPositive2(-9));

// function randomNumber (){
//   return Math.random;
// }
// console.log(randomNumber());

let randomNumber2 = () => Math.random;
console.log(randomNumber2());

document.addEventListener('click', function() {
  console.log('Click')
})

document.addEventListener('click', () => console.log('Click'));

//promise
//Syntax -can also use arrow functions
//let p = new Promise(function (){});
//resolve and reject are pre-defined functions which we call 
//example of promise 

// //this is just a promise definition

// let p = new Promise((resolve, reject) => {
//   let a = 2 + 2;
//   if( a===3 ){
//     //promise gets fulfilled
//     resolve("Promise gets fulfuilled");
//   }else{
//     //promise doesn't gets fulfilled
//     reject("promise gets unfulfilled");
//   }
// });

let pr = new Promise((resolve,reject)=>{
  let b = 5-2;
  if(b===3){
    resolve("Promise gets fulfilled:)");
  }else{
    reject("Promise gets unfulfilled:(");
  }
});
 
 //then & catch are blocks
//then & catch are used to execute what we need to do when promise is fulfilled or unfulfilled accordingly.
pr.then((message)=>{
  console.log("This is then of promise: ", message);
}).catch((message)=>{
  console.log("This is catch of promise: ",message);
})
//message parameter of then block ke function ka ->
//comes from promise def when successhappens we will pass that parameter and call it
//vice-versa for catch block function 

// API
// frontend code
// response = order_api_call() (
// success : "Yahoo, your order got placed",
// failure : "You are not logged in",
// failure : "Transaction failed, insufficient balance in
// your account"
// )
// // server se client ke pass
// response.body = {
// status : "success / failure",
// status_code : 200 / 404
// message : "You are not logged in"
// }
// // backend code
// // api_definition
// // send request
// // wait for response
// waiting for response = api_call() // request karna server se
// ki mujhe response de
// // success (server up, logic got successfully executed) //
// response mila
// // promise gets fulfilled
// // fail (server down, error hai code mai) // mujhe response
// nahi milega
// // promise gets failed
// // api_call is a promise
// // why api_call is a promise
// // then catch
// // get order status
// order_api_call().then(
// // promise fulfill
// status_code == 200
// // order success
// status_code == 500
// // order fail
// // response aayega
// ).catch((message) => {
// // promise unfulfill
// UI show "unable to req"
// })

// api syntax
//fetch is a inbuild keyword used to call api
const result = fetch('https://reqres.in/api/users');
console.log(result);
fetch('https://reqres.in/api/users').then((response) => {
  console.log(response);
})
//.then((response))