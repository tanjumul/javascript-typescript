/** pillars of OOPs
 * 
 * Abstraction - details will be hide , example : fetch
 * 
 * Encapsulation - wrapup all the mehtod and functions. Building a barriar which to access and which not to 
 * 
 * Inheritance : 
 * 
 * Polymorphism : console log is an example .
 */


const user = { 
  username : 'Tanjumul', 
  loginCount : 33, 
  signedIn : true ,

  getUserDetails : function(){ 
    console.log("Got user details!");
  }
}

console.log(user.username); 
console.log(user.getUserDetails()); 