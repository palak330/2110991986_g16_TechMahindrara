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


async function tech(){
    console.log("hello");
}
const techData=tech();
  console.log(tech);
techData.then((res)=>{
    return res;
})
