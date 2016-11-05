describe('getDiv', function() {
	var d = document.querySelector('#fluid-node-to-convert'),
		e = document.querySelector('#fluid-node-error');

	it('Should exist', function() {
		expect(d.nodeName).toBe('TEXTAREA');
		expect(e.nodeName).toBe('P');
	});
});