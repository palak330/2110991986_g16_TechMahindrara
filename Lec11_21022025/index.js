//call()

//1
	// const obj = { 
	// 	firstName: "Pretti", 
	// 	lastName: "raj", 
	// 	printName: function () { 
	// 		console.log(this.firstName + " " + this.lastName); 
	// 	} 
	// }; 
	// obj.printName(); 



   //2
	// const obj1 = { 
	// 	firstName: "riya", 
	// 	lastName: "sharma"
	// }; 
	// const obj2 = { 
	// 	firstName: "Sachin", 
	// 	lastName: "Tendulkar"
	// }; 
	// function printName() { 
	// 	console.log(this.firstName + " " + this.lastName); 
	// } 
	// printName.call(obj2); 



    //apply
   
	// const obj1 = { 
	// 	firstName: "pretti", 
	// 	lastName: "raj"
	// }; 
	// const obj2 = { 
	// 	firstName: "Sachin", 
	// 	lastName: "Tendulkar"
	// }; 
	// function printName() { 
	// 	console.log(this.firstName + " " + this.lastName); 
	// } 
	// printName.apply(obj2); 


//bind
// const person = {
//     firstName:"John",
//     lastName: "Doe",
//     fullName: function () {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const member = {
//     firstName:"Hege",
//     lastName: "Nilsen",
//   }
  
//   let fullName = person.fullName.bind(member);




// document.getElementById("grandparent").addEventListener("click",()=>{
//     console.log("This is grand Parent div");
// },true)

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("This is Parent div");
// },true)

// document.getElementById("child").addEventListener("click",()=>{
//     console.log("This is child div");
// },true)

   
document.getElementById("computer science").addEventListener("click",()=>{
    window.location.href="localhost/computer science"
});

