var navOpen = false;

$(function () {
	$("#navButton").on("click", () => {
		navOpen = !navOpen;

		if (navOpen) {
			$("#mainNav").addClass("open")
			$("#navButton").attr('aria-expanded', String(navOpen))
		}
		else {
			$("#mainNav").removeClass("open")
			$("#navButton").attr('aria-expanded', String(navOpen))
		}
	})

	SetupTitleObserver()

	const footerYear = $("#currentYear")
	if (footerYear) {
		footerYear.text(new Date().getFullYear());
	}
})


function SetupTitleObserver() {
	const title = document.querySelector('#title');

	window.addEventListener('scroll', () => {
		const rect = title.getBoundingClientRect();

		if (rect.top <= 0) {
			title.classList.add('stuck');
			$("#navInterceptor2").addClass("open")
		} else {
			title.classList.remove('stuck');
			$("#navInterceptor2").removeClass("open")
		}
	});
}