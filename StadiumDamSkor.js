describe('As a admin i would like to verify Dam, Damskor so that i can find Damskor.', function () {
    
//Positiv Test

    it('Test2', function () {
        cy
        .visit('https://www.stadium.se')
        //Verifierar att vi är på Stadium
        .contains('Stadium')
        .get('.n2 > :nth-child(2) > :nth-child(1) > [href="https://www.stadium.se/dam.se29809068"]')
        //klickar på Dam
        .click()
        .get('[class="link category-list__category category-list__category-link link--primary "]')
        //Klickar på Damskor
        .contains("Damskor")
        //Verifierar att vi är inne på Damskor
        .click();       
    })

//Negativ Test

    it('Verify Damkskr', function () {
        // Test steps skrivs här
   
   cy
        .visit('https://www.stadium.se')
        //Verifierar att vi är på Stadium
        .contains('Stadium')
        .get('.n2 > :nth-child(2) > :nth-child(1) > [href="https://www.stadium.se/dam.se29809068"]')
        //klickar på Dam
        .click()
        .get('[class="link category-list__category category-list__category-link link--primary "]')
        //Klickar på Damskor
        .contains("Damskr")
        //Verifierar att vi är inne på Damskor
        .click();       
      })
  })