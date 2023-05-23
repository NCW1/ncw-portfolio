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

// Submit to Google Sheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbzViTYVOMxpwOg_9dsPiOHR6EcoCtwOl_uoowyIHHNtLPyDkCb9rLX1COHn-d6STki7/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => {
			msg.innerHTML = "Message Sent Successfully!"
			setTimeout(function() {
				msg.innerHTML = ""
			}, 5000)
			form.reset()
		})
		.catch(error => console.error('Error!', error.message))
})