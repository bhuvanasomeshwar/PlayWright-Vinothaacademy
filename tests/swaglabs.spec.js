import { url } from "node:inspector";
import {test, expect, webkit} from "playwright/test";
import { defineConfig } from "playwright/test";

test('HomePage', async({page})=>{


//URL
await page.goto("https://www.saucedemo.com/");
await expect(page.url(console.log(url)));

//Title
let Title=await page.title("Swag Labs");
console.log(Title);

//UserName 
let Username=await expect (page.getByRole('text', {name:'user-name'})).toBeVisible
if(Username) {
       console.log ('Username field is visible:' + Username)
       } else {
    console.log('Username field is not visible:' + Username)
       }
       await page.waitForTimeout(2000);
await page.locator("//input[@id='user-name']").fill('standard_user')

//Password
let Password=await expect (page.getByRole('password', {name:'password'})).toBeVisible
if(Password){
    console.log('Password field is visible:' + Password)
}else{
    console.log('Password field is not visible:' + Password)
}
   await page.waitForTimeout(2000);
await page.locator("//input[@id='password']").fill('secret_sauce')

//LoginButton
let LoginButton=await expect(page.getByText('Login')).isVisible
let LoginButton1=await expect(page.getByRole('submit',{name:'login-button'})).toBeEnabled
if(LoginButton1){
    console.log('Login Button is enabled:' + LoginButton1)
    }else{
        console.log('Login Button is not enabled:'+ LoginButton1)
    }
       await page.waitForTimeout(2000);
await page.locator("//input[@id='login-button']").click()

//InventoryPage
const InventoryURL=await page.goto('https://www.saucedemo.com/inventory.html')
await expect(page.url(console.log(InventoryURL)));
await page.waitForTimeout(2000);

//VerifyBurgerMenuButton
await page.locator("//img[@alt='Open Menu']//preceding-sibling::button/parent::div']")
//const BurgerButton= await expect (page.locator("//img[@alt='Open Menu']").toBeVisible)
const BurgerButton= await expect (page.getByTestId='open-menu').toBeVisible

if(BurgerButton){
console.log('Burger Button is displayed:')
} else{
console.log('Burger Button is not displayed')
}

await expect.page
page.close()



})



