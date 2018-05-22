describe('Just a test', () => {
	it ('should open up a page', () => {
		cy.visit('http://localhost:8080/');
		cy.title().should('include', 'React');
	});
});