/// <refernce types="Cypress" />
import { registerPage } from "../page_objects/registerPage";
import { faker } from "@faker-js/faker";

describe("register tests with POM", () => {
  const userData = {
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password(8, true) + 1,
    randomNewPassword: faker.internet.password(8, true) + 1,
  };

  beforeEach("visit gallery app and click the register button", () => {
    cy.visit("/");
    registerPage.registerNavbarLink.click();
    cy.url().should("include", "/register");
  });

  

  it("register with valid data", () => {
    cy.intercept({
      method: "POST",
      // url: Cypress.env("apiUrl") + "/auth/register"
      url: `${Cypress.env("apiUrl")}/auth/register`,
    }).as("validRegister");

    registerPage.registerWithValidData(
      userData.randomFirstName,
      userData.randomLastName,
      userData.randomEmail,
      userData.randomPassword
    );
    cy.wait("@validRegister").then((interception) => {
      expect(interception.response.statusCode).eq(200);
      expect(interception.response.statusMessage).eq("OK");
    });
    cy.url().should("not.include", "/register");
  });

  it("register via backend", () => {
    cy.registerViaBackend(
      userData.randomFirstName,
      userData.randomLastName,
      userData.randomEmail,
      userData.randomPassword
    );

    cy.loginViaBackend(userData.randomEmail, userData.randomPassword);
    cy.visit("/");
  });
});