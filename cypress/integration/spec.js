describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', "42")
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/about');
	});
});