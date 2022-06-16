// var regdUsers = JSON.parse(localStorage.getItem("userData"));
// console.log(regdUsers)

// document.getElementById("form").addEventListener("submit", login);


// function login(event) {
//     event.preventDefault();

//     user = document.querySelector("#username").value;
//     pass = document.querySelector("#password").value;

//     var flag = 0;
//     for (var i = 0; i < regdUsers.length; i++) {

//         if (regdUsers[i].email == user && regdUsers[i].password == pass) {
//             flag = 1;
//         }
//     }
//     if (flag == 1) {
//         window.location.href = "index.html";
//         alert("login successful");
//     }

//     else {
//         alert("login failed")
//     }
// }






//var userData = JSON.parse(localStorage.getItem("userData")) || [];

// document
//     .querySelector("#form")
//     .addEventListener("submit", myForm);


// function myForm(event) {
//     event.preventDefault();
//     var userObj = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value,
//     }
//     console.log(userObj)

//     userData.push(userObj);
//     localStorage.setItem("userData", JSON.stringify(userData));
//     window.location.href = "sigin.html";
// }


let sign_up = document.querySelector("#sign_up");
let sign_in = document.querySelector("#sign_in");
let signup_box = document.querySelector("#signup_box")
let login_box = document.querySelector("#login_box")
let parent_box = document.querySelector(".parent_box");
let cross_img = document.querySelector("#cross_img");


sign_up.addEventListener("click",function(){
   
   
    parent_box.style.display = "block";
    signup_box.style.display = "block";
    login_box.style.display = "none"
    
})
sign_in.addEventListener("click",function(){
   
   
    parent_box.style.display = "block";
    signup_box.style.display = "none";
    login_box.style.display = "block"
    
})
cross_img.addEventListener("click",function(){
   
   
    parent_box.style.display = "none";
    signup_box.style.display = "none";
    login_box.style.display = "none"
    
})
// parent_box.addEventListener("mouseover",function(){
   
   
//     parent_box.style.display = "none";
//     signup_box.style.display = "none";
//     login_box.style.display = "none"
    
// })





var userData = JSON.parse(localStorage.getItem("userData")) || [];

 document.querySelector("#form_1") .addEventListener("submit", sign_up_Form);


 function sign_up_Form(event) {
     event.preventDefault();
    var userObj = {
        name: document.getElementById("name_1").value,
       email: document.getElementById("email_1").value,
        password: document.getElementById("password_1").value,
   }
     console.log(userObj)

    userData.push(userObj);
     localStorage.setItem("userData", JSON.stringify(userData));
     signup_box.style.display = "none";
     login_box.style.display = "block";

     
    //window.location.href = "sigin.html";
 }
//   let submit_1 = document.getElementById("submit_1");
//   submit_1.addEventListener("click",function(){
//       console.log("is this working");

//     document.querySelector("#signup_box").style.display = "none";
    
//     signup_box.style.display = "none";
//     login_box.style.display = "block";

//   }) 



document.querySelector("#form_2").addEventListener("submit", login_Form);


function login_Form(e){
    e.preventDefault()


    user = document.querySelector("#email_2").value;
    pass = document.querySelector("#password_2").value;
    

     var flag = 0;
    for (var i = 0; i < userData.length; i++) {

        if (userData[i].email == user && userData[i].password == pass) {
            flag = 1;
            break;
        }
   }
    if (flag == 1) {
        parent_box.style.display = "none";
       alert("login successful");
   }

    else {
        alert("invalid login crediantials")
    }


}




///




////////////
