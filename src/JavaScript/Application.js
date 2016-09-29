import AbstractApplication from "./AbstractApplication";
import * as HTML5Tokenizer from "../Vendors/simple-html-tokenizer/lib/simple-html-tokenizer/index";
import hljs from "highlight.js"

export default class Application extends AbstractApplication {

	constructor() {
		super();
		this.conversionForm = $('#conversion-form');
		this.conversionResult = $('#conversion-result');
		this.fluidNodeToConvert = $('#fluid-node-to-convert');
		this.submitConversion = $('#submit-conversion');
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
		this.fluidNodeToConvert.on('input change', () => {
			if(this.fluidNodeToConvert.val() !== '') {
				this.submitConversion.removeAttr('disabled');
			} else {
				this.submitConversion.attr('disabled', true);
			}
		});

		this.fluidNodeToConvert.keydown((event) => {
			if (event.keyCode === 13 && !event.shiftKey) {
				event.preventDefault();
			}
		});

		this.conversionForm.submit((event) => {
			event.preventDefault();
			this.clearOutput();
			let convertionResult = this.convertFluidTags(this.fluidNodeToConvert.val());
			if(convertionResult !== '') {
				let newBlock = $('<code class="js">' + convertionResult + '</code>');
				this.conversionResult.append(newBlock);
			}
		});
	}

	clearOutput() {
		this.conversionResult.empty();
	}

	convertFluidTags(fluidNodeToConvert) {
		let inline = '';
		let attrs = HTML5Tokenizer.tokenize(fluidNodeToConvert)[0].attributes;
		if(attrs) {
			let viewHelperName = fluidNodeToConvert.split(/(<(.+?) )/)[2];
			inline = '{' + viewHelperName + '(';
			$.each(attrs, (i, attr) => {
				inline += attr[0] + ': \'' + attr[1];
				if (i < attrs.length - 1) {
					inline += '\', ';
				} else {
					inline += '\'';
				}
			});
			inline += ')}';
		} else {
			console.log("oops it doesn't seem to be a fluid tag");
		}

		return inline;
	}
}
