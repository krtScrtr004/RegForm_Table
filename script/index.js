let errorMsg = ``;

// Event handlers
const MODAL = document.querySelector(`#modal`);

// Submit button
document.querySelector(`#submit_btn`).addEventListener(`click`, submitInfo);

// Enter key press
addEventListener(`keydown`, (event) => {
  if (event.key === `Enter`) {
    submitInfo();
  }
});

// Modal close button
document.querySelector(`.close-btn`).addEventListener(`click`, () => {
  MODAL.style.display = `none`;
});

window.addEventListener(`click`, (event) => {
  console.log(event.target);
  if (event.target == MODAL) {
    MODAL.style.display = `none`;
  }
});

// UTILITY FUNCTIONS

const ALLOWED_NAME_CHARS = /^[a-zA-Z\s`-]+$/; // Allow only letters, spaces, hyphens, and apostrophes

function submitInfo(event) {
  errorMsg = ``;

  const FNAME = document.querySelector(`#fName`).value;
  const LNAME = document.querySelector(`#lName`).value;

  validateFname(FNAME);
  validateLname(LNAME);

  const BDATE = document.querySelector(`#bDate`).valueAsDate;
  if (BDATE) {
    const BDATE_DAY = BDATE.getDate();
    const BDATE_MONTH = BDATE.getMonth() + 1;
    const BDATE_YEAR = BDATE.getFullYear();

    validateBdate(BDATE_DAY, BDATE_MONTH, BDATE_YEAR);
  } else {
    errorMsg += `- Invalid date format \n`;
  }

  const EMAIL = document.querySelector(`#email`).value;
  const PASSWORD = document.querySelector(`#pass`).value;
  const C_PASSWORD = document.querySelector(`#cPass`).value;

  validateEmail(EMAIL);
  validatePassword(PASSWORD);

  if (PASSWORD.localeCompare(C_PASSWORD) !== 0) {
    errorMsg += `- Passwords do not match. \n`;
  }

  if (errorMsg.length > 0) {
    alert(`Errors:\n\n${errorMsg}`);
    event.preventDefault();
  } else {
		MODAL.style.display = `flex`;
    MODAL.style.justifyContent = `center`;
    MODAL.style.alignItems = `center`;
	}
}

// First name validation
function validateFname(NAME) {
  const MIN = 1,
    MAX = 50;
  if (NAME.length < MIN || NAME.length > MAX) {
    errorMsg += `- First Name should be between ${MIN} and ${MAX} characters long. \n`;
  }

  if (!ALLOWED_NAME_CHARS.test(NAME)) {
    errorMsg += `- First Name contains disallowed characters. \n`;
  }
}

// Last name validation
function validateLname(NAME) {
  const MIN = 1,
    MAX = 100;
  if (NAME.length < MIN || NAME.length > MAX) {
    errorMsg += `- Last Name should be between ${MIN} and ${MAX} characters long. \n`;
  }

  if (!ALLOWED_NAME_CHARS.test(NAME)) {
    errorMsg += `- Last Name contains disallowed characters. \n`;
  }
}

// Birth date validation
function validateBdate(DAY, MONTH, YEAR) {
  const TODAY = new Date();
  const MIN_YEAR = 1900,
    MAX_YEAR = TODAY.getFullYear();

  if (YEAR < MIN_YEAR || YEAR > MAX_YEAR) {
    errorMsg += `- Birth date year must be between ${MIN_YEAR} and ${MAX_YEAR}. \n`;
  }

  if (MONTH < 1 || MONTH > 12) {
    errorMsg += `- Birth date month must be between 1 and 12. \n`;
  }

  // Check if the day is valid for the given month and year
  const DAYS_IN_MON = new Date(YEAR, MONTH, 0).getDate(); // Get the number of days in the month
  if (DAY < 1 || DAY > DAYS_IN_MON) {
    errorMsg += `- Birth date day must be between 1 and ${DAYS_IN_MON} for the selected month and year. \n`;
  }

  // Check if the input date is in the future
  const INPUT_DATE = new Date(YEAR, MONTH - 1, DAY);
  if (INPUT_DATE > TODAY) {
    errorMsg += `- Birth date cannot be in the future. \n`;
  }
}

// Email validation
function validateEmail(EMAIL) {
  const MIN = 12,
    MAX = 320;
  const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (EMAIL.length < MIN || EMAIL.length > MAX) {
    errorMsg += `- Email should be between ${MIN} and ${MAX} characters long. \n`;
  }

  if (!EMAIL_PATTERN.test(EMAIL)) {
    errorMsg += `- Invalid email format. \n`;
  }
}

// Password validation
function validatePassword(PASSWORD) {
  const MIN = 8;
  const MAX = 64;

  if (PASSWORD.length < MIN || PASSWORD.length > MAX) {
    errorMsg += `- Password must be between ${MIN} and ${MAX} characters. \n`;
  }

  const LOW_CASE = /[a-z]/;
  const UP_CASE = /[A-Z]/;
  const NUMBERS = /[0-9]/;
  const SPECIAL_CHARS = /[!@#\$%\^&\*\(\)_\+\-=\[\]\{\};:``,<>\.\/?\\|`~]/;

  if (!LOW_CASE.test(PASSWORD)) {
    errorMsg += `- Password must contain at least one lowercase letter. \n`;
  }

  if (!UP_CASE.test(PASSWORD)) {
    errorMsg += `- Password must contain at least one uppercase letter. \n`;
  }

  if (!NUMBERS.test(PASSWORD)) {
    errorMsg += `- Password must contain at least one number. \n`;
  }

  if (!SPECIAL_CHARS.test(PASSWORD)) {
    errorMsg += `- Password must contain at least one special character. \n`;
  }
}
