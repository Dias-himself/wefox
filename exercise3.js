const {element, by, browser} = require ("protractor")
const {ExpectedConditions} = require('protractor')
describe('wefox task', function(){
    
    it('login', async function(){
        const user_input = element(by.css("body > wf-root > wf-public-layout > section > div > div > wf-login-page > section > form > div > div > div.wf-c-field.wf-u-pb-24 > div"))
        const username = element(by.id('user_name'))
        const pass_input = element(by.css("body > wf-root > wf-public-layout > section > div > div > wf-login-page > section > form > div > div > div.wf-c-field.--password.wf-u-pb-32 > div"))
        const password = element(by.id('password'))
        const btn_login = element(by.css('body > wf-root > wf-public-layout > section > div > div > wf-login-page > section > form > div > div > button'))
        const button = element(by.buttonText('Anmeldung'))


        await browser.get('https://my.wefox.de/login');
        expect(browser.getCurrentUrl()).toBe('https://my.wefox.de/login'); {
            console.log('Expected');
          };

        // return if not loaded
        
        //
        await browser.wait(ExpectedConditions.visibilityOf(username),10*1000)
        await browser.wait(ExpectedConditions.elementToBeClickable(user_input),10*1000)
        await browser.wait(ExpectedConditions.visibilityOf(password),10*1000)
        await browser.wait(ExpectedConditions.elementToBeClickable(pass_input),10*1000)

        await user_input.click ()
        await username.sendKeys ("aqawefox+testtecnico@wefoxgroup.com")
        await pass_input.click ()
        await password.sendKeys ("qwertyasdf")
        await btn_login.click()

        const agent_image = element(by.css('body > wf-root > wf-private-layout > div > div > wf-dashboard > div > div:nth-child(3) > div.col-xs-12.col-md-4.wf-c-dashboard__coverage-simulator > div > wf-coverage-simulator > div > div.wf-c-simulator__content.wf-u-relative > div:nth-child(3) > div > img'))
        const btn_mycontracts = element(by.css('body > wf-root > wf-private-layout > div > wf-sidebar > ul > li:nth-child(2) > a'))
        const buttonContracts = element(by.linkText('My Contracts'))
        
        await browser.wait(ExpectedConditions.visibilityOf(agent_image),10*1000)
        await browser.wait(ExpectedConditions.visibilityOf(buttonContracts),10*1000)
        await btn_mycontracts.click()

        const btn_profile = element(by.css('body > wf-root > wf-private-layout > div > wf-sidebar > ul > li:nth-child(5) > a'))
        const buttonProfile = element(by.linkText('Profile'))
        
        await browser.wait(ExpectedConditions.visibilityOf(buttonProfile),10*1000)
        await btn_profile.click()

        //Personal details
        await browser.get('https://my.wefox.de/account/personal-details');
        expect(browser.getCurrentUrl()).toBe('https://my.wefox.de/account/personal-details');

        const btn_logout = element(by.css('body > wf-root > wf-private-layout > div > wf-sidebar > ul > li.wf-c-sidebar-nav__item.--logout > a'))
        const buttonLogout = element(by.linkText('Log out'))
          
        await browser.wait(ExpectedConditions.visibilityOf(buttonLogout),10*1000)
        await btn_logout.click()
        await browser.wait(ExpectedConditions.urlContains('https://my.wefox.de/'), 5000);{
            console.log('error | expexted URL https://my.wefox.de/');
          };
        await browser.sleep(5000);
        
    });  
});