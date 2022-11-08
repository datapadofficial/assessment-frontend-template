/// <reference types="cypress" />

describe("home page", () => {
  it("visibility", () => {
    cy.visit("/");

    // redirects to login page
    cy.location("pathname").should("eq", "/");

    // displays page header
    cy.get("[data-testid='heading']").should("have.text", "Workspaces");
  });
});
