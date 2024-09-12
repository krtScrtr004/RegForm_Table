// Change the algorithm of how the modal is displayed to js
// Create a handler when there is an error, do not allow display the modal 


let errorMsg = '';
const allowedNameChars = /^[a-zA-Z\s'-]+$/;     // Allow only letters, spaces, hyphens, and apostrophes

// Event handler when submit button is clicked
document.querySelectorAll('.button').addEventListener('click', () => {
    
});

// First name validation
function validateFname(NAME) {
    const MIN = 1, MAX = 50;
    if (NAME.length < MIN || NAME.length > MAX) {
        errorMsg += `First Name should be between ${MIN} and ${MAX} characters long. \n`;
    }

    if (allowedNameChars.test(NAME)) {
        errorMsg += 'First Name contains disallowed characters. \n';
    }
}

function validateLname(NAME) {
    const MIN = 1, MAX = 100;
    if (NAME.length < MIN || NAME.length > MAX) {
        errorMsg += `Last Name should be between ${MIN} and ${MAX} characters long. \n`;
    }

    if (allowedNameChars.test(NAME)) {
        errorMsg += 'Last Name contains disallowed characters. \n';
    }
}