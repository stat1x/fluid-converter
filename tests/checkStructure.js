describe('getDiv', function() {
	var d = document.querySelector('#fluid-node-to-convert');

	it('Should exist', function() {
		expect(d.nodeName).toBe('TEXTAREA');
	});
});