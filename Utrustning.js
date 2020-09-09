describe('As a admin i would like to verify Utrustning, Utrusning so that i can Explore  in Utrusning.', function () {
    it('Verify Utrustning Categorie', function () {
      // Test steps skrivs här

        cy
            //går till Stadium.se
            .visit('https://www.stadium.se')
            //Verifierar så vi är Stadium
            .contains('Stadium')
            .get('.n2 > :nth-child(2) > :nth-child(5) > :nth-child(1)')
            //Klickar på Utrustning
            .click()
            //verifierar Utrustning
            .get('[class="breadcrumbs__title"]')
            .contains('Utrustning')
            
    })

    it('Verify Utrushning Categorie', function () {
        // Test steps skrivs här
  
          cy
              //går till Stadium.se
              .visit('https://www.stadium.se')
              //Verifierar så vi är Stadium
              .contains('Stadium')
              .get('.n2 > :nth-child(2) > :nth-child(5) > :nth-child(1)')
              //Klickar på Utrustning
              .click()
              //verifierar Utrustning
              .get('[class="breadcrumbs__title"]')
              .contains('Utrushning')
            
      })
})