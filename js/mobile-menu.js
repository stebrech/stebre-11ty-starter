// Thanks to https://accessibleweb.dev/navigation

const navButton = document.getElementById("primary-nav-btn");
const disclosure = document.getElementById("primary-nav");
const listItems = disclosure.querySelectorAll("li a");

function openNavigation() {
	navButton.setAttribute("aria-expanded", "true");
	disclosure.classList.remove("hidden-on-mobile");
}

function closeNavigation() {
	navButton.setAttribute("aria-expanded", "false");
	disclosure.classList.add("hidden-on-mobile");
}

function toggleNavigation() {
	const open = navButton.getAttribute("aria-expanded");
	open === "false" ? openNavigation() : closeNavigation();
}

navButton.addEventListener("click", toggleNavigation);

// Close the disclosure if a user presses the escape key
window.addEventListener("keyup", (e) => {
	if (e.key === "Escape") {
		navButton.focus();
		closeNavigation();
	}
});
