/**
 * @param {string}[delimiter]
 * @returns {import('./index.d.ts').csv__regex_T}
 * @private
 */
export function csv__regex_(delimiter = ',') {
	return (
		new RegExp(
			// Delimiters.
			'(\\' + delimiter + '|\\r?\\n|\\r|^)' +
			// Quoted fields.
			'(?:"([^"]*(?:""[^"]*)*)"|' +
			// Standard fields.
			'([^"\\' + delimiter + '\\r\\n]*))',
			'gi'))
}
