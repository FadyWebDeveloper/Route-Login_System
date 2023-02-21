let singUpName = document.getElementById("singUpNam");
let singUpMail = document.getElementById("singUpMaill");
let singUpPass = document.getElementById("singUpPasss");
let singUpBtn = document.querySelector(".signUp a");
let loginBtn =document.querySelector(".signIn a");
let loginMail =document.getElementById("loginMaill");
let loginPass =document.getElementById("loginPasw");
let text=document.querySelector(".text");
let goLoginPage= document.querySelector(".go-login");
let goSignUpPage=document.querySelector("#in .go-signup");
let outBtn=document.querySelector(".out-btn");
let exist=document.querySelector(".signUp .exit ");
let succes =document.querySelector(".signUp .suc");
let failed=document.querySelector(".signUp .fail");
let signUpPage=document.getElementById("up");
let signInPage=document.getElementById("in");
let homePage=document.getElementById("home");
let arr;

/******************SignUP*******************/
if (localStorage.getItem("info") == null) {
  arr = [];
} else {
  arr = JSON.parse(localStorage.getItem("info"));
}

singUpBtn.addEventListener("click", function () {
  if (checkData() && vali()==true) {       
      let infoContainer = {
      name: singUpName.value,
      password: singUpPass.value,
      mail: singUpMail.value,
    }
      if(checkmail()==false){
        exist.classList.replace("d-none","d-block");
        succes.classList.replace("d-block", "d-none");

  }else{
    exist.classList.replace("d-block","d-none");
     arr.push(infoContainer);
    localStorage.setItem("info", JSON.stringify(arr));
    clear();  
  }
    
  }
  

})

function clear() {
  singUpName.value = "";
  singUpMail.value = "";
  singUpPass.value = "";
}
function checkData() {
  if (!(singUpName.value) || !(singUpMail.value) || !(singUpPass.value)) {
    failed.classList.replace("d-none", "d-block");
    succes.classList.replace("d-block", "d-none");
    exist.classList.replace("d-block","d-none");
    return false;

  } else {
    succes.classList.replace("d-none", "d-block");
    failed.classList.replace("d-block", "d-none");
    exist.classList.replace("d-block","d-none");
    return true;

  }

}
function checkmail() {
  for (var i = 0; i < arr.length; i++) {
      if (arr[i].mail.toLowerCase() == singUpMail.value.toLowerCase()) {
          return false;
      }
    }
  }

goLoginPage.addEventListener("click",function(){
  signUpPage.classList.replace("d-block" , "d-none");
  signInPage.classList.replace("d-none" , "d-block");

})
/******************SignIN*******************/

loginBtn.addEventListener("click",function(){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].mail.toLowerCase() == loginMail.value.toLowerCase() && 
    arr[i].password.toLowerCase() == loginPass.value.toLowerCase()) {
      document.getElementById("req").classList.replace("d-block", "d-none");
      signInPage.classList.replace("d-block" , "d-none");
      homePage.classList.replace("d-none" , "d-block");
      loginBtn.setAttribute("href","#home");
      text.innerHTML  = `Welcome ${arr[i].name}`;
       loginMail.value="";
       loginPass.value="";
      break;
     
  }
  else{
    loginBtn.setAttribute("href","#");
   document.getElementById("req").classList.replace("d-none", "d-block")

    }
  }
})

goSignUpPage.addEventListener("click",function(){
  signInPage.classList.replace("d-block" , "d-none");
  signUpPage.classList.replace("d-none" , "d-block");

})
outBtn.addEventListener("click",function(){
  homePage.classList.replace("d-block" ,"d-none");
  signInPage.classList.replace("d-none" , "d-block");

})


function vali(){
let email1 = singUpMail.value;
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(regex.test(email1)==false){
  document.getElementById("valid").classList.replace("d-none" , "d-block");
  succes.classList.replace("d-block", "d-none");

  return false;


} else{
    document.getElementById("valid").classList.replace("d-block" , "d-none");
    return true;

    }
 


}


singUpMail.addEventListener("keyup",vali)


loginMail.addEventListener("keyup",function(){
  let email1 = loginMail.value;
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  regex.test(email1)?   document.getElementById("log").classList.replace("d-block" , "d-none") :  document.getElementById("log").classList.replace("d-none" , "d-block");

})

// if(email1==loginMail.value){
