/// <reference types="Cypress" />
import { loginPage } from "../page_objects/loginPage";

describe("login tests using POM", () => {
  beforeEach("visit the app and click the login button", () => {
    cy.visit("/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
  });

  it("login with valid credentials", () => {
    cy.intercept({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/auth/login`,
    }).as("validLogin");

    loginPage.login("djordje123@gmail.com", "123djordje");
    cy.wait("@validLogin").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).not.to.be.equal(401);
      expect(interception.response.statusCode).to.be.equal(200);
      expect(interception.response.body.access_token).to.exist;
    });
    cy.url().should("not.contain", "/login");
  });
});