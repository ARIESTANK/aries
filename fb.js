
        let email="kaungkhantlin@ucsy.edu.mm";
        let password="ariestank";
        document.addEventListener('DOMContentLoaded', function() {
            const loginButton = document.getElementById('loginButton');
            const signupButton = document.getElementById('signupButton');
    
            loginButton.addEventListener('click', function() {
                const emailValue = document.getElementById('gmail').value;
                const passwordValue = document.getElementById('password').value;
                // Perform login logic with emailValue and passwordValue
                if(email!=emailValue){ alert("Wrong Gmail.  Try Again")}
                else if(password!=passwordValue){alert("Wrong Password. Try Again")}
                else {alert("Welcome ARIES.")}
            });
    
            signupButton.addEventListener('click', function() {
                // Perform sign up logic
                alert('Create A New Account clicked');
            });
       });

    
