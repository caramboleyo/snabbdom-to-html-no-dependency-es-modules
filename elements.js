// All SVG children elements, not in this list, should self-close

export const CONTAINER = {
	// http://www.w3.org/TR/SVG/intro.html#TermContainerElement
	a: true,
	defs: true,
	glyph: true,
	g: true,
	marker: true,
	mask: true,
	'missing-glyph': true,
	pattern: true,
	svg: true,
	switch: true,
	symbol: true,
	text: true,
	clipPath: true,
	linearGradient: true,

	style: true,
	script: true,

	// http://www.w3.org/TR/SVG/intro.html#TermDescriptiveElement
	desc: true,
	metadata: true,
	title: true,
};

// http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements

export const VOID = {
	area: true,
	base: true,
	br: true,
	col: true,
	embed: true,
	hr: true,
	img: true,
	input: true,
	keygen: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true,
};

export const UNESCAPED = {
	script: true,
};
