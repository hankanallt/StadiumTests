
describe('As a admin i would like to verify Dam, Damkläder so that i can find Damkläder.', function () {
    it('Verify Damkläder', function () {
      // Test steps skrivs här

        cy
            .visit('https://www.stadium.se')
            .contains('Stadium')
            .get('.n2 > :nth-child(2) > :nth-child(1) > [href="https://www.stadium.se/dam.se29809068"]')
            .click()
            .get('[class="link category-list__category category-list__category-link link--primary "]')
            .contains("Damkläder")
            .click();

            
    })

    
      })
