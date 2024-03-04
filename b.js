document.addEventListener("DOMContentLoaded", function() {
	var userLang = navigator.language || navigator.userLanguage;

function updateContent(language) {
	switch(language) {
	    case "en":
		document.getElementById("footerTOStext").textContent = "Terms of Service";
		document.getElementById("footerPPtext").textContent = "Privacy Policy";
		document.getElementById("footerrightstext").textContent = "All rights reserved";
		break;
	    case "cs":
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

