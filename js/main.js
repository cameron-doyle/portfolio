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

	window.addEventListener('hashchange', Navigate)

	Navigate() //Navigate on page load
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

function Navigate() {
	let page = location.hash

	//If no hash, set hash and exit
	if (!page) {
		location.hash = "#Home"
		return //This prevents the code executing twice from the event listener trigger
	}

	ShowPage(page)
}

function ShowPage(page) {
	$("#Home").hide()
	$("#Portfolio").hide()
	$("#About").hide()
	$("#Contacts").hide()

	$(`a[href*="#Home"]`).removeAttr("aria-current");
	$(`a[href*="#Portfolio"]`).removeAttr("aria-current");
	$(`a[href*="#About"]`).removeAttr("aria-current");
	$(`a[href*="#Contacts"]`).removeAttr("aria-current");

	$(page).show()
	$(`a[href*="${page}"]`).attr("aria-current","page");
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