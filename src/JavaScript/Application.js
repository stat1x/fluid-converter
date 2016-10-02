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
		this.fluidNodeError = $('#fluid-node-error');
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
				this.fluidNodeError.empty();
			} else if (!Utilities.isFluidNode(this.fluidNodeToConvert.val())) {
				this.submitConversion.attr('disabled', true);
				this.fluidNodeError.html('This is not a valid fluid node');
			} else {
				this.submitConversion.removeAttr('disabled');
				this.fluidNodeError.empty();
			}
		});

		this.conversionForm.on('submit', (event) => {
			event.preventDefault();
			this.clearOutput();
			let fluidNode = HTML5Tokenizer.tokenize(this.fluidNodeToConvert.val());
			let convertionResult = Utilities.convertFluidNode(Utilities.sanitizeFluidNode(fluidNode));
			if (convertionResult !== '') {
				let newBlock = $('<code class="js">' + convertionResult + '</code>');
				this.conversionResult.append(newBlock);
			}
			this.initializeHljs();
		});
	}

	/**
	 * Clears the output
	 */
	clearOutput() {
		this.conversionResult.empty();
	}
}
