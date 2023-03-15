let successEmail = document.getElementById("SuccessEmail")
let SuccessPassword = document.getElementById("SuccessPassword")
let UserName = document.getElementById("User_name")
let UserEmail = document.getElementById("User_email")
let UserPassword = document.getElementById("User_password")
let All = document.getElementById("All")
let email = document.getElementById("email")
let unemail = document.getElementById("unemail")
let Success = document.getElementById("Success")
let ShowName



let UsersList = []
if (localStorage.getItem("Usersinfo") != null) {
    UsersList = JSON.parse(localStorage.getItem("Usersinfo"))
}
function SignUp() {
    if (UserName.value == "" || UserEmail.value == "" || UserPassword.value == "") {
        All.style.display = "block"
        email.style.display = "none"
        Success.style.display = "none"
    }
    else if (isItExist() == false) {
        All.style.display = "none"
        email.style.display = "block"
        Success.style.display = "none"
    }
    else {
        var User = {
            name: document.getElementById("User_name").value,
            email: document.getElementById("User_email").value,
            password: document.getElementById("User_password").value
        }
        UsersList.push(User)
        localStorage.setItem("Usersinfo", JSON.stringify(UsersList))
        All.style.display = "none"
        email.style.display = "none"
        Success.style.display = "block"
    }
}


function isItExist() {
    for (var i = 0; i < UsersList.length; i++) {
        if (UsersList[i].email.toLowerCase() == UserEmail.value.toLowerCase()) {
            All.style.display = "none"
            Success.style.display = "none"
            email.style.display = "block"
            return false
        }
    }
}
function isItright() {
    for (var i = 0; i < UsersList.length; i++) {
        if (UsersList[i].email.toLowerCase() == successEmail.value.toLowerCase() && UsersList[i].password == SuccessPassword.value) {
            localStorage.setItem("Usersname", UsersList[i].name)
            return true
        }
    }
}


function login() {
    if (successEmail.value == "" || SuccessPassword.value == "") {
        All.style.display = "block"
        unemail.style.display = "none"
    }
    else if (isItright() == true) {
        location.replace("Home.html")
    }
    else {
        All.style.display = "none"
        unemail.style.display = "block"
    }
}

var username = localStorage.getItem("Usersname")
if (username) {
    document.getElementById('welcom').innerHTML = "Welcome " + username
}




function logout() {
    location.replace("index.html")
}