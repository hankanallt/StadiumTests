describe('As a admin i would like to verify Barn, Barnskor so that i can find Barnskor.', function () {
    it('Verify Barnskor', function () {
      // Test steps skrivs här

        cy
            //går till Stadium.se
            .visit('https://www.stadium.se')
            //Verifierar så vi är Stadium
            .contains('Stadium')
            .get(':nth-child(2) > :nth-child(3) > [href="https://www.stadium.se/barn.se29809070"]') 
           //Verifierar Barn på huvudmenyn
            .contains('Barn')
            //Klickar på Barn på huvudmenyn
            .click()
            .get('body.active-for-all-devices:nth-child(2) div.off-canvas-wrap:nth-child(1) main.inner-wrap:nth-child(4) div.columns.working-template div.columns.working-template-content div.page-variant.category-page.page-variant--category-page-pulse:nth-child(2) div.content-header.content-header--has-subcategories.small-12 div.row.category-list.content-header__categories.toggler.toggler--initialized div.toggler__content.toggler__content--category-list.category-list--initialized.category-list--all-visible div.category-list__wrapper div.toggler__content--category-list-categories > a.link.category-list__category.category-list__category-link.link--primary:nth-child(2)')      
            //Klickar på Barnskor
            .contains('Barnskor')
            .click()
    })
    it('Verify Barnskr', function () {
      // Test steps skrivs här

    cy
           //går till Stadium.se
           .visit('https://www.stadium.se')
           //Verifierar så vi är Stadium
           .contains('Stadium')
           .get(':nth-child(2) > :nth-child(3) > [href="https://www.stadium.se/barn.se29809070"]') 
          //Verifierar Barn på huvudmenyn
           .contains('Barn')
           //Klickar på BArn på huvudmenyn
           .click()
           .get('body.active-for-all-devices:nth-child(2) div.off-canvas-wrap:nth-child(1) main.inner-wrap:nth-child(4) div.columns.working-template div.columns.working-template-content div.page-variant.category-page.page-variant--category-page-pulse:nth-child(2) div.content-header.content-header--has-subcategories.small-12 div.row.category-list.content-header__categories.toggler.toggler--initialized div.toggler__content.toggler__content--category-list.category-list--initialized.category-list--all-visible div.category-list__wrapper div.toggler__content--category-list-categories > a.link.category-list__category.category-list__category-link.link--primary:nth-child(2)')      
           //Klickar på Barnskor
           .contains('Barnskr')
           .click()
            
    
      })
    })
