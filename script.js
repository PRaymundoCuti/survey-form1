function isNotEmpty(input){
    if(input===""){
        return false;
    }else{
        return true;
    }      
}
function isValidEmail(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email)
}
function hasCheckedPoint(fieldset){
    const inputList =[...fieldset.querySelectorAll("input")];
    for(let element of inputList ){
        if (element.checked){
            return true;
        }
    }
    return false;
}

function isSelected(select){
    return isNotEmpty(select.value)
}
function isValidPhoneNumber(number){
    const PhoneNumberPattern = /^[0-9]{10}$/;
    return PhoneNumberPattern.test(number)
}
function isInFuture(date){
    const today = new Date();
    today.setHours(0,0,0,0)

    const inputDate =new Date(date);
    inputDate.setHours(0,0,0,0)

    return today<inputDate
}
function inputNumberValidate(number){
    const numberStr = number.value
    const numberInt = parseInt(numberStr,10)

    const minStr = number.min;  
    const maxStr = number.max;

    const minInt = parseInt(minStr,10)
    const maxInt = parseInt(maxStr,10)

    return isNotEmpty(number) && minInt<numberInt && maxInt<numberInt
}
