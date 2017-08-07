import AbstractApplication from "./AbstractApplication";
import Utilities from "./Utilities";
import * as HTML5Tokenizer from "simple-html-tokenizer";
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
		this.fluidExample = $('#fluid-example');
	}

	/**
	 * Starts the app
	 */
	start() {
		this.initializeConvertForm();
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
				this.resetForm();
			} else if (!Utilities.isFluidNode(this.fluidNodeToConvert.val())) {
				this.submitConversion.attr('disabled', true);
				this.fluidNodeToConvert.addClass('form-control-danger').parent().addClass('has-danger');
				this.fluidNodeError.html('This is not a valid fluid node');
				this.fluidExample.text('A fluid node should look like this : <myNamespace:myViewhelper myAttr="myVal"/>');
			} else {
				this.submitConversion.removeAttr('disabled');
				this.resetForm();
			}
		});

		this.conversionForm.on('submit', (event) => {
			event.preventDefault();
			this.clearOutput();
			let fluidNode = HTML5Tokenizer.tokenize(this.fluidNodeToConvert.val());
			let convertionResult = Utilities.convertFluidNode(Utilities.sanitizeFluidNode(fluidNode));
			if (convertionResult !== '') {
				let newBlock = $('<code class="css">' + convertionResult + '</code>');
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

	/**
	 * Resets the form
	 */
	resetForm() {
		this.fluidNodeToConvert.removeClass('form-control-danger').parent().removeClass('has-danger');
		this.fluidNodeError.empty();
		this.fluidExample.empty();
	}
}
