import AbstractApplication from "./AbstractApplication";
import * as HTML5Tokenizer from "../Vendors/simple-html-tokenizer/lib/simple-html-tokenizer/index";
import hljs from "highlight.js"

export default class Application extends AbstractApplication {

	constructor() {
		super();
		this.conversionForm = $('#conversion-form');
		this.conversionResult = $('#conversion-result');
		this.fluidNodeToConvert = $('#fluid-node-to-convert');
	}

	start() {
		this.initializeConvertForm()
	}

	initializePlugins() {
		this.initializeHljs();
	}

	initializeHljs() {
		$('pre code').each(function(i, block) {
			hljs.highlightBlock(block);
		});
	}

	initializeConvertForm() {
		this.conversionForm.submit((event) => {
			event.preventDefault();
			let convertionResult = this.convertFluidTags(this.fluidNodeToConvert.val());
			let newBlock = $('<code class="js">' + convertionResult + '</code>');
			this.conversionResult.append(newBlock);
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
