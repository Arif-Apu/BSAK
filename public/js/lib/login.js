
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == ""){
        alert("Please enter a User Name")
        formLogin.username.focus()
        return false
    } if(password == ""){
        alert("Please enter a Password")
        formLogin.password.focus()
        return false
    }
    if( username == "arif" && password == "1234"){
        alert("Login successfully");
        window.location = "index.html";
        return false;
    }
    else{
        alert("Login failed - Please enter correct Username and Password")
    }}