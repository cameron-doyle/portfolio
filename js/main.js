var navOpen = false;

$(function () {
	console.log("Hello world")

	$("#navButton").on("click", () => {
		navOpen = !navOpen;

		if (navOpen) {
			$("#mainNav").addClass("open");
			$("#navButton").attr('aria-expanded', String(navOpen));
		}
		else {
			$("#mainNav").removeClass("open");
			$("#navButton").attr('aria-expanded', String(navOpen));
		}
	})

	SetupTitleObserver()
})



function SetupTitleObserver() {
	const title = document.querySelector('.title');

	window.addEventListener('scroll', () => {
		const rect = title.getBoundingClientRect();

		if (rect.top <= 0) {
			title.classList.add('stuck');
		} else {
			title.classList.remove('stuck');
		}
	});
}