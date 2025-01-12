const htmlEscapes = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#39;',
};

const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

export default function escape(string) {
	return string && reHasUnescapedHtml.test(string)
		? string.replace(reUnescapedHtml, chr => htmlEscapes[chr])
		: string || '';
}
