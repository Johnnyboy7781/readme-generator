const checkImgPath = path => {
    path = path.trim();
    let tempPath = "";

    for (let i = path.length - 1; i >= 0; i--) {
        if (path[i] === " ") { // No spaces allowed
            console.log(" || Invalid path, no spaces allowed");
            return false;
        } else if (path[i] === "\"" || path[i] === "'" || path[i] === "`") {
            console.log(" || Invalid path, no quotations allowed");
            return false;
        }
        tempPath += path[i];
    }

    if (tempPath[3] !== ".") {
        console.log(" || Invalid path, no file type detected");
        return false; // Invalid filetype
    }

    let reversedFileType = tempPath.substring(0, 3);
    reversedFileType = reversedFileType.toLowerCase();

    if (reversedFileType === "gvs") {
        console.log(" || Accepted");
        return true;
    } else if (reversedFileType === "gnp") {
        console.log(" || Accepted");
        return true;
    } else if (reversedFileType === "gpj") {
        console.log(" || Accepted");
        return true;
    }

    console.log(" || Invalid path, your file type is not supported");
    return false;
}

const validate = (inputToValidate, inputType = 'input') => {
    if (inputType === 'screenshot') {
        return checkImgPath(inputToValidate);
    } else if (inputToValidate) {
        return true;
    } else {
        console.log("This field is required! Please try again.");
        return false;
    }
}

module.exports = validate;