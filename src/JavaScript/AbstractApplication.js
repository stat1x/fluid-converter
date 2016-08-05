export default class AbstractApplication {
	constructor() {
	}

	initializePlugins() {
	}

	start() {
	}

	onScroll(...functions) {
		functions.forEach((f) => {
			$(window).scroll(f);
		});
	}

	onResize(...functions) {
		let windowWidth = $(window).width();
		functions.forEach((f) => {
			if (windowWidth < f.breakPoint) {
				$(window).resize(f.f);
			}
		});
	}
}