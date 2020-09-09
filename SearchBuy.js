describe('As a Custmoer i would like to look for a shop placed in Skärholmen so that i can get the address of the shop.', function () {
    it('Skärholmen Shop', function () {
      // Test steps skrivs här

        cy
            //går till Stadium.se
            .visit('https://www.stadium.se')
            //Verifierar så vi är på Stadium
            .contains('Stadium')
            // clear all cookies
            .clearCookies('[class="button button--secondary button--small cookie-bar__button"]')
            .get('.search-field__query')
            //Klicka på sökrutan
            .click()
            //Skriv in Asics Gel Kayano
            .type('Asics Gel Kayano')
            .get('[href="https://www.stadium.se/search?SearchTerm=asics+gel+kayano"]')
            //Klicka Sök
            .click()
            .clearCookies('[class="button button--secondary button--small cookie-bar__button"]')
            //Verifierar Asics gel kayano
            .get('.relative > :nth-child(3)')
            //Klickar på Asics M Gel Kayano 
            .click()
            .get('[class="pdp__information__product-name"]')
            .contains('m gel-kayano 27')
            .clearCookies('[class="button button--secondary button--small cookie-bar__button"]')
            //Klickar på välj Storlek
            .get('#custom-select-size > .vanilla-js-dropdown__title')
            .click()
            //Väljer Storlek 42
            .get('[data-value="305528102104"]')
            .click()
            //Add to Cart
            .get('#pdp__add-to-cart-container > [type="submit"]')
            .click()
            //Verifierar att varan har blivit tillagd
            .get('.pdp__button-text--added > span')
            .contains('Tillagd')
            //Klickar på korgen
            .get('.mini-cart__link > .svg-icon > use')
            .click()
            //Verifierar att vi är i varukorgen
            .get('.header-checkout__bottom__heading')
            .contains('Varukorg')
            //Klickar på Till kassan
            .get(':nth-child(3) > :nth-child(2) > .button')
            .click()
            //Verifierar att vi är på Leverans sidan
            .get('.step-indicator__bottom__heading')
            .contains('Leverans')
            //Klickar på Postnr
            .get('.ajax-form-loader__input')
            .click()
            .type('14144')
            //Klickar på OK
            .get('.ajax-form-loader__submit-button')
            .click()
            //Klickar på instabox
            .get('.radio-toggle > :nth-child(2) > .container')
            .click()
            //Klickar på till betalning
            .get('#checkoutShipping-Continue')
            .click()
            //Verifierar betalning
            .get('.step-indicator__bottom__heading')
            .contains('Betalning')
            //Klickar radio button Swish
            .get('.radio-toggle--checked > .container')
            .click()
            //Skriver in för och efternamn
            .get('#CC_CheckoutUserInfoForm_Signature')
            .click()
            //Klickar i rutan och fyller i för och efternamn
            .type('Harkanwal Singh')
            //Klickar på Rutan Telenr
            .get('#CC_CheckoutUserInfoForm_Phone')
            .click()
            //Klickar och skriver in telenr
            .type('0702682660')
            //Klickar på rutan för email
            .get('#CC_CheckoutUserInfoForm_Email')
            .click()
            //Skriver in email address
            .type('hankanallttingh@outlook.com')
            //Klickar på address fältet
            .get('#CC_CheckoutUserInfoForm_Address')
            .click()
            //Skriver in address
            .type('Annerstavägen 17')
            //Klickar på rutan Ort
            .get('#CC_CheckoutUserInfoForm_State')
            .click()
            //Skriver in ort
            .type('Huddinge')
            .get('#checkoutPayment-Continue')
            .click()
            //Verifierar summerings sidan
            .get('.step-indicator__bottom__heading')
            .contains('Summering')
            //Klickar på radiobox för terms och conditions.
            .get('#termsAndConditions')
            .click()
            //Klickar på sendorder
            .get('#sendOrder')
            .click()
            .get('[style="text-align: center; width: 100%; height: 100%; display: block; background-color: #ffffff; color: #000000;"] > img')
            .contains('Swish')
    })   
    })