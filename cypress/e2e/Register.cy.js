    describe ("Register page", () => {
        it("visit Gallery app", () => {
            cy.visit("https://gallery-app.vivifyideas.com/");
        })
    


        it("visit Register Page", () => {
            cy.visit("/register");

        });

        it("Register without First name input", () => {
           
                cy.visit("/register");
                cy.get("#last-name").type("zecev");
                cy.get("#email").type("djordje1998@gmail.com");
                cy.get("#password").type("1998djordje");
                cy.get("#password-confirmation").type("1998djordje");
                cy.get(":checkbox").check();
                cy.get("button").click();
                cy.url().should("include", "/register");
        })

        it("Register with incorrect password confirmation", () => {
            cy.visit("/register");
            cy.get("#first-name").type("Djordje");
            cy.get("#last-name").type("zecev");
            cy.get("#email").type("djordje1998@gmail.com");
            cy.get("#password").type("1998djordje");
            cy.get("#password-confirmation").type("199djordje");
            cy.get(":checkbox").check();
            cy.get("button").click();
            cy.url().should("include", "/register");
        })
            
     

        it("Register without .com in email input", () => {
                cy.visit("/register");
                cy.get("#first-name").type("Djordje");
                cy.get("#last-name").type("zecev");
                cy.get("#email").type("djordje1998@gmail");
                cy.get("#password").type("1998djordje");
                cy.get("#password-confirmation").type("1998djordje");
                cy.get(":checkbox").check();
                cy.get("button").click();
                cy.url().should("include", "/register");
        })

        

        it("Register with valid data", () => {
            cy.visit("/register");
            cy.get("#first-name").type("Djordje");
            cy.get("#last-name").type("zecev");
            cy.get("#email").type("djordje1998@gmail.com");
            cy.get("#password").type("1998djordje");
            cy.get("#password-confirmation").type("1998djordje");
            cy.get(":checkbox").check();
            cy.get("button").click();
            cy.url().should("not.include", "/register");
        });
    })