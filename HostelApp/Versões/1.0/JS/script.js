function login(){
    form.username.value = form.username.value.toLowerCase()
    form.password.value = form.password.value.toLowerCase()

    if(form.username.value == "eduardo" && form.password.value == "dudu123" || form.username.value == "vinicius" && form.password.value == "vini123" ){
        location = "/Versões/1.0/HTML/Guests.html";
    }else{
        form.username.value = ""
        form.password.value = ""
        alert("Incorrect username or passoword!")
    }
}


