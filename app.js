
// let btn=document.querySelector("button");
// let ul=document.querySelector("ul");
// let inp=document.querySelector("input");

// btn.addEventListener("click",function () {
//      let item=document.createElement("li");
//      ul.appendChild(item);
//      item.innerText=inp.value;
//      inp.value=" ";
     
// })



// let inp1=document.querySelector("#a");
// let inp2=document.querySelector("#b");
// let btn=document.querySelector("button");
// let p=document.querySelector("p")

// btn.addEventListener("click" ,function() {
//      let sum = parseInt(inp1.value) + parseInt(inp2.value);
//      //console.log("Sum:", sum);
//      p.innerText=sum;
    

// });

// let ul=document.querySelector("ul");
//  console.log(ul);
// let div=document.querySelector("ul");
// console.log(ul.parentNode);
// console.log(div.document);

// let html=document.documentElement;
// console.log(html.parentElement);
// console.log(html.children);


// let btn=document.querySelector(".one");
// let txt=document.querySelector(".text");
// function go() {
//     if(txt.classList.contains(".one")) {
//         txt.classList.remove(".one")
//     } else {
//         txt.classList.add(".one")
//     }
// };

// btn.addEventListener("click",go);


//call stack
// function hello () {
//     console.log("hello purush");
// };

// function demo () {
//     hello ();
//     console.log("i love india");
// }

// demo();


//visualizing call stack

// function one () {
//     return 1;
// };
// function two () {
//     return one()+one();
// };
// function three() {
//     let ans= two() + one();
//     console.log(ans);
// }


// function settoDb(data,success,failure) {
//     let internet=Math.floor(Math.random()*10)+1;
//     if(internet>4) {
//         success();
//     }
//     else {
//         failure();
//     }
    
// };
// settoDb("purushottam kshirsagar",
// ()=> {
//     console.log(" success:data is saved!");
//     settoDb("fafsf",() => {
//         console.log("success2:data2 was saved");
//     }, () => {
//         console.log("failure2:data2 is not saved");

//     })
    
// },
// ()=> {
//     console.log("failure:error occurd.data is not saved");
// }
// );


// function settoDb (data) {

//     return new Promise((success, failure) => {
//         let intrspeed=Math.floor(Math.random()*10)+1;
//         if(intrspeed>4) {
//             success("Success:data saved!");
//         }
//         else {
//             failure("Failure:error occured!");
//         }
        
//     })

// };

// settoDb("Purushottam ")
// .then(() => {
//     console.log("data1 saved");
//     return settoDb("kshirsagar");
// })

// .then(()=> {
//     console.log("data2 saved");
//     return settoDb("hanuman");
// })
// .then( () => {
//     console.log("data3 saved");
// })
// .catch(() => {
//     console.log("promise rejected")
// })



//promises
// function vote (age) {

//     return new Promise((success, failure) => { 
       
//         if(age>=18) {
//             success("You can vote");
//         }
//         else {
//             failure("you can not vote");
//         }
//     })

// };



//create a zomato delevary order.if it get late then print failure and if it is on time then print success

// function zomato() {
//     let time=Math.floor(Math.random()*15)+1;
//     return new Promise((resolve, reject) => {
//         if(time<=12) {
//             resolve("Order complited");
//         }
//         else {
//             reject("Sorry! due to technical issue your order is postponed to 1pm.")
//         }
//     })
    
// };


// zomato()
// .then(() => {
//     console.log("promise complited");
// })
// .catch(() => {
//     console.log("promise not complited");
// })


// async function greet() {
    
//    return "hello";
//     throw ",404 page is not found";
    
// };


// greet().then((result) => {
//     console.log("missin passed successfully!",result);
// })
// .catch((err) => {
//     console.log("The error",err);
// })

// function getnum () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let ran=Math.floor(Math.random()*10)+1;
//         console.log(ran);
//         resolve();
//         }, 1000);
//     });
// }

// async function demo () {
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//     getnum();
// }

// let json='{"fact":"Cats make about 100 different sounds. Dogs make only about 10.","length":62}';
// console.log(json)
// ;


// let json2=JSON.parse(json);
// console.log(json2);


// let url="https://catfact.ninja/fact";
// fetch(url);

// .then((res) =>   {
//     console.log(res);
// })
// .catch((err) =>  {
//     console.log("ERROR- ",err);
// });

// let url='https://dog.ceo/api/breeds/image/random';
// fetch(url);

//   .then ((res)=> {
//      console.log(res);
//    })
//   .catch ((err) => {
//      console.log("ERR-" ,err);
//  })


//difining objects

// var hash=new Object();
// hash.kim="66";
// hash.rohit="11";
// hash.rahul="68";
// console.log(hash);
// let object={
//     name:"purushottam",
//     age:20,
//     education:"Computer Engineering",
// }

// for(var aName in object) {
//     window.alert(aName+" is a property of object.");
// }



// var o1=new Object();
// o1.data="hello";
// var o2=o1;
// o2.data+=" world!";
// window.alert(o1.data);


//check if an array includes a certain value?


// let arr=[1,2,3,4,5];
// let a=1;
// for(let i=0;i<=arr.length;i++) {
//     if (arr[i]==a) {
//         console.log(a +"is present in arr.");
//     }
// }

// if (arr[i]!=a) {
//   console.log(a +"is not present in arr.");  
// }














let arr = [1, 2, 3, 4, 5];
let a = 35;
let found = false; // Flag to track if 'a' is found

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == a) {
        console.log(a + " is present in arr.");
        found = true;
        break; // Exit the loop once 'a' is found
    }
}

if (!found) {
    console.log(a + " is not present in arr.");
}


 


























