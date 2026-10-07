import { executionAsyncId } from "node:async_hooks";
import { test, expect } from "playwright/test";
  
test('HomePage', async({page})=>{

    //PAGEURL
    const QAPageURL=await page.goto('https://www.qapractice.com/practice-login-form')
    console.log(QAPageURL)
    
    if(QAPageURL){
        console.log('Page URL is correct:' + QAPageURL)
    }else{
        console.log('Page URL is not correct:' + QAPageURL)
    }

    const PageTitle = await page.title('Login Automation Practice Page | Selenium, Cypress, Playwright')
    console.log("Title of the page:" + PageTitle)
    await expect(page).toHaveTitle(PageTitle)

    //Username
   const EmailAddressLabel= await page.getByLabel('Email Address')
    if (await expect(EmailAddressLabel).toBeVisible){
    console.log('Label is displayed') }
        else{
    console.log('Label is not displayed')
    } 

   const EmailAddress=await page.locator("//input[@id='login-email']")
   EmailAddress.fill('user@premiumbank.com');
    if(EmailAddress=='user@premiumbank.com') {
        console.log('Email Address text box has value:' + EmailAddress) }
            else
                {
                console.log('Email Address text box has no value:' + EmailAddress)
            }

     //const UserName=await page.locator("//input[@id='login-email']").fill ('user@premiumbank.com')

//Password
const PwdLbl= await page.getByPlaceholder('Enter your password').fill('Bank@123')

//RememberMeLabel
const RememberMeLabel=await page.locator("//label[@class='form-check-label']")
   if(RememberMeLabel.isVisible){
        console.log('Remember Me Label is visible:') }
        else{
    console.log('Remember Me Label is not displayed:')
    } 


//RememberMeCheckBox
const Checkbox= await page.locator("//label[@type='checkbox']']").isVisible
   if(Checkbox){
        console.log('Remember Me CheckBoxLabel is visbile:' ) }
        else{
    console.log('Remember Me CheckBox Label is not visible:')
    } 

//RememberMeUncheck
const Box = await page.getByAltText('Remember').uncheck
await expect (page.Box).uncheck
 if(Box){
        console.log('Remember me Box is Unchecked:') }
        else{
    console.log('Remember me Box is not Unchecked:')
    } 

//RememberMeChecked
const Box1 = await page.locator("//input[@id='login-remember']").check
await expect (page.Box1).check
 if(Box1){
        console.log('Remember me Box is checked:') }
        else{
    console.log('Remember me Box is not checked:')
    } 

//SignInButton
const SignInButton = await page.getByRole('button', 'Sign in').click


        })