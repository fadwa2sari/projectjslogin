let email = document.getElementById('email');
let password = document.getElementById('password');
let btnsubmit = document.getElementById('btnsubmit');
let form = document.getElementById("form");


form.addEventListener('submit',(e)=> {

    let message =[];
    if(email.value === '' || email.value ==null)
    {
        message.push("Email is required ");
    }
    if(password.value.lengh <= 6)
    {
        message.push(" Password must be langer than characters" );

    }
    if(password.value.lengh >= 10)
    {
        message.push("password most be less than 10 characters")
    }
  if(message.length  > 0)
  {
    e.preventDefault();
    // error.innerText = message.join(',');
  }
})