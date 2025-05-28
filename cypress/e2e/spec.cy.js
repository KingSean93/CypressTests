//Cypress API specs
  it('should return search results for a google book query', () => {
    cy.request({
      method: 'GET',
      url: '/books/v1/volumes?q=harry+potter'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.items).to.be.an('array');
      expect(response.body.items[0].volumeInfo.title).to.include('Harry Potter');
    });
  });

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

    it('Delete and veriy that 1 does not exist', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.eq(1)
    });
  });

  it('Get User Id 3', () =>{
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/',
         headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: {
        id: '1',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.log(response.body[0]);
    });
  });

