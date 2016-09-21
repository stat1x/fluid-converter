import AbstractApplication from "./AbstractApplication";
import * as HTML5Tokenizer from "../Vendors/simple-html-tokenizer/lib/simple-html-tokenizer/index";

export default class Application extends AbstractApplication {

	constructor() {
		super();
		this.conversionForm = $('#conversion-form');
		this.conversionResult = $('#conversion-result');
	}

	start() {
		this.initializeConvertForm()
	}

	initializePlugins() {
	}

	initializeConvertForm() {
		this.conversionForm.submit((event) => {
			event.preventDefault();
			this.conversionResult.html(this.convertFluidTags($('#fluid-tag-to-convert').val())).removeClass('hide');
		});
	}

	convertFluidTags(textToConvert) {
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
		return textConverted;

	}
}
