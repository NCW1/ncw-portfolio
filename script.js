// About Section
const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
	for (tabLink of tabLinks) {
		tabLink.classList.remove("active-link");
	}
	for (tabContent of tabContents) {
		tabContent.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(tabName).classList.add("active-tab");
}

// Side Menu
const sideMenu = document.getElementById("side-menu");

function openMenu() {
	sideMenu.style.right = "0";
}

function closeMenu() {
	sideMenu.style.right = "-200px";
}

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 300) {
		backToTopBtn.style.display = "block";
	}
	else {
		backToTopBtn.style.display = "none";
	}
});

backToTopBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});