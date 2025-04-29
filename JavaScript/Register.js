const form = document.getElementById("Registerform")
const errormsg = document.getElementById("error")
error.style.display ="none"

// console.log(form)
// console.log(errormsg)

form.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log("form disubmit")
    let firstName = document.getElementById("firstname").value
    // console.log(user)

    let Surname = document.getElementById("surname").value
    let Emails = document.getElementById("emails").value
    let PNumber = document.getElementById("phone").value
    let Password = document.getElementById("pass1").value
    let Confirm = document.getElementById("pass2").value

    if(firstName.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "First Name Must be Filled"
        return
    }

    if(Surname.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Surname Must be Filled"
        return
    }
    if(Emails.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Email Must be Filled"
        return
    }
    if(PNumber.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Phone number Must be Filled"
        return
    }
    if(Password.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Password Must be Filled"
        return
    }
    if(Confirm.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Confirm Password Must be Filled"
        return
    }

    if(Password != Confirm){
        errormsg.style.display ="block"
        errormsg.innerHTML = "The Passwords are incorrect"
        return
    }

    error.style.display ="none"
    window.location.href = "Home.html"
})