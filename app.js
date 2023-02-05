const cardCvv = document.querySelector(".cvv");
const cardNum = document.querySelector(".card-num");

const cardName = document.querySelector(".card-name");
const expMon = document.querySelector(".exp-mon");
const expYr = document.querySelector(".exp-yr");

const confirmBtn = document.querySelector(".confirm");
const continueBtn = document.querySelector(".continue");

const completed = document.querySelector(".completed-state");
const inputForm = document.querySelector(".input-form");

// ! INPUT FORMS
const nameInput = document.querySelector(".name");
const numInput = document.querySelector(".card-number");
const cvvInput = document.querySelector(".cvc-box");
const dMonInput = document.querySelector(".date-month");
const dYrInput = document.querySelector(".date-year");

// ! INPUT FORMS

// ! INITIAL INPUT VALUES

let nameInputVal = "jane appleseed";
let numInputVal = `0000 0000 0000 0000`;
let dMonInputVal = "00";
let dYrInputVal = "00";
let cvvInputVal = "000";

// ! INITIAL INPUT VALUES

// ! ERR VAL

const cardNumErr = document.querySelector(".card-num-err");
const dateErr = document.querySelector(".date-err");
const cvcErr = document.querySelector(".cvc-err");
// ! ERR VAL

let completedPage = inputForm.classList.contains("hidden");
let inputFormPage = completed.classList.contains("hidden");

// ! CREATE A FUNCTION THAT VALIDATES ON KEY UP

// ! CREATE A FUNCTION THAT UPDATES ON KEY PRESS

// ! CREATE A FUNCTION THAT SWITCHES THE HIDDEN CLASS

// ! FUNCTION THAT WIPES ALL ENTRIES

// ! FUNCTION THAT WIPES ALL ENTRIES

confirmBtn.addEventListener("click", (event) => {
	event.preventDefault();
	//! ADD A FUNCTION THAT RUNS THE CODE BELOW ONLY IF THE FORM IS CORRECT
	checkForErr();

	if (
		nameInput.value !== "" &&
		cvvInput.value !== "" &&
		cvvInput.value.length === 3
	) {
		if (inputFormPage) {
			completed.classList.remove("hidden");
			inputForm.classList.add("hidden");
		}
	}
});

continueBtn.addEventListener("click", () => {
	//! ADD A FUNCTION THAT CLEARS THE FORM
	let completedPage = inputForm.classList.contains("hidden");

	if (completedPage) {
		completed.classList.add("hidden");
		inputForm.classList.remove("hidden");

		nameInputVal = "jane appleseed";
		numInputVal = `0000 0000 0000 0000`;
		dMonInputVal = "00";
		dYrInputVal = "00";
		cvvInputVal = "000";

		nameInput.value = "";
		numInput.value = "";
		cvvInput.value = "";
		dMonInput.value = "";
		dYrInput.value = "";

		displayItems();
	}
});

// ! CARD NAME

cardName.textContent = nameInputVal;

nameInput.addEventListener("keyup", () => {
	if (nameInput.length === 0 || nameInput.value === "") {
		nameInputVal = "jane appleseed";
		cardName.textContent = nameInputVal;
	} else {
		nameInputVal = nameInput.value;
		cardName.textContent = nameInputVal;
	}

	checkForErr();
});

// ! CARD NAME

// ! CARD NUMBER
cardNum.textContent = numInputVal;

numInput.addEventListener("keyup", () => {
	if (numInput.value === "") {
		numInputVal = `0000 0000 0000 0000`;
		cardNum.textContent = numInputVal;
	} else {
		numInputVal = numInput.value;
		cardNum.textContent = numInputVal;
	}
});

// ! CARD NUMBER

// ! CARD EXP DATE
expMon.textContent = dMonInputVal;
expYr.textContent = dYrInputVal;

dMonInput.addEventListener("keyup", () => {
	if (dMonInput.value === "") {
		dMonInputVal = "00";
		expMon.textContent = dMonInputVal;
	} else if (
		dMonInput.value < 10 &&
		dMonInput.value > 0 &&
		dMonInput.value.length < 2 &&
		dMonInput.value != 1
	) {
		dMonInputVal = `0${dMonInput.value}`;
		dMonInput.value = `0${dMonInput.value}`;
		expMon.textContent = dMonInputVal;
	} else if (dMonInput.value > 12) {
		dMonInput.value = 12;
		dMonInputVal = 12;
		expMon.textContent = dMonInputVal;
	} else {
		dMonInputVal = dMonInput.value;
		expMon.textContent = dMonInputVal;
	}

	if (dMonInput.value.length > 1) {
		dYrInput.focus();
	}
	checkForErr();
});

dYrInput.addEventListener("keyup", () => {
	if (dYrInput.value === "") {
		dYrInputVal = "00";
		expYr.textContent = dYrInputVal;
	} else {
		dYrInputVal = dYrInput.value;
		expYr.textContent = dYrInputVal;
	}

	if (dYrInput.value.length > 1) {
		cvvInput.focus();
	}

	console.log(dYrInput.value);

	checkForErr();
});

// ! CARD EXP DATE

// ! CARD CVV

cardCvv.textContent = cvvInputVal;

cvvInput.addEventListener("keyup", () => {
	if (cvvInput.length === 0 || cvvInput.value === "") {
		cvvInputVal = "000";
		cardCvv.textContent = cvvInputVal;
	} else {
		cvvInputVal = cvvInput.value;
		cardCvv.textContent = cvvInputVal;
	}
	checkForErr();
});

// ! CARD CVV

// ! CHECK FOR ERR

function checkForErr() {
	// ! CHECK CVC
	if (cvvInputVal === "000") {
		cvcErr.classList.add("cn-txt-err");
		cvvInput.classList.add("cn-err");
	} else {
		cvcErr.classList.remove("cn-txt-err");
		cvvInput.classList.remove("cn-err");
	}
	// ! CHECK DATE
	if (dMonInputVal === "00") {
		dateErr.classList.add("cn-txt-err");
		dMonInput.classList.add("cn-err");
	} else {
		dateErr.classList.remove("cn-txt-err");
		dMonInput.classList.remove("cn-err");
	}

	if (dYrInputVal === "00") {
		dateErr.classList.add("cn-txt-err");
		dYrInput.classList.add("cn-err");
	} else {
		dateErr.classList.remove("cn-txt-err");
		dYrInput.classList.remove("cn-err");
	}

	// ! CHECK CARD NUMBER
}

// ! CHECK FOR ERR

// ! DISPLAY EV
const displayItems = () => {
	cardName.textContent = nameInputVal;

	cardNum.textContent = numInputVal;

	expMon.textContent = dMonInputVal;

	expYr.textContent = dYrInputVal;
	cardCvv.textContent = cvvInputVal;
};
// ! DISPLAY EV
