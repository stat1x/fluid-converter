export default class Utilities {
	/**
	 * Checks if the given node (as a string) is a valid fluid node. It has to starts with <myNamespace:myViewHelper...>
	 * and has to be a valid HTML.
	 *
	 * @param fluidNodeRaw
	 * @returns {boolean}
	 */
	static isFluidTag(fluidNodeRaw) {
		let a = document.createElement('div');
		let regex = new RegExp('\<[a-zA-Z]+\:[a-zA-Z]+(.+?)\>');
		a.innerHTML = fluidNodeRaw;
		if (regex.test(fluidNodeRaw)) {
			for (let c = a.childNodes, i = c.length; i--;) {
				if (c[i].nodeType === 1) return true;
			}
		}

		return false;
	}

	/**
	 * Returns the viewhelper name.
	 *
	 * @param fluidNode
	 * @returns {string}
	 */
	static getFluidViewHelperName(fluidNode) {
		return fluidNode[0].tagName;
	}

	/**
	 * Removes all indentation (tab, space) from the given fluid node.
	 *
	 * @param fluidNode
	 * @returns {Array}
	 */
	static sanitizeFluidNode(fluidNode) {
		fluidNode.forEach((tag, index) => {
			if (/\r|\n/.exec(tag.chars)) {
				fluidNode.splice(index, 1);
			}
		});
		return fluidNode;
	}
}