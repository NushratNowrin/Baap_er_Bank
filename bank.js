// step-1 add click event handler on submit button
document.getElementById('submit-btn').addEventListener('click',function(){
//step-2 get email address inside the email input field

const userEmail = document.getElementById('user-email');
const userEmailValue = userEmail.value ;
// console.log(userEmailValue);

//step-3 get password inside the password input field
const userPass = document.getElementById('user-password');
const userPassValue = userPass.value ;
// console.log(userPassValue);

//step-4 verify email & password

if(userEmailValue === 'nowrin2023@gmail.com'){
   
    if(userPassValue === 'secret'){
        window.location.href = 'login.html';
    }
    else{
        alert('Wrong Password');
    }
}
else{
    alert('Invalid User');
}
})