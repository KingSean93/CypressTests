//Cypress API specs

describe('Google Books API Test', () => {
  it('should return search results for a book query', () => {
    cy.request({
      method: 'GET',
      url: '/books/v1/volumes?q=harry+potter'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

