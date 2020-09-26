$(document).ready(function(){
    $('.sidenav').sidenav();
  });


  const signUpForm = document.querySelector("#signUp-form")

  signUpForm.addEventListener("submit",(evt)=>{
   evt.preventDefault()
  signUpUser(evt)
  })

  const signUpUser = (evt)=>{
    const signUpUserData = {
      username : evt.target["username"].value,
      email : evt.target["email"].value,
      password: evt.target["password"].value
    }
    firebase.auth().createUserWithEmailAndPassword(signUpUserData.email,signUpUserData.password)
    .then(()=>{
     console.log("user signUp")     
    })
    .catch((error)=>{
      let errorCode = error.errorCode
      let errorMessage = error.errorMessage
      console.log(errorCode,errorMessage)
    } ) 
    document.querySelector("#signUp-form").reset()
    $(document).ready(function(){
      $('.modal').modal();
      $('.modal').modal("open");

    });
   }