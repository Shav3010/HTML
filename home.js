function addToCart() {
    alert('Product added to cart successfully!');
}


function login() {
    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in both username and password fields.');
    } 
    
    else {
        alert('Log In successful!');
    }
}

function signup() {
    var username = document.getElementById('signup-username').value;
    var email    = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
    } 
    
    else {
        alert('Sign up successful!');
    }
}


function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var enquiry = document.getElementById('enquiry').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || enquiry === '' || message.trim() === '') {
        alert('Please fill in all fields.');
    
    }
    else {
        alert('Form submitted successfully!');
    }
}

function switchForm(formId) {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}    

