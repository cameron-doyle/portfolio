var navOpen = false;

$(function () {
	$("#navButton").on("click", () => {
		if (navOpen)
			CloseNav()
		else
			OpenNav()
	})

	SetupTitleObserver()

	const footerYear = $("#currentYear")
	if (footerYear) {
		footerYear.text(new Date().getFullYear());
	}
})

function OpenNav() {
	navOpen = true;
	$("#mainNav").addClass("open")
	$("#navButton").attr('aria-expanded', String(navOpen))
}

function CloseNav() {
	navOpen = false;
	$("#mainNav").removeClass("open")
	$("#navButton").attr('aria-expanded', String(navOpen))
}


function SetupTitleObserver() {
	const title = document.querySelector('#title');

	window.addEventListener('scroll', () => {
		CloseNav()
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