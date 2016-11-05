describe('toBeNull', function() {
	it('passes if subject is null', function() {
		expect(null).toBeNull();
	});

	it('fails if subject is undefined', function() {
		expect(undefined).not.toBeNull();
	});

	it('fails if subject is no null', function() {
		expect({}).not.toBeNull();
	});
});