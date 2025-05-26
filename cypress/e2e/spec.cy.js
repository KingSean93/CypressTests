//Cypress API specs

describe('Google Books API Test for 200 response and not 201', () => {
  it('should return search results for a book query', () => {
    cy.request({
      method: 'GET',
      url: '/books/v1/volumes?q=harry+potter'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.status).to.not.eq(201);
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
        //Post this message
        message: 'Test POST request'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');

      //The message should equal the one sent
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
        //Cypres is the name and will be asserted later
        name: 'Cypress',
        test: 'POST HTML'
      },
      form: true
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
      //We expect Cypress as the name from before
      expect(response.body.form.name).to.eq('Cypress');
    });
  });
});