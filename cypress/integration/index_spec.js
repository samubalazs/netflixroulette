describe('Displaying the list-change clicked on the sortby options', () => {

	it ('should change the order by release date', () => {
		cy.visit('http://localhost:8080/');
		cy.get('.navbar-right').find('li a').contains('release date').as('sortByReleaseDate');
		cy.get('@sortByReleaseDate').click();
	});

	it ('should change the order by rating', () => {
		cy.visit('http://localhost:8080/');
		cy.get('.navbar-right').find('li a').contains('rating').as('sortByRating');
		cy.get('@sortByRating').click();
	});
});
