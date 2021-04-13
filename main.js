let age_calculator;
document.addEventListener("DOMContentLoaded", function () {
	age_calculator = document.querySelector(".calculator .age");
	const age_field = age_calculator.querySelector("input");

	age_field.addEventListener("change", age_input_listener);
	age_field.addEventListener("keyup", age_input_listener);
});

function age_input_listener(e) {
	// const age = age.querySelector("input").value;
	let age = e.target.value;

	if (age === "") {
		return false;
	}

	age = parseInt(age); // if the age is not blank, ensure it is an integer
	eligibility(age);
}

function eligibility(age) {
	if (age < 16) {
		ageYoung();
	}
	if (age === 16) {
		ageTeen();
	}
	if (age === 17) {
		ageTeen();
	}
	if (age > 17) {
		ageAdult();
	}
}

function clearActive() {
	document.querySelectorAll(".calc .active").forEach(function (ele) {
		ele.classList.remove("active");
	});
}

function ageYoung() {
	console.log("Calling age young");
	clearActive();
	document.querySelector(".calc .young").classList.add("active")
}

function ageTeen() {
	clearActive();
	document.querySelector(".calc .teen").classList.add("active")
}

function ageAdult() {
	clearActive();
	document.querySelector(".calc .adult").classList.add("active")
}