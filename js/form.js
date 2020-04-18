function validate() {
    let flag = 1;
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    if (email.value.trim() == "") {
        document.getElementById('error_email').style.display = "block";
        document.getElementById('email').style.borderBottom = "2px solid tomato";
        document.getElementById('error_email').innerHTML = "* Enter Your Email ID";
        flag = 0;


    } else {
        document.getElementById('error_email').style.display = "none";
        document.getElementById('email').style.borderBottom = "2px solid #fff";
        document.getElementById('error_email').innerHTML = "";

        if (password.value.trim() == "") {

            document.getElementById('error_password').style.display = "block";
            document.getElementById('password').style.borderBottom = "2px solid tomato";
            document.getElementById('error_password').innerHTML = "* Enter Your Password";
            flag = 0;

        } else {
            document.getElementById('error_password').style.display = "none";
            document.getElementById('password').style.borderBottom = "2px solid #fff";
            document.getElementById('error_password').innerHTML = "";

            if (email.value.trim() != "") {

                // let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
                let regexp = /^([\w\d\-\.]+)@{1}(([\w\d\-]{1,67})|([\w\d\-]+\.[\w\d\-]{1,67}))\.(([a-zA-Z\d]{2,4})(\.[a-zA-Z\d]{2})?)$/;
                if (regexp.test(email.value)) {

                    document.getElementById('error_email').style.display = "none";
                    document.getElementById('email').style.borderBottom = "2px solid #fff";
                    document.getElementById('error_email').innerHTML = "";

                } else {
                    document.getElementById('error_email').style.display = "block";
                    document.getElementById('email').style.borderBottom = "2px solid tomato";
                    document.getElementById('error_email').innerHTML = "* Enter Valid Email ID";
                    flag = 0;
                }
            }

        }
    }



    if (flag == 1) {
        return true;
    } else {
        return false;
    }
}

function passwordStrenght(val) {
    var res = validate_password(val);
    if (val.length > 8 && res == true) {
        document.getElementById('strength').style.width = (val.length * 10) + "%";
        document.getElementById("strength").classList.remove('bg-danger');
        document.getElementById("strength").classList.remove('bg-warning');
        document.getElementById("strength").classList.remove('bg-success');
        document.getElementById("strength").classList.add('bg-success');
        document.getElementById('strength').innerHTML = "Strong";




    } else if (val.length >= 6) {
        document.getElementById('strength').style.width = (val.length * 10) + "%";
        document.getElementById("strength").classList.remove('bg-danger');
        document.getElementById("strength").classList.remove('bg-warning');
        document.getElementById("strength").classList.remove('bg-success');
        document.getElementById("strength").classList.add('bg-warning');
        document.getElementById('strength').innerHTML = "Medium";

    } else if (val.length < 6) {
        document.getElementById('strength').style.width = (val.length * 10) + "%";
        document.getElementById("strength").classList.remove('bg-warning');
        document.getElementById("strength").classList.remove('bg-success');
        document.getElementById("strength").classList.add('bg-danger');
        document.getElementById('strength').innerHTML = "Poor";

    }

}

function validate_fname(val) {

    if (val.trim() == "") {
        document.getElementById('error_first_name').style.display = "block";
        document.getElementById('first_name').style.borderBottom = "2px solid tomato";
        document.getElementById('error_first_name').innerHTML = "* Enter Your Email ID";
        return false;
    } else {
        document.getElementById('error_first_name').style.display = "none";
        document.getElementById('first_name').style.borderBottom = "2px solid #fff";
        document.getElementById('error_first_name').innerHTML = "";
        return true;
    }


}

function validate_lname(val) {

    if (val.trim() == "") {
        document.getElementById('error_last_name').style.display = "block";
        document.getElementById('last_name').style.borderBottom = "2px solid tomato";
        document.getElementById('error_last_name').innerHTML = "* Enter Your Email ID";
        return false;
    } else {
        document.getElementById('error_last_name').style.display = "none";
        document.getElementById('last_name').style.borderBottom = "2px solid #fff";
        document.getElementById('error_last_name').innerHTML = "";
        return true;
    }


}


function validate_email(val) {

    if (val.trim() == "") {
        document.getElementById('error_email_signup').style.display = "block";
        document.getElementById('email').style.borderBottom = "2px solid tomato";
        document.getElementById('error_email_signup').innerHTML = "* Enter Your Email ID";
        return false;
    } else {

        let regexp = /^([\w\d\-\.]+)@{1}(([\w\d\-]{1,67})|([\w\d\-]+\.[\w\d\-]{1,67}))\.(([a-zA-Z\d]{2,4})(\.[a-zA-Z\d]{2})?)$/;
        if (regexp.test(email.value)) {
            document.getElementById('error_email_signup').style.display = "none";
            document.getElementById('email').style.borderBottom = "2px solid #fff";
            document.getElementById('error_email_signup').innerHTML = "";
            return true;
        } else {
            document.getElementById('error_email_signup').style.display = "block";
            document.getElementById('email').style.borderBottom = "2px solid tomato";
            document.getElementById('error_email_signup').innerHTML = "* Enter Valid Email ID";
            return false;
        }
    }


}

function validate_mobile(val) {

    if (val.trim() == "") {
        document.getElementById('error_mobile').style.display = "block";
        document.getElementById('mobile').style.borderBottom = "2px solid tomato";
        document.getElementById('error_mobile').innerHTML = "* Enter Your Mobile Number";
        return false;
    } else {
        var regexp = /^\d{10}$/;
        var regexp1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (regexp.test(val.trim()) || regexp1.test(val.trim())) {
            document.getElementById('error_mobile').style.display = "none";
            document.getElementById('mobile').style.borderBottom = "2px solid #fff";
            document.getElementById('error_mobile').innerHTML = "";
            return true;
        } else {
            document.getElementById('error_mobile').style.display = "block";
            document.getElementById('mobile').style.borderBottom = "2px solid tomato";
            document.getElementById('error_mobile').innerHTML = "* Enter Valid Mobile Number";
            return false;
        }
    }


}

function validate_password(val) {
    document.getElementById('bub').style.display = "none";
    if (val.trim() == "") {
        document.getElementById('error_password_signup').style.display = "block";
        document.getElementById('password').style.borderBottom = "2px solid tomato";
        document.getElementById('error_password_signup').innerHTML = "* Enter Your Password";
        return false;
    } else {
        var regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

        if (regexp.test(val.trim())) {
            document.getElementById('error_password_signup').style.display = "none";
            document.getElementById('password').style.borderBottom = "2px solid #fff";
            document.getElementById('error_password_signup').innerHTML = "";
            return true;
        } else {
            document.getElementById('error_password_signup').style.display = "block";
            document.getElementById('password').style.borderBottom = "2px solid tomato";
            document.getElementById('error_password_signup').innerHTML = "* Enter valid password";
            return false;

        }
    }


}


function validate_confirmpassword(val) {

    if (val.trim() == "") {
        document.getElementById('error_confirmpassword').style.display = "block";
        document.getElementById('confirm_password').style.borderBottom = "2px solid tomato";
        document.getElementById('error_confirmpassword').innerHTML = "* Enter Confirm password";
        return false;
    } else {

        if (document.getElementById('password').value != val) {
            document.getElementById('error_confirmpassword').style.display = "block";
            document.getElementById('confirm_password').style.borderBottom = "2px solid tomato";
            document.getElementById('error_confirmpassword').innerHTML = "* password mismatch";
            return false;
        } else {
            document.getElementById('error_confirmpassword').style.display = "none";
            document.getElementById('confirm_password').style.borderBottom = "2px solid #fff";
            document.getElementById('error_confirmpassword').innerHTML = "";
            return true;
        }

    }


}

function signup_validate() {
    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let mobile = document.getElementById('mobile').value;
    let password = document.getElementById('password').value;
    let confirm_password = document.getElementById('confirm_password').value;
    if (validate_fname(fname) && validate_lname(lname) && validate_email(email) && validate_mobile(mobile) && validate_password(password) && validate_confirmpassword(confirm_password)) {
        return true;
    } else {
        return false;
    }

}


function show_instructions() {
    document.getElementById('bub').style.display = "block";
}

function hide_instructions() {
    document.getElementById('bub').style.display = "none";
}