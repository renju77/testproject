import { Given, When, Then } from '@wdio/cucumber-framework';
import bendigoHomePage from '../pageobjects/bendigoHome.page';
import creditCardPage from '../pageobjects/creditCard.page';


Given(/^I am on the BendigoBank home page$/, async () => {
    // await pages[page].open()
    await browser.maximizeWindow()
    await browser.url('/')
    await expect(browser).toHaveTitleContaining('Bendigo Bank - credit cards, bank accounts, home loans and more')
     // await bendigoHomePage.about_us.click() 
    await browser.pause(2000)    
    await bendigoHomePage.banking_btn.click()
    await browser.pause(2000)    
    await bendigoHomePage.creditCard_btn.click()    
    await browser.pause(4000)
   


});

When(/^I click on the applybutton and apply for Bendigo Bright Credit Card option$/, async () => {
    await expect(browser).toHaveTitleContaining('Credit Cards at Low Interest Rates | Bendigo Bank')    
    await browser.scroll(0, 1395)  
    await browser.pause(2000)
    // await browser.waitUntil((await creditCardPage.applyBtn).isDisplayed)
    await creditCardPage.applyBtn.click()
});
When (/^prooced further to check the eligibility by providing the required details$/, async () => {
    await expect(browser).toHaveTitleContaining('Check my credit card eligibility | Bendigo Bank')
    await browser.pause(2000)
    await creditCardPage.continueApplyBtn.click()
    await browser.pause(6000)  
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[1])
    await browser.pause(5000)  
    await expect(browser).toHaveTitleContaining('Product Details | Bendigo Bank Apply Online | Credit Card')
    expect(creditCardPage.headervalue).toHaveText
    await creditCardPage.maximumLimit.setValue('10000')
    await creditCardPage.generalPurpouseBtn.click()
    await creditCardPage.continueBtn1.click()
    await browser.pause(5000)  
    expect(creditCardPage.headervalue).toHaveText
    await creditCardPage.martialStatus.selectByVisibleText('Single')
    await creditCardPage.prmiaryCustCheck.click()
    await creditCardPage.promoCodeCheck.click()
    await creditCardPage.continueBtn.click()
    await browser.pause(6000) 
    expect(creditCardPage.headervalue).toHaveText
    await creditCardPage.eligibilty.click()
    await creditCardPage.continueBtn.click()
    await browser.pause(6000) 
    expect(creditCardPage.headervalue).toHaveText
    await browser.scroll(0, 1300)    
    await creditCardPage.location.setValue('Melbourne')
    await creditCardPage.findlocation.click()
    await creditCardPage.locationvalue.click()
    await browser.pause(2000)
    await creditCardPage.continueBtn.click()
    await browser.pause(2000)
    expect(creditCardPage.headervalue).toHaveText
    // await creditCardPage.emplStatus.selectByVisibleText('Casual')
    // await browser.$("//input[@name=\"occupationSearch\"]").setValue("Social Professionals (general)")
    // await creditCardPage.occupationDetail.click()
    await creditCardPage.emplStatus.selectByVisibleText('Unemployed')
    await creditCardPage.incometype.selectByVisibleText('Child Support')
    // const search = $("//input[@name=\"occupationSearch\"]")
    // await search.click()
    // await search.setValue("Social Professionals (general)")

    // const allvalues = (await (creditCardPage.occupation)).getValue
    // for(let i=0; i< allvalues.length;i++){
    //     const value =await allvalues[i].getText()
    //     if (value.includes('Social Professionals (general)'))
    //     {
    //         await allvalues[i].click()
    //         await browser.pause(2000)
    //         break
    //     }    
    // }
    // (await creditCardPage.occupationDetail).selectByVisibleText('Social Professionals (general)')
    await creditCardPage.incomeAmount.setValue('2000')
    await creditCardPage.freequecny.selectByVisibleText('Annually')
    await creditCardPage.continueBtn.click()
    expect(creditCardPage.headervalue).toHaveText
    await creditCardPage.expenseType.selectByVisibleText('Everyday living expenses')
    await creditCardPage.expenseAmount.setValue('6000')
    await creditCardPage.expenseFreequency.selectByVisibleText('Monthly')
});
Then (/^I should be able to submit or cancel request successfully$/, async () => {
    await creditCardPage.cancelBtn.click()
    await creditCardPage.confirmYesBtn.click()
    await browser.pause(8000)
    var id = (await $("//*[@id=\"appNumber\"]")).getText()
    console.log("Your application" + await(id) + "has been cancelled");  
    const status = await creditCardPage.status.getText()
    console.log("Status:",status)
   
});



