$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  const loginForm = document.querySelector("#login-form")
  loginForm.addEventListener("submit",(evt)=>{
    evt.preventDefault()
   userLogin(evt)
  })
  
  const userLogin = (evt)=>{
    const loginUserData = {
      email : evt.target["email"].value,
      password: evt.target["password"].value
    }
    firebase.auth().signInWithEmailAndPassword(loginUserData.email, loginUserData.password)
    .then(()=>{
      window.location.href = "./Html/chat.html"

    })
    .catch(function(error) {
      console.log(error)
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    loginForm.reset()
  }
