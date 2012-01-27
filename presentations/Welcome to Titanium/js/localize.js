// Localize all HTML elements that have a class with the prefix l_
(function() {
	String.locale = document.documentElement.lang || String.locale || 'en-US';
	var localize = function (string, fallback) {
		var localized = string.toLocaleString();
		if (localized !== string) {
			return localized;
		} else {
			return fallback;
		}
	};

	var classPrefix = 'l_';
	var hasClassName = new RegExp("(?:^|\\s)(" + classPrefix + "[^\\s]+)");
	var allElements = document.getElementsByTagName("*");
	var results = [];

	var element;
	for (var i = 0; (element = allElements[i]) != null; i++) {
		var elementClass = element.className;
		if (elementClass && elementClass.indexOf(classPrefix) != -1 && (match = hasClassName.exec(elementClass))) {
			element.innerHTML = localize("%" + match[1], element.innerHTML);
		}
	}
})();