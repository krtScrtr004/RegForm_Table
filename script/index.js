// Change the algorithm of how the modal is displayed to js
// Create a handler when there is an error, do not allow display the modal

let errorMsg = "";
const allowedNameChars = /^[a-zA-Z\s'-]+$/; // Allow only letters, spaces, hyphens, and apostrophes

// Event handler when submit button is clicked
document.querySelectorAll(".button").addEventListener("click", () => {});

// First name validation
function validateFname(NAME) {
  const MIN = 1,
    MAX = 50;
  if (NAME.length < MIN || NAME.length > MAX) {
    errorMsg += `First Name should be between ${MIN} and ${MAX} characters long. \n`;
  }

  if (allowedNameChars.test(NAME)) {
    errorMsg += "First Name contains disallowed characters. \n";
  }
}

// Last name validation
function validateLname(NAME) {
  const MIN = 1,
    MAX = 100;
  if (NAME.length < MIN || NAME.length > MAX) {
    errorMsg += `Last Name should be between ${MIN} and ${MAX} characters long. \n`;
  }

  if (allowedNameChars.test(NAME)) {
    errorMsg += "Last Name contains disallowed characters. \n";
  }
}

// Birth date validation
function validateBdate(DAY, MONTH, YEAR) {
  const TODAY = new Date();
  const MIN_YEAR = 1900,
    MAX_YEAR = TODAY.getFullYear();

  // Check if the year is within the valid range
  if (YEAR < MIN_YEAR || YEAR > MAX_YEAR) {
    errorMsg += `Birth date year must be between ${MIN_YEAR} and ${MAX_YEAR}. \n`;
  }

  // Check if the month is valid
  if (MONTH < 1 || MONTH > 12) {
    errorMsg += "Birth date month must be between 1 and 12. \n";
  }

  // Check if the day is valid for the given month and year
  const DAYS_IN_MON = new Date(YEAR, MONTH, 0).getDate(); // Get the number of days in the month
  if (DAY < 1 || DAY > DAYS_IN_MON) {
    errorMsg += `Birth date day must be between 1 and ${DAYS_IN_MON} for the selected month and year. \n`;
  }

  // Check if the input date is in the future
  const INPUT_DATE = new Date(YEAR, MONTH - 1, DAY);
  if (INPUT_DATE > TODAY) {
    errorMsg += "Birth date cannot be in the future. \n";
  }
}

// Email validation
function validateEmail(EMAIL) {
  const MIN = 12, MAX = 320;
	const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (EMAIL.length < MIN || EMAIL.length > MAX) {
    errorMsg += `Email should be between ${MIN} and ${MAX} characters long. \n`;
  }

	if (!EMAIL_PATTERN.test(EMAIL)) {
    errorMsg += "Invalid email format. \n";
  }
}
