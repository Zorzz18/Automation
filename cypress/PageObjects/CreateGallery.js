class CreateGallery {
    get createGalleryNavbarLink () {
        return cy.get ("nav-link nav-buttons");
    }

    get titleInput () {
        return cy.get ("#title");

    }

    get descriptionsInput () {
        return cy.get ("#description");

    }

    get imagesInput () {
        return cy.get ("form-control"); //da li je ovde moglo #image-url ako nema id u inspectu?
    }

    get addImageButton () {
        return cy.get ("button");

    }

    get submitButton () {
        return cy.get ("button");

    }

    get cancelButton () {
        return cy.get ("button");

    }

    CreateGallery (title, descritpion, imageurl) {
        this.createGalleryNavbarLink.click ();
        this.titleInput.type (title);
        this.descriptionsInput.type (description);
        this.imagesInput.type (imageurl);
        this.addImageButton.click ();
        this.submitButton.click ();
        this.cancelButton.click ();

    }


}

export const createGallery = new CreateGallery