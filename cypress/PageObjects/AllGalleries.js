class AllGalleriesPage {
    get allGalleriesNavbarLink () {
        return cy.get('class="nav-link nav-buttons router-link-exact-active router-link-active"');
    }

    get filterButton () {
        return cy.get("button");
    }

    get searchInput () {
        return cy.get("text");
    }

    get loadMoreButton () {
        return cy.get("btn btn-custom"); //da li ako imamo 2 button-a na stranici drugi mora preko klase da se definise?
    }

    get firstGalleryTitle () {
        return cy.get ("box-title");
    }

    allGalleriesPage (text) {
        this.allGalleriesNavbarLink.click();
        this.filterButton.click();
        this.searchInput.type(text);
        this.loadMoreButton.click();
        this.firstGalleryTitle.click();


    }
}

export const allGalleriesPage = new AllGalleriesPage