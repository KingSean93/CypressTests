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

describe('Google API POST Test - Mock Example', () => {
  it('should return 200 for a mock POST endpoint', () => {
    // NOTE: This is a placeholder since Google APIs don't allow general POSTs for search
    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        message: 'Test POST request'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
      expect(response.body.json.message).to.eq('Test POST request');
    });
  });

    it('should handle HTML response from a POST endpoint', () => {
    cy.request({
      method: 'POST',
      url: 'https://postman-echo.com/post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        name: 'Cypress',
        test: 'POST HTML'
      },
      form: true
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
      expect(response.body.form.name).to.eq('Cypress');
    });
  });
});