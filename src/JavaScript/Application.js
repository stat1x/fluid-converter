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
			this.conversionResult
				.html(this.convertFluidTags($('#fluid-node-to-convert').val())).removeClass('hide');
		});
	}

	convertFluidTags(fluidNodeToConvert) {
		var viewHelperName = fluidNodeToConvert.split(/(<(.+?) )/)[2];
		var attrs = HTML5Tokenizer.tokenize(fluidNodeToConvert)[0].attributes;
		var inline = '{' + viewHelperName + '(';
		$.each(attrs, (i, attr) => {
			inline += attr[0] + ': \'' + attr[1];
			if (i < attrs.length - 1) {
				inline += '\', ';
			} else {
				inline += '\'';
			}
		});
		inline += ')}';
		return inline;
	}
}
