const checkEmail = email => {
    let hasPeriod = false, hasAt = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === ".") {
            hasPeriod = true;
        } else if (email[i] === "@") {
            hasAt = true;
        }
    }

    if (hasPeriod && hasAt) {
        console.log(" || Accepted");
        return true;
    }

    if (!hasAt) {
        console.log(" || Invalid email, no '@' detected");
    } else if (!hasPeriod) {
        console.log(" || Invalid email, no '.' detected");
    }
    
    return false;
}

const validate = (inputToValidate, inputType = 'input') => {
    if (inputType === 'screenshot') {
        console.log(" || Don't forget to add the screenshot file later!");
        return true;
    } else if (inputType === 'email') {
        return checkEmail(inputToValidate);
    } else if (inputToValidate) {
        return true;
    } else {
        console.log("This field is required! Please try again.");
        return false;
    }
}

module.exports = validate;