document.addEventListener("DOMContentLoaded", function() {
	var userLang = navigator.language || navigator.userLanguage;

function updateContent(language) {
	switch(language) {
	    case "en":
		document.getElementById("navbarlink1text").textContent = "About us";
		document.getElementById("navbarlink2text").textContent = "Services";
		document.getElementById("navbarlink3text").textContent = "Pricing";
		document.getElementById("navbarlink4text").textContent = "idk bro";

		document.getElementById("navbarbuttontext").textContent = "Contact Us";

		document.getElementById("footerTOStext").textContent = "Terms of Service";
		document.getElementById("footerPPtext").textContent = "Privacy Policy";
		document.getElementById("footerrightstext").textContent = "All rights reserved";
		break;
	    case "cs":
		document.getElementById("navbarlink1text").textContent = "O nás";
		document.getElementById("navbarlink2text").textContent = "Služby";
		document.getElementById("navbarlink3text").textContent = "Ceník";
		document.getElementById("navbarlink4text").textContent = "nevim už";

		document.getElementById("navbarbuttontext").textContent = "Kontaktujte nás";

		document.getElementById("footerTOStext").textContent = "Smluvní podmínky";
		document.getElementById("footerPPtext").textContent = "Ochrana osobních údajů";
		document.getElementById("footerrightstext").textContent = "Všechna práva vyhrazena";
		break;
	}
}

function updateYear(elementId) {
	var currentYear = new Date().getFullYear();
	var yeardisplayelement = document.getElementById(elementId);
	if (yeardisplayelement) {
		yeardisplayelement.textContent = currentYear;
	}
}

updateContent(userLang.substring(0, 2));
updateYear("footeryear");
});

