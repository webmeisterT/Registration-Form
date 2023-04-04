let firstname = document.getElementById('firstname')
let middlename = document.getElementById('middlename')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let passwd = document.getElementById('passwd')
let passwd2 = document.getElementById('passwd2')
let submit = document.getElementById('submit')
let form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    let specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    // Trim and get values of the HTML element
    let passwdT = passwd.value.trim()
    let passwd2T = passwd.value.trim()
    let emailT = email.value.trim()
    
    // check for email validity
    if (!emailT.split('').includes('@') || !emailT.split('').includes('.')) {
        email.style.borderStyle = "solid"
        email.style.borderColor = "red"
        document.querySelector('#Erremail').textContent = "Your Email must be a valid one"
        return
    }

    // check the password length
    if (passwdT.length < 8) {
        passwd.style.borderStyle = "solid"
        passwd.style.borderColor = "red"
        document.querySelector('#Errpasswd').textContent = "Your Password must be atleast 8 characters long"
        return
    }

    // check the password if it contains number
    if (passwdT.split('').some(el => typeof Number(el) != 'number')) {
        // passwdT.split('').some(el => console.log(typeof Number(el)));
        passwd.style.borderStyle = "solid"
        passwd.style.borderColor = "red"
        document.querySelector('#Errpasswd').textContent = "Your Password must contain number"
        return
    }

    // check the password if it contains special character
    if(!passwdT.split('').some(el => specialCharacters.test(el))) {
        passwd.style.borderStyle = "solid"
        passwd.style.borderColor = "red"
        document.querySelector('#Errpasswd').textContent = "Your Password must contain special character"
        return
    }

    // check the equality of password and confirm password
    if(passwdT != passwd2T) {
        passwd.style.borderStyle = "solid"
        passwd2.style.borderColor = "red"
        document.querySelector('#Errpasswd2').textContent = "Your Password must be thesame with confirm password"
        return
    }

    document.querySelector('#res').textContent = 'You have successfully registered'
    document.querySelector('#res').style.backgroundColor = 'green'
    document.querySelector('#res').style.color = 'white'
})