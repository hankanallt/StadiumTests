describe('As a Custmoer i would like to look for a shop placed in Skärholmen so that i can get the address of the shop.', function () {
    
    //Test1 Positive

    it(' Skärholmen Shop', function () {
      // Test steps skrivs här

        cy
            //går till Stadium.se
            .visit('https://www.stadium.se')
            //Verifierar så vi är på Stadium
            .contains('Stadium')
            .clearCookies()     // clear all cookies
            .get('.n2-l1-links > :nth-child(4) > .link')
            //Klickar på butiker
            .click()
            .get('[class="title"]')
            //Verifierar titeln våra butiker.
            .contains('Våra butiker')
            //Klickar på Dropdown menyn
            .get('.store-list-wrapper')
            //Scrollar ner till namn som börjar på S
            .scrollTo('0%', '70%')
            //Väljer Skörholmen
            .get('[data-uuid="dEUKRMHB1DMAAAFPdcJmtgJG"]')
            //Klickar Skörholmen
            .click()
            .get('.active > h3 > strong')
            .contains('Stadium Skärholmen')

    })
    //Test2 Negative 

    it('Verify shop Skarholmen', function () {
        // Test steps skrivs här
  
        cy
        //går till Stadium.se
        .visit('https://www.stadium.se')
        //Verifierar så vi är på Stadium
        .contains('Stadium')
        .clearCookies()     // clear all cookies
        .get('.n2-l1-links > :nth-child(4) > .link')
        //Klickar på butiker
        .click()
        .get('[class="title"]')
        //Verifierar titeln våra butiker.
        .contains('Våra butiker')
        //Klickar på Dropdown menyn
        .get('.store-list-wrapper')
        //Scrollar ner till namn som börjar på S
        .scrollTo('0%', '70%')
        //Väljer Skörholmen
        .get('[data-uuid="dEUKRMHB1DMAAAFPdcJmtgJG"]')
        //Klickar Skärholmen
        .click()
        .get('.active > h3 > strong')
        .contains('Stadium Skarholmen')

  })
})