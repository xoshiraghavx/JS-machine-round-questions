
    function validateName(name) {
        if (name == null || name == "") {
            alert("Name can't be blank!");
            return false;
        }
        if (name.length < 3) {
            alert("Name must be atleast 3 characters long!");
            return false;
        }
        return true;
    }
    function validatePassword(password, confirm_password) {
        if (password == null || password == "") {
            alert("Password can't be blank!");
            return false;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return false;
        }
        return confirmPassword(password, confirm_password);
    }
    function confirmPassword(password, confirm_password) {
        console.log(password, confirm_password)
        if (password === confirm_password) {
            return true;
        }
        else {
            alert("Entered Passwords are not Same!");
            return false;
        }
    }
    function validateImage(file) {
        var fileName = file.value.split("\\").pop();
        var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

        if (!allowedExtensions.exec(fileName)) {
            return false;
        }
        return true;
    }
    function validateEmail(email) {
        var reg = new RegExp("^[a-zA-Z0-9_.]+@[a-zA-Z0-9.]+$");
        if (!reg.test(email)) {
            alert("Invalid e-mail Address!");
            return false;
        }
        return true;
    }
    function displayFileName(file) {
        var fileName = file.value.split("\\").pop();
        document.getElementById("fileDescription").innerHTML = fileName;
        document.getElementById("fileDescription").style = "color:blue";
    }
    function validateNumber(number) {
        if (isNaN(number)) {
            alert("Only Numeric Values are allowed!");
            return false;
        }
        return true;
    }
    function validateImage(filePath) {
        var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert("Invalid Image Provided!")
            return false;
        }
        return true;
    }

    function validateForm() {
        let isValid = true;

        if (!validateName(document.signup.fname.value)) {
            isValid = false;
        }
        if (!validateName(document.signup.lname.value)) {
            isValid = false;
        }
        if (!validatePassword(document.signup.password.value, document.signup.confirm_password.value)) {
            isValid = false;
        }
        if (!validateEmail(document.signup.email.value)) {
            isValid = false;
        }
        if (!validateNumber(document.signup.phone.value)) {
            isValid = false;
        }
        if (!validateImage(document.signup.file.value)) {
            isValid = false;
        }
        isValid ? alert("Form Data is Valid") : alert("Form Data is not Valid")
    }
