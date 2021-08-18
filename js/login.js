
//login function
document.getElementById('login-submit').addEventListener('click', function () {
    // getting user email: sontan@baap.com
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //getting user password:  secret
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //checking email and pass
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }

})

