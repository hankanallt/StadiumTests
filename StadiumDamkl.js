
describe('As a admin i would like to verify Dam, Damkläder so that i can find Damkläder.', function () {
    it('Verify Damkläder', function () {
      // Test steps skrivs här

        cy
            //går till Stadium.se
            .visit('https://www.stadium.se')
            //Verifierar så vi är Stadium
            .contains('Stadium')
            .get('.n2 > :nth-child(2) > :nth-child(1) > [href="https://www.stadium.se/dam.se29809068"]')
            //Klickar på Dam högst upp på menyn
            .click()
            .get('[class="link category-list__category category-list__category-link link--primary "]')
            //Klickar på Damkläder
            .contains("Damkläder")
            //Verifierar Damkläder
            .click();
  
    })
    it('Verify Damklader', function () {
      // Test steps skrivs här

    cy
        //går till Stadium.se
        .visit('https://www.stadium.se')
        //Verifierar så vi är Stadium
        .contains('Stadium')
        .get('.n2 > :nth-child(2) > :nth-child(1) > [href="https://www.stadium.se/dam.se29809068"]')
        //Klickar på Dam högst upp på menyn
        .click()
        .get('[class="link category-list__category category-list__category-link link--primary "]')
        //Klickar på Damkläder
        .contains("Damklader")
        //Verifierar Damkläder
        .click();
    
      })
    })
