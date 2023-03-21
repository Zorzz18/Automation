
import { allGalleriesPage } from "../PageObjects/allGalleries";
import { loginPage } from "../PageObjects/loginPage";

describe("all galleries page test", () => {
    beforeEach("visit gallery app and log in", => {
        cy.visit("/login");
        loginPage.login("djordje123@gmail.com", "123djordje");
        cy.url().should("not.include", "/login");
    });

    it("all galleries succesfuly loaded", () => {
        allGalleries.allGalleriesHeading
        .should("be.visible")
        .and("have.text", "All Galleries");
        cy.get("button").should("have.length", 2)
      });
  
    it("test pagination", () => {
          allGalleries.allGalleries.should("be.visible").and("have.length", 10);
          allGalleries.loadMoreBtn.click();
          allGalleries.allGalleries.should("be.visible").and("have.length", 20);
          allGalleries.loadMoreBtn.click();
          allGalleries.allGalleries.should("be.visible").and("have.length", 30);
        });
      
    it("test search", () => {
          allGalleries.search("gggggg");
          allGalleries.allGalleries.should("be.visible");
          cy.wait(500)
          allGalleries.singleGalleryHeading.click()
          cy.get("h1").should("have.text", "searchTerm")
        });
  })



   