export function loginValidation(email,password) {

    let isValid = true;
    let emailVailidation = new RegExp(/\w*@\w*.[a-z]{2,6}/g);


    if(email == ''){
        console.log('Email cant be empty');
        isValid = false;
    } else if(!email.match(emailVailidation)){
        console.log('Invalid Email');
        isValid = false;
    } else if(password == ''){
        console.log('Password cant be empty');
        isValid = false;

    }

    return isValid;


}