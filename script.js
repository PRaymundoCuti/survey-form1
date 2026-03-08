/**
 * Validates the signup form.
 *
 * @author: Pablo Raymundo <praymundocuti@rrc.ca>
 * @version: 1.0.0
 *
 */


// functions 

/**
 * @param {input} inputElement.value type text
 * @returns True when input is not empty; otherwise false.
 */
function isNotEmpty(input){
    if(input===""){
        return false;
    }else{
        return true;
    }      
}
/**
 * @param {email} input Element type email
 * @returns True when email follows the @emailPattern ; otherwise false.
 */
function isValidEmail(email){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email)
}
/**
 * @param {username} inputElement.value type text
 * @returns True when username follows the usernamePattern ; otherwise false.
 */
function isValidUsername(username){
    const usernamePattern = /^[a-zA-Z0-9_]+$/;
    return usernamePattern.test(username)
}
/**
 * @param {fieldset} fieldset Element 
 * @returns True when fieldset when one of its inputs is checked ; otherwise false.
 */
function hasCheckedPoint(fieldset){
    const inputList =[...fieldset.querySelectorAll("input")];
    for(let element of inputList ){
        if (element.checked){
            return true;
        }
    }
    return false;
}
/**
 * @param {select} select Element 
 * @returns True when select value is not empty; otherwise false.
 */
function isSelected(select){
    return isNotEmpty(select.value)
}
/**
 * @param {number} inputElement.value type text
 * @returns True when number has 10 digit; otherwise false.
 */
function isValidPhoneNumber(number){
    const PhoneNumberPattern = /^[0-9]{10}$/;
    return PhoneNumberPattern.test(number)
}
/**
 * @param {date} inputElement.value type date
 * @returns True when date is in the future [not today or past days]; otherwise false.
 */
function isInFuture(date){
    const today = new Date();
    today.setHours(0,0,0,0)

    const inputDate =new Date(date);
    inputDate.setHours(1,0,0,0)

    return today<inputDate
}
/**
 * @param {number} input element type number
 * @returns True when input value type number is not empty and 
 * is between his min and max; otherwise false.
 */
function inputNumberValidate(number){
    const numberStr = number.value
    const numberInt = parseInt(numberStr,10)

    const minStr = number.min;  
    const maxStr = number.max;

    const minInt = parseInt(minStr,10)
    const maxInt = parseInt(maxStr,10)

    return isNotEmpty(numberStr) && minInt<=numberInt && maxInt>=numberInt
}
/**
 * display the errors, change the element Aria and style.display of the error corresponded to the element
 * @param {element} element of html
 */
function showError(element,message){
    element.setAttribute("aria-invalid", "true");

    const error=`${element.id}-error`;
    const errorElement=document.getElementById(error);
    errorElement.style.display = "block";
    errorElement.textContent = message
}

/**
 * hide the errors, change the element Aria and style.display of the error corresponded to the element
 * @param {element} element of html
 */
function cleanError(element){
    element.setAttribute("aria-invalid", "false");

    const error=`${element.id}-error`;
    const errorElement=document.getElementById(error);
    errorElement.style.display = "none";
}

/**
 * Returns true when all form elements are valid; otherwise false.
 * @returns True when all form elements are valid; otherwise false.
 */
function validateForm(){
//creation of return container
    let isValid = true

// username element
    let elementId = "username"
    let inputElement = document.getElementById(elementId);
    let inputValue = inputElement.value.trim();

    //clean of error
    cleanError(inputElement);

    //validation of username
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
// email element
    elementId = "email"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value.trim();

    //clean of error
    cleanError(inputElement);

    //validation of email
    if(!isNotEmpty(inputValue)){
        showError(inputElement,'email must not be empty')
        isValid = false; 
    }else if(!isValidEmail(inputValue)){
        showError(inputElement,'email input do not follow default email pattern')
        isValid = false; 
    }

// flavour element
    elementId = "flavour"
    inputElement = document.getElementById(elementId);

    //clean of error
    cleanError(inputElement);

    //validation of flavour
    if(!hasCheckedPoint(inputElement)){
        showError(inputElement,'must pick one flavour')
        isValid = false; 
    }
// toppings element
    elementId = "toppings"
    inputElement = document.getElementById(elementId);

    //clean of error
    cleanError(inputElement);

    //validation of toppings
    if(!hasCheckedPoint(inputElement)){
        showError(inputElement,'must pick one topping at least')
        isValid = false; 
    }
// size element
    elementId = "size"
    inputElement = document.getElementById(elementId);

    //clean of error
    cleanError(inputElement);

    //validation of size
    if(!isSelected(inputElement)){
        showError(inputElement,'must select one size')
        isValid = false; 
    }
// phone element
    elementId = "phone"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value.trim();

    //clean of error
    cleanError(inputElement);

    //validation of phone
    if(!isNotEmpty(inputValue)){
        showError(inputElement,'phonenumber must not be empty')
        isValid = false; 
    }else if(!isValidPhoneNumber(inputValue)){
        showError(inputElement,'phonenumber have 10 digits')
        isValid = false;
    }

// date element
    elementId = "date"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value;

    //clean of error
    cleanError(inputElement);

    //validation of date
    if(!isNotEmpty(inputValue)){
        showError(inputElement,'must pick a date to delivery')
        isValid = false; 
    }else if(!isInFuture(inputValue)){
        showError(inputElement,'must pick a day futher today')
        isValid = false;
    }

// quantity element
    elementId = "quantity"
    inputElement = document.getElementById(elementId);
    inputValue = inputElement.value.trim();

    //clean of error
    cleanError(inputElement);

    //validation of quantity
    if(!isNotEmpty(inputValue)){
        showError(inputElement,'quantity must not be empty')
        isValid = false; 
    }else if(!inputNumberValidate(inputElement)){
        showError(inputElement,`the quantity must be beetween ${inputElement.min} and  ${inputElement.max}`)
        isValid = false; 
    }


    return isValid;
}

// getting form and button element
const form = document.getElementById("main-form");
const submitButton = document.getElementById("submit-button");


/**
 * Handles the submit event of the form.
 * @param {Event} event Contains information about the event.
 */
function onSubmit(event){
    event.preventDefault();
    if(validateForm()){
        form.submit();
    }
}

// Event listener
form.addEventListener("submit", onSubmit);




