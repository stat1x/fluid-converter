import AbstractApplication from "./AbstractApplication";
import Utilities from "./Utilities";
import * as HTML5Tokenizer from "../Vendors/simple-html-tokenizer/lib/simple-html-tokenizer/index";
import hljs from "highlight.js";

export default class Application extends AbstractApplication {

	/**
	 * Constructor of the app
	 */
	constructor() {
		super();
		this.conversionForm = $('#conversion-form');
		this.conversionResult = $('#conversion-result');
		this.fluidNodeToConvert = $('#fluid-node-to-convert');
		this.submitConversion = $('#submit-conversion');
	}

	/**
	 * Starts the app
	 */
	start() {
		this.initializeConvertForm()
	}

	/**
	 * Initializes plugins
	 */
	initializePlugins() {
		this.initializeHljs();
	}

	/**
	 * Initializes Hightlightjs plugin
	 */
	initializeHljs() {
		$('pre code').each(function (i, block) {
			hljs.highlightBlock(block);
		});
	}

	/**
	 * Initializes the convert form
	 */
	initializeConvertForm() {
		this.fluidNodeToConvert.on('input change', () => {
			if (this.fluidNodeToConvert.val() === '') {
				this.submitConversion.attr('disabled', true);
			} else if (!Utilities.isFluidTag(this.fluidNodeToConvert.val())) {
				this.submitConversion.attr('disabled', true);
				// @TODO Display error message
				console.log("Ooops this is not a valid fluid tag");
			} else {
				this.submitConversion.removeAttr('disabled');
			}
		});

		this.conversionForm.on('submit', (event) => {
			event.preventDefault();
			this.clearOutput();

			let fluidNode = HTML5Tokenizer.tokenize(this.fluidNodeToConvert.val());
			let convertionResult = this.convertFluidNode(Utilities.sanitizeFluidNode(fluidNode));
			if (convertionResult !== '') {
				let newBlock = $('<code class="js">' + convertionResult + '</code>');
				this.conversionResult.append(newBlock);
			}
		});
	}

	/**
	 * Clears the output
	 */
	clearOutput() {
		this.conversionResult.empty();
	}

	/**
	 * Converts a fluid node to its inline notation
	 *
	 * @param fluidNodeToConvert
	 * @returns {string}
	 */
	convertFluidNode(fluidNodeToConvert) {
		let inline = '';
		let attrs = fluidNodeToConvert[0].attributes;

		if (attrs) {
			let viewHelperName = Utilities.getFluidViewHelperName(fluidNodeToConvert);
			if(viewHelperName) {
				inline = '{' + viewHelperName + '(';
				$.each(attrs, (i, attr) => {
					inline += attr[0] + ': \'' + attr[1];
					if (i < attrs.length - 1) {
						inline += '\', ';
					} else {
						inline += '\'';
					}
				});
				if(viewHelperName === 'f:if' && fluidNodeToConvert[1]) {
					inline += ', then: \'' + fluidNodeToConvert[2].chars + '\', ';
					if(fluidNodeToConvert[4]) {
						inline += 'else: \'' + fluidNodeToConvert[5].chars + '\'';
					}
				}
				inline += ')}';
			}
		}

		return inline;
	}
}
