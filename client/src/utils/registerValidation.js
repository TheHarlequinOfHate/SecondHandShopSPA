export default  function  registerValidation(obj){
    let emailVailidation = new RegExp(/\w*@\w*.[a-z]{2,6}/g);

    let validations = {
        isEmailValid: true,
        isPasswordValid: true,
        isUsernameValid: true,
        isCountryValid: true,
        isAllValid: true,
    }

    if(obj.username == ''){
        validations.isUsernameValid = false;
        validations.isAllValid = false;
    } else if (obj.password == ''){
        validations.isPasswordValid = false;
        validations.isAllValid = false;
    } else if (obj.email == ''){
        validations.isEmailValid = false;
        validations.isAllValid = false;
    } else if (!obj.email.match(emailVailidation)){
        validations.isEmailValid = false;
        validations.isAllValid = false;
    }else if(obj.country == ''){
        validations.isCountryValid = false;
        validations.isAllValid = false;
    }



    return validations;
}