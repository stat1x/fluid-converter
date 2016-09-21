import AbstractApplication from "./AbstractApplication";
import * as HTML5Tokenizer from "../Vendors/simple-html-tokenizer/lib/simple-html-tokenizer/index";

export default class Application extends AbstractApplication {
	constructor() {
		super();
	}

	start() {
		Application.initializeConvertForm()
	}

	initializePlugins() {
	}

	static initializeConvertForm() {
		$('#conversion-form').submit((event) => {
			event.preventDefault();
			Application.convertFluidTags();
		});
	}

	static convertFluidTags() {
		var textToConvert = $('#fluid-tag-to-convert').val();
		var viewHelperName = textToConvert.split(/(<(.+?) )/)[2];
		var attrs = HTML5Tokenizer.tokenize(textToConvert)[0].attributes;
		var textConverted = '{' + viewHelperName + '(';
		$.each(attrs, (i, attr) => {
			textConverted += attr[0] + ': \'' + attr[1];
			if (i < attrs.length - 1) {
				textConverted += '\', ';
			} else {
				textConverted += '\'';
			}
		});
		textConverted += ')}';
		$('#conversion-result').html(textConverted).removeClass('hide');
	}
}
