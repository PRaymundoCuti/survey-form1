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
function isValidUsername(username){
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    return usernamePattern.test(username)
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
    inputDate.setHours(1,0,0,0)

    return today<inputDate
}
function inputNumberValidate(number){
    const numberStr = number.value
    const numberInt = parseInt(numberStr,10)

    const minStr = number.min;  
    const maxStr = number.max;

    const minInt = parseInt(minStr,10)
    const maxInt = parseInt(maxStr,10)

    return isNotEmpty(numberStr) && minInt<=numberInt && maxInt>=numberInt
}

function showError(element,message){
    element.setAttribute("aria-invalid", "true");

    const error=`${element.id}-error`;
    const errorElement=document.getElementById(error);
    errorElement.style.display = "block";
    errorElement.textContent = message
}

function cleanError(element){
    element.setAttribute("aria-invalid", "false");

    const error=`${element.id}-error`;
    const errorElement=document.getElementById(error);
    errorElement.style.display = "none";
}

function validateForm(){
    let isValid = true

    let elementId = "username"
    let inputElement = document.getElementById(elementId);
    let inputValue = inputElement.value.trim();
    
    cleanError(inputElement);

    if(!isNotEmpty(inputValue)){
        showError(inputElement,'username must not be empty')
        isValid = false; 
    }else if(inputValue.length<inputElement.minLength){
        showError(inputElement,`username must have at least ${inputElement.minLength}`)
        isValid = false;
    }else if(!isValidUsername(inputValue)){
        showError(inputElement,`username should not have special characteres`)
        isValid = false;
    }

    elementId = "email"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value.trim();

    cleanError(inputElement);

    if(!isNotEmpty(inputValue)){
        showError(inputElement,'email must not be empty')
        isValid = false; 
    }else if(!isValidEmail(inputValue)){
        showError(inputElement,'email input do not follow default email pattern')
        isValid = false; 
    }

    elementId = "flavour"
    inputElement = document.getElementById(elementId);

    cleanError(inputElement);

    if(!hasCheckedPoint(inputElement)){
        showError(inputElement,'must pick one flavour')
        isValid = false; 
    }

    elementId = "toppings"
    inputElement = document.getElementById(elementId);

    cleanError(inputElement);

    if(!hasCheckedPoint(inputElement)){
        showError(inputElement,'must pick one topping at least')
        isValid = false; 
    }

    elementId = "size"
    inputElement = document.getElementById(elementId);

    cleanError(inputElement);

    if(!isSelected(inputElement)){
        showError(inputElement,'must select one size')
        isValid = false; 
    }

    elementId = "phone"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value.trim();

    cleanError(inputElement);

    if(!isNotEmpty(inputValue)){
        showError(inputElement,'phonenumber must not be empty')
        isValid = false; 
    }else if(!isValidPhoneNumber(inputValue)){
        showError(inputElement,'phonenumber have 10 digits')
        isValid = false;
    }


    elementId = "date"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value;

    cleanError(inputElement);

    if(!isNotEmpty(inputValue)){
        showError(inputElement,'must pick a date to delivery')
        isValid = false; 
    }else if(!isInFuture(inputValue)){
        showError(inputElement,'must pick a day futher today')
        isValid = false;
    }


    elementId = "quantity"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value.trim();

    cleanError(inputElement);

    if(!isNotEmpty(inputValue)){
        showError(inputElement,'quantity must not be empty')
        isValid = false; 
    }else if(!inputNumberValidate(inputElement)){
        showError(inputElement,`the quantity must be beetween ${inputElement.min} and  ${inputElement.max}`)
        isValid = false; 
    }

    return isValid;
}


const form = document.getElementById("main-form");
const submitButton = document.getElementById("submit-button");

function onSubmit(event){
    event.preventDefault();
    
    
    if(validateForm()){

        form.submit();
    }
}

// Event Listeners
form.addEventListener("submit", onSubmit);




