describe('As a admin i would like to verify Sport, Sport so that i can find everything in sport.', function () {
    it('Verify Sport Categorie', function () {
      // Test steps skrivs här

        cy
            //går till Stadium.se
            .visit('https://www.stadium.se')
            //Verifierar så vi är Stadium
            .contains('Stadium')
            .get('.n2 > :nth-child(2) > :nth-child(4) > :nth-child(1)')
            //Klickar på Sport
            .click()
            .get('[class="breadcrumbs__title"]')
            //Verifierar Sport
            .contains('SPORT')
    })


    it('Verify Sport Categorie', function () {
        // Test steps skrivs här
  
        cy
          //går till Stadium.se
            .visit('https://www.stadium.se')
            //Verifierar så vi är Stadium
            .contains('Stadium')
            .get('.n2 > :nth-child(2) > :nth-child(4) > :nth-child(1)')
            //Klickar på Sport
            .click()
            .get('[class="breadcrumbs__title"]')
            //Verifierar Sport
            .contains('SPORT')
            //KLickar på Löpning
              .get('.content-header > .category-list > #toggler__content--category-list > .category-list__wrapper > .toggler__content--category-list-categories > [title="Löpning"]')
              .click()
              .get('[class="breadcrumbs__title"')
              .contains('Löpning')
  
      })

})