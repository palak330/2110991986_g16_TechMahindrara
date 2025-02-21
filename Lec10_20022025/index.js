//PROMISE API

// const myPromiseFromNetflix=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//          resolve("fetched data from netflix");
//          //reject("failed netflix")
//     },1000)
// });

// const  myPromiseFromtwitter=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//           resolve("fetched data from twitter");
//         //reject("failed twitter") //7000 sec ke baad chlega
//     },2000)  //7000
// });


// const myPromiseFromGithub=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//          resolve("fetched data from github");
//         //reject("failed github")
//     },3000)
// });

// const myPromiseFromHotstar=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//          resolve("fetched data from Hotstar");
//         //reject("failed hotstar")
//     },4000)
// });


//  const dataFromAll=Promise.all([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromtwitter])

// //  const dataFromAll=Promise.allSettled([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromtwitter])
// // const dataFromAll=Promise.any([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromtwitter])
// // const dataFromAll=Promise.race([myPromiseFromGithub,myPromiseFromHotstar,myPromiseFromNetflix,myPromiseFromtwitter])
//  console.log(dataFromAll);






//asyn-wait


// const m=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("hdhjjd");
//     },4000)
// })

// console.log("hello class");
// function tech(){
//    const hj=m;
//    console.log(hj)
// }
// console.log("end");
// tech();






// async function tech(){
//     console.log("hello");
// }
// const techData=tech();
//   console.log(tech);
// techData.then((res)=>{
//     return res;
// })




//==============================================
// console.log("start");
// const project=new Promise(function(res,rej){
//     setTimeout(()=>{
//         res("submitted");
//     },5000)
// });
// console.log("class lunch");

// async function evaluation(){
//     console.log("attendance viva");
//     const projectfile=await project;
//      console.log(projectfile);
//     console.log("project file check");
// }

// evaluation();
// console.log("class end");




//========================================================
//question
// console.log("class start"); // Step 1: Print "class start"

// const project = new Promise(function (res, rej) {
//     setTimeout(() => {
//         res("writting file");
//     }, 1000); // Step 2: Resolve after 1 seconds
// });

// console.log("Attendance Marking"); // Step 3: Print "Attendance Marking"

// async function evaluation() {
//     const p = await project; // Waits 10 seconds
//     console.log(p); // Step 2: Print "writting file" after 10 sec

//     console.log("file check evaluation"); // Step 4: Print "file check evaluation" after 10 sec
// }

// evaluation(); // Start async function

// // Do not print "class end", instead print "end class"
// setTimeout(() => {
//     console.log("end class"); // Step 6: Print "end class" after 1 sec
// }, 1000);







async function fetchApi(){
    try{
    const data=await fetch("link likho");
    const mydata=await datajson();
    return mydata;
}
catch(err){
    console.log("err");
}
}

const finalData=fetchApi();

finalData.then((res)=>{
    console.log(res);
})

