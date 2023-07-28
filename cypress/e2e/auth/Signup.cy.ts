describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/signup');
  });

  it('Load the signup page', () => {
    cy.get('h5').should('contain', 'Create an account');
  });

  it('Validations', () => {
    cy.get('[data-testid="submitbutton"]').click();
    cy.get('p').should('contain', 'Password is required');
    cy.get('p').should('contain', 'Business email is required');
    cy.get('p').should('contain', 'Confirm Password is required');
    cy.get('p').should('contain', 'Signup code is required');
  });

  it('Redirect to Login page', () => {
    cy.contains('Log in').click();
    cy.get('h5').should('contain', 'Log In');
  });

  it('Confirm password should match password signup', () => {
    cy.get('[data-testid="username"]').type('testuser@gmail.com');
    cy.get('[data-testid="password"]').type('password');
    cy.get('[data-testid="confirmpassword"]').type('confirmpassword');
    cy.get('[data-testid="signupcode"]').type('random_code');
    cy.get('[data-testid="submitbutton"]').click();
    cy.get('p').should('contain', 'Passwords do not match');
  });

  it('Invalid signup code', () => {
    cy.get('[data-testid="username"]').type('testuser@gmail.com');
    cy.get('[data-testid="password"]').type('password');
    cy.get('[data-testid="confirmpassword"]').type('password');
    cy.get('[data-testid="signupcode"]').type('random_code');
    cy.get('[data-testid="submitbutton"]').click();
    cy.get('div').should('contain', 'That is not the right signup code');
  });
});
