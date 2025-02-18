export default function parseSelector(selector, upper) {
	selector = selector || '';
	var tagName;
	var id = '';
	var classes = [];

	var tagParts = selector.split(/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/);

	if (/^\.|#/.test(tagParts[1]) || selector === '') {
		tagName = 'div';
	}

	var part, type, i;

	for (i = 0; i < tagParts.length; i++) {
		part = tagParts[i];

		if (!part) {
			continue;
		}

		type = part.charAt(0);

		if (!tagName) {
			tagName = part;
		} else if (type === '.') {
			classes.push(part.substring(1, part.length));
		} else if (type === '#') {
			id = part.substring(1, part.length);
		}
	}

	return {
		tagName: upper === true ? tagName.toUpperCase() : tagName,
		id: id,
		className: classes.join(' '),
	};
}
