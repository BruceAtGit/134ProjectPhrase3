function validation() {
    var email = document.getElementById("email").value;
    var fname = document.getElementById("FN").value;
    var lname = document.getElementById("LN").value;
    var comment = document.getElementById("comment").value;
    var isValid = true;

    if (email == "") {
        document.getElementById("emailResult").innerHTML = "Email is required";
        isValid = false;
    }

    else
        document.getElementById("emailResult").innerHTML = ""

    if (fname == "") {
        document.getElementById("firstNameResult").innerHTML = "First name is required";
        isValid = false;
    }

    else
        document.getElementById("firstNameResult").innerHTML = ""

    if (lname == "") {
        document.getElementById("lastNameResult").innerHTML = "Last name is required";
        isValid = false;
    }

    else
        document.getElementById("lastNameResult").innerHTML = ""




if (isValid == true) {
document.getElementById("registration").submit();
}


}