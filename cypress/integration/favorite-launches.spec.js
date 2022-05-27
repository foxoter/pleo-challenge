describe("launch item adds to favorites", () => {
  before(() => {
    cy.visit("http://localhost:3000/launches");
  });

  it("should add item to favorites", () => {
    cy.get("[data-cy=launch-item]").first().as("launch-element");
    cy.get("@launch-element").find("[data-cy=star-btn]").click();
    cy.get("[data-cy=fav-drawer-btn]").click();
    cy.get("[data-cy=fav-drawer]").as("favs-drawer");
    cy.get("@favs-drawer").should("be.visible");
    cy.get("@favs-drawer")
      .find("[data-cy=fav-launch]")
      .should("have.length", 1);
  });
});
