function validateSignInForm(e) {
    e.preventDefault();

    //Set up message array...
    let msg = new array;

    //Get pw and validate
    let pword = document.querySelector('#existpw').value;
    if (pword.length < 3) {
        msg.push("The password is too short!");
    }

    //Get email and validate
    let email = document.querySelector('#email1').value;
    if (!ValidateEmail(email)) {
        msg.push("The email is invalid");
    }

    //If no errors
    let outputmsg = '';
    if (msg.length === 0) {
        outputmsg = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
    } else {
        outputmsg = '<div class="alert alert-danger" role="alert">';
        for(let i=0; i<msg.length; i++) {
            outputmsg+='<p>'+msg[i]+'</p>';
        }
        outputmsg+="</div>";
    }
    document.getElementById('errorMessages').innerHTML = outputmsg;

}



//     // If no error messages show submit message
//     let outputMessage = "";
//     if(messages.length == 0){
//         outputMessage = '<div class="alert alert-success" role="alert"><p>Login has been submitted</p></div>';
//     }else{
//     // Else show error messages
//         outputMessage = '<div class="alert alert-danger" role="alert">';
//         for(let i=0;i<messages.length;i++){
//             outputMessage+='<p>'+messages[i]+"</p>";
//         }
//         outputMessage+="</div>";
//     }

//     document.getElementById('errorMessages').innerHTML = outputMessage;

// function validateSignInForm(e){
//     e.preventDefault();

//     // Set up message array
//     let messages = new Array;

//     // Get password and validate
//     let pw = document.querySelector('#inputPassword3').value;
//     if(pw.length < 3){
//         messages.push("The password is too short!");
//     }

//     // Get email address and validate
//     let email = document.getElementById('inputEmail3').value;
//     if(!ValidateEmail(email)){
//         messages.push("The email is not valid");
//     }



// }