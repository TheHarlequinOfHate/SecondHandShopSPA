export default function postItemValidation (data) {
    
    let isDataValid = true;


    if(data.itemName == ''){
        isDataValid = false;
    } else if (data.size == ''){
        isDataValid = false;
    } else if (data.brand == ''){
        isDataValid = false;
    } else if (data.category == ''){
        isDataValid = false;
    } else if (data.phoneNum == ''){
        isDataValid = false;
    } else if(data.price == ''){
        isDataValid = false;
    } else if(data.description == ''){
        isDataValid = false;
    }

    return isDataValid;


}