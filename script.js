let firstname = document.getElementById('firstname')
let middlename = document.getElementById('middlename')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let passwd = document.getElementById('passwd')
let passwd2 = document.getElementById('passwd2')
let form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    let specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    // Trim and get values of the HTML element
    let firstnameT = firstname.value.trim()
    let middlenameT = middlename.value.trim()
    let lastnameT = lastname.value.trim()
    let passwdT = passwd.value.trim()
    let passwd2T = passwd2.value.trim()
    let emailT = email.value.trim()
    
    // check for emptiness
    if (firstnameT.length === 0 || middlenameT.length === 0 || lastnameT.length === 0 || emailT.length ===0 || passwdT.length === 0) {
        document.querySelector('#res').textContent = 'Please fill all fields!'
        document.querySelector('#res').style.backgroundColor = 'red'
        document.querySelector('#res').style.color = 'white'
        document.querySelector('#res').style.padding = '8px'
        return
    }

    // check for email validity
    if (!emailT.split('').includes('@') || !emailT.split('').includes('.')) {
        email.style.borderStyle = "solid"
        email.style.borderColor = "red"
        document.querySelector('#Erremail').textContent = "Email must be a valid one"
        return
    }

    // check the password length
    if (passwdT.length < 8) {
        passwd.style.borderStyle = "solid"
        passwd.style.borderColor = "red"
        document.querySelector('#Errpasswd').textContent = "Password must be atleast 8 characters long"
        return
    }

    // check the password if it contains number
    if (passwdT.split('').some(el => typeof Number(el) != 'number')) {
        // passwdT.split('').some(el => console.log(typeof Number(el)));
        passwd.style.borderStyle = "solid"
        passwd.style.borderColor = "red"
        document.querySelector('#Errpasswd').textContent = "Password must contain number"
        return
    }

    // check the password if it contains special character
    if(!passwdT.split('').some(el => specialCharacters.test(el))) {
        passwd.style.borderStyle = "solid"
        passwd.style.borderColor = "red"
        document.querySelector('#Errpasswd').textContent = "Password must contain special character"
        return
    }

    // check the equality of password and confirm password
    if(passwdT != passwd2T) {
        passwd2.style.borderStyle = "solid"
        passwd2.style.borderColor = "red"
        document.querySelector('#Errpasswd2').textContent = "Password must be thesame as above"
        return
    }

    document.querySelector('#res').textContent = 'You have successfully registered'
    document.querySelector('#res').style.backgroundColor = 'green'
    document.querySelector('#res').style.color = 'white'
    document.querySelector('#res').style.padding = '8px'

    setTimeout(() => {        
        location.reload()
    }, 5000);
})