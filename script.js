const userData = []
const email = document.getElementById('emailVal')
const username = document.getElementById('usernameVal')
const date = document.getElementById('dateVal')
const password = document.getElementById('passwordVal')
const confirm = document.getElementById('confirmVal')
const jobTitle = document.getElementById('job-select')
const userBox = document.getElementById('userData')
const alertBox = document.querySelector('.alertBox')
let alertMessage = document.querySelector('.alertMessaage')
const nextBtns = document.querySelectorAll('[data-change]')
let currentDate = new Date()
let currentYear = currentDate.getFullYear()


email.addEventListener('keyup', (e) => {

    let emailVal = email.value

    if (emailVal === '') {
        alertBox.classList.remove('showAlert')
    } else if (!validateEmail(emailVal)) {
        let errorMessage = 'Email is invalid or already taken'
        
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')
    } else {
        alertBox.classList.remove('showAlert')
    }
    
})

username.addEventListener('keyup', (e) => {

    let userVal = username.value
    if (userVal === '') {
        alertBox.classList.remove('showAlert')
    } else if (validateUsername(userVal)) {
        return 
    } else {
        let errorMessage = 'username must be less than or equal 5 characters'
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')
        setTimeout(() => {
            alertBox.classList.remove('showAlert')
        }, 3000)
    }

})

date.addEventListener('keyup', e => {
    let dateVal = date.value
    // Parse the date parts to integers
    let parts = dateVal.split("-")
    let year = parts[0]
    let day = parts[1]
    let month = parts[2]

    if (year > currentYear) {
        let errorMessage = 'please enter correct date!'
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')
    } else {
        alertBox.classList.remove('showAlert')
    }

})

password.addEventListener('keyup', (e) => {

    alertBox.style.bottom = '-80px'
    let passwordVal = password.value
    if (validatePassword(passwordVal)) {
        alertBox.classList.remove('showAlert')

        return
    } else {
        let errorMessage = 'Password must contain : Capital Letter, Small Letter, Number, Special Character'
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')
    }

})

nextBtns[0].addEventListener('click', (e) => {
    let emailVal = email.value
    if (validateEmail(emailVal)) {
        userData.push(emailVal)
        console.log(userData)
        let currentData = e.target.dataset.self
        let currentBox = document.getElementById(currentData)
        currentBox.classList.remove('showBox')
        let boxName = e.target.dataset.change
        let activeBox = document.getElementById(boxName)
        activeBox.classList.add('showBox')

    } else if (emailVal === '') {
        let errorMessage = 'You must fill this field'
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')

        setTimeout(() => {
            alertBox.classList.remove('showAlert')
        }, 3000)

    } else {
        return
    }
})

nextBtns[1].addEventListener('click', (e) => {
    let nameVal = username.value
    if (validateUsername(nameVal)) {
        userData.push(nameVal)
        console.log(userData)
        let currentData = e.target.dataset.self
        let currentBox = document.getElementById(currentData)
        currentBox.classList.remove('showBox')
        let boxName = e.target.dataset.change
        let activeBox = document.getElementById(boxName)
        activeBox.classList.add('showBox')
    } else if (nameVal === '') {
        let errorMessage = 'You must fill this field'
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')

        setTimeout(() => {
            alertBox.classList.remove('showAlert')
        }, 3000)
    } else {
        return
    }
})


nextBtns[2].addEventListener('click', (e) => {
    let dateVal = date.value
    // Parse the date parts to integers
    let parts = dateVal.split("-")
    let year = parts[0]
    let day = parts[1]
    let month = parts[2]

    if (year > currentYear || day > 18) {
        return
    } else if (dateVal === '') {
        let errorMessage = 'Please enter your birthday'
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')
        return
    } else {
        userData.push(dateVal)
        console.log(userData)
        let currentData = e.target.dataset.self
        let currentBox = document.getElementById(currentData)
        currentBox.classList.remove('showBox')
        let boxName = e.target.dataset.change
        let activeBox = document.getElementById(boxName)
        activeBox.classList.add('showBox')
    }
})

nextBtns[3].addEventListener('click', (e) => {
    alertBox.style.bottom = '-80px'
    let passwordVal = password.value
    let confirmPasswordVal = confirm.value

    if (validatePassword(passwordVal) && passwordVal === confirmPasswordVal) {
        let currentData = e.target.dataset.self
        let currentBox = document.getElementById(currentData)
        currentBox.classList.remove('showBox')
        let boxName = e.target.dataset.change
        let activeBox = document.getElementById(boxName)
        activeBox.classList.add('showBox')
    } else {
        let errorMessage = 'Password are not correct!'
        alertMessage.innerHTML = errorMessage
        alertBox.classList.add('showAlert')
        setTimeout(() => {
            alertBox.classList.remove('showAlert')
        }, 3000)
    }
})

nextBtns[4].addEventListener('click', (e) => {
    let selectedJob = jobTitle.value
    //console.log(selectedJob)

    if (selectedJob === '') {
        return
    } else {
        userData.push(selectedJob)

        let currentData = e.target.dataset.self
        let currentBox = document.getElementById(currentData)
        currentBox.classList.remove('showBox')
        let boxName = e.target.dataset.change
        let activeBox = document.getElementById(boxName)
        activeBox.classList.add('showBox')
        
        return userBox.innerHTML = `
            <p class="intro">
                HELLO <span class="user-data">${ userData[1] }</span> </br>
                Welcome to github
            </p>
            <p class="user-data" > Email: ${ userData[0] }</p >
            <p class="user-data">Name: ${ userData[1] }</p>
            <p class="user-data">Birthday: ${ userData[2] }</p>
            <p class="user-data">Job: ${ userData[3] }</p>
            
        ` 
    }
})


const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

const validateUsername = (username) => {
    return username.length < 6 ? true : false
}

const validatePassword = (password) => {
    return password.match(/^[a-zA-Z0-9!@#$%^&*]{8,16}$/)
}