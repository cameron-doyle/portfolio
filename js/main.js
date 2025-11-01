var navOpen = true;

$(function () {
	console.log("Hello world")

	$("#navButton").on("click", () => {
		navOpen = !navOpen;

		if(navOpen) {
			$("#navContainer").addClass("open");
			$("#navButton").attr('aria-expanded', String(navOpen));
		}
		else {
			$("#navContainer").removeClass("open");
			$("#navButton").attr('aria-expanded', String(navOpen));
		}
	})

})
