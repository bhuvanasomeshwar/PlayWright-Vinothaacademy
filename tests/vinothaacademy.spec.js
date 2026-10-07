import { registerHooks } from "node:module";
import { type } from "node:os";
import { formatWithOptions } from "node:util";
import{test, expect} from "playwright/test";

test.beforeEach('PageURL', async ({ page }) => {
  //HomagePageURL
    const HomePageURL=await page.goto('https://vinothqaacademy.com/demo-site/');
    await expect(page).toHaveURL('https://vinothqaacademy.com/demo-site/')
    await expect(page).not.toHaveURL('https://vinothqaacadey.com')
})

test.skip ('Page Title', async ({page})=> {
//PageTitle
const PageTitle=await expect(page).toHaveTitle('Demo Site – Registration Form – Vinoth Tech Solutions')
const ExpectedPageTitle=await expect(page).toHaveTitle('Demo Site – Registration Form – Vinoth Tech Solutions')
if (PageTitle==ExpectedPageTitle){
    console.log("Page Title is correct:")
}else{
    console.log("Page Title is not correct:")

}
})

test.skip('RegistrationForm', async ({ page }) => {
//Verify the RegistrationForm Text
const RegistrationFormText=page.locator("//h3[normalize-space()='Registration Form']")
await expect (RegistrationFormText).toBeVisible()
if (await RegistrationFormText.isVisible()){
console.log("Registration Form Text is displayed:")
}else{
    console.log("Registration Form Text is not displayed:")

}
})

test.skip('FirstNameField', async ({ page }) => {
//FirstNameField
const FirstNameField=await page.locator("//input[@name='vfb-5']").isEnabled()
const FirstNameField1=await page.getByLabel('First Name').fill('Bhuvana')
})

test.skip('LastNameField', async ({ page }) => {
//LastNameField
const LastNameFieldNameField=await page.locator("//input[@name='vfb-7']").isEnabled()
const LastNameFieldNameField1=await page.getByLabel('Last Name').fill('Someshwar')

})
test.skip('RadioButton', async({page})=>{
//RadioButton
const RadioButton=await page.getByRole("radio", {name:'Gender'}).isVisible()

//MaleRadioButton
page.locator("//input[@type='radio' and @value='Male']")
const MaleRadioButton=await page.locator("//input[@type='radio' and @value='Male']")
await expect(MaleRadioButton).not.toBeChecked()

//FemaleRadioButton
page.locator("//input[@id='vfb-31-2']/following::label[contains(normalize-space(.), 'Female')]")
const FemaleRadioButton=await page.locator("//input[@id='vfb-31-2']/following::label[contains(normalize-space(.), 'Female')]")
await expect(FemaleRadioButton).not.toBeChecked()

//OtherRadioButton
page.locator("//input[@id='vfb-31-3']/following::label[contains(normalize-space(.), 'Other')]")
const OtherRadioButton=await page.locator("//input[@id='vfb-31-3']")
await expect(OtherRadioButton).not.toBeChecked()

//FemaleRadioButtonChecked
const FemaleRadioButtonChecked=await page.locator("//input[@id='vfb-31-2']")
await FemaleRadioButtonChecked.check()
await expect(await page.locator("//input[@id='vfb-31-2']")).toBeChecked()
await expect(await page.locator("//input[@id='vfb-31-2']")).toBeTruthy()
})

//CourseInterestedLabel
test.skip('Course Interested', async ({page}) => {
const CourseInterestedLabel=await page.locator("//label[@class='vfb-desc' and normalize-space(.)='Course Interested']/parent::li")
await expect(CourseInterestedLabel).toBeVisible

const CourseCountNos=await page.$$("//li[@class='vfb-item vfb-item-checkbox  vfb-auto-column ']/child::div/child::span")
console.log("Total Number of Courses =", CourseCountNos.length)

const NameofCourse=await page.$$("//input[@type='checkbox']/following-sibling::label")
for(let Options of NameofCourse){
const value=await Options.textContent();
console.log("Course Name:"+ value)
}

//DevOpsChecked
const DevOpscheckbox=await expect (page.locator("//input[@id='vfb-20-3' and @value='DevOps']"))
DevOpscheckbox.toBeChecked
if(DevOpscheckbox.toBeChecked){
console.log("Devops is checked")
}
else{
console.log("Devops is not checked")
}

//DevOpsNotToBeChecked
DevOpscheckbox.not.toBeChecked
if(DevOpscheckbox.not.toBeChecked){
console.log("DevOps is unchecked")
}else{
console.log("DevOps is checked")
}

//CheckSeleniumAndJava

const SeleniumCheckBox=await page.locator("//input[@type='checkbox' and @value='Selenium WebDriver']")
await SeleniumCheckBox.check()
if(SeleniumCheckBox.isChecked){
    console.log("SeleniumCheckBox is checked")}
    else{
        console.log("SeleniumCheckBox is not checked")
    }

const JavaCheckBox=await page.locator("//input[@type='checkbox' and @value='Java']")
await JavaCheckBox.check()
if(JavaCheckBox.isChecked){
console.log("JavaCheckBox is checked")}
else{
    console.log("JavaCheckBox is not checked")
}
})

//StreeAddress
test.skip('Street Address', async ({page}) =>{
await page.locator("//input[@id='vfb-13-address']").isVisible
const StreetAddress=await expect (page.locator("//input[@id='vfb-13-address']"))
if(StreetAddress.toBeEnabled()){
    console.log("AddressField is enabled")
}else{
    console.log("AddressField is not enabled")
        
    }

const StreetAddressField=await page.locator("//input[@id='vfb-13-address']")
await StreetAddressField.fill('51, Evansfield Rise, NW')
const StreetAddressTextFieldValue=await expect (StreetAddressField).toHaveValue('51, Evansfield Rise, NW')
if(await expect (StreetAddressTextFieldValue)){
console.log("Has Address Value:" + StreetAddressTextFieldValue)}
else{
    console.log("Has No Address Value:" + StreetAddressTextFieldValue)

}
await StreetAddressField.click({button:'right'})
await StreetAddressField.press('Control+A')
await StreetAddressField.press('Control+C')
})


test.skip ('AptSuiteBldgOptional' ,async({page}) =>{ 
//AptSuiteBldgOptionalTextBox
const AptSuiteBldgOptionalTextBox=await page.locator('//input[@id="vfb-13-address-2" and @class="vfb-text vfb-medium  "]')
await expect (AptSuiteBldgOptionalTextBox).toBeVisible
if(AptSuiteBldgOptionalTextBox){
    console.log("Apt Suite Bldg Optional TextBox is visible")
}else{
    console.log("Apt Suite Bldg Optional TextBoxis not visible")
}

await expect (AptSuiteBldgOptionalTextBox).toBeEnabled
if(AptSuiteBldgOptionalTextBox){
    console.log("Apt Suite Bldg Optional TextBox is enabled")
}else{
    console.log("Apt Suite Bldg Optional TextBox is not enabled")
}

await AptSuiteBldgOptionalTextBox.press('Control+V')

const AptSuiteBldgOptionalTextBoxValue=await expect (AptSuiteBldgOptionalTextBox).toHaveValue('51, Evansfield Rise, NW')

if(AptSuiteBldgOptionalTextBox){
console.log("Has Address Value")

}else{

console.log("Has not Address Value") }
})


test.skip ('City', async ({page}) =>{
//City
const CityField=await page.locator('#vfb-13-city')
if(CityField.isVisible()){
console.log("City Field is displayed")
}else{
    console.log("City Field is not displayed")
}

if(CityField.isEnabled()){
    console.log("City Field is enabled")
}else{
    console.log("City Field is not enabled")
}

await CityField.fill('Calgary')
await expect (CityField).toHaveValue('Calgary')
const cityValue = await CityField.inputValue();

if(cityValue==="Calgary")
    {console.log("City Field has value")
}else{
    console.log("City Field has no value")
    }
})


    //PostalCode/ZipCode
test.skip ('Postal Code', async ({page}) => {
    const PostalCode=await page.locator('//input[@name="vfb-13[zip]"]')
if (PostalCode.isVisible()){
    console.log("PostalCode is Visible")
}else{
     console.log("PostalCode is not Visible")
}

if(PostalCode.isEnabled()){
    console.log("PostalCode is enabled")
}else{
    console.log("PostalCode is not enabled")
}

await PostalCode.fill("567874")
await expect (PostalCode).toHaveValue('567874')

const PostalCodeValue = await PostalCode.inputValue()
if(PostalCodeValue==="567874")
    {console.log("Postal Code Field has value")
}else{
    console.log("Postal Code  has no value")
    }
})

//State
test.skip ('State', async ({page})=>{

const StateField=await page.locator("//input[@id='vfb-13-state']")
if(StateField.isVisible()){
    console.log("State Field is visible")}
    else{
    console.log("State Field is not visible")
}
if(StateField.isEnabled()){
  console.log("State Field is enabled")}
    else{
    console.log("State Field is not enabled")
    }

StateField.fill('Calgary')
await expect (StateField).toHaveValue('Calgary')
const StateFieldValue=await StateField.inputValue()
if (StateFieldValue===('Calgary')){
    console.log("State Field has input value")
}else{
        console.log("State Field has no input value")

    }
})

//Country
test.skip ('Country', async ({page}) =>{
await page.locator("//select[@id='vfb-13-country']/child::option")
const Options=await page.$$("//select[@id='vfb-13-country']/child::option")

const CountryCount=await page.$$("//select[@id='vfb-13-country']/child::option")
console.log("Total Number of Countries =", CountryCount.length)

for (let Option of CountryCount){
const Dropdown=await Option.textContent()
console.log(Dropdown)
}

if(Options.includes('India'))
    await Options.click()
})

//EmailField
test.skip('EmailField', async ({page})=> {
const EmailField=await page.locator("//input[@id='vfb-14']")
if(EmailField.isVisible()){
console.log("Email Field is visible")}
else{
    console.log("Email Field is not visible")
}

if(EmailField.isEnabled()){
console.log("Email Field is enabled")}
else{
    console.log("Email Field is not enabled")
}


EmailField.fill("Bhuvana@gmail.com")
await expect (EmailField).toHaveValue("Bhuvana@gmail.com")
const EmailFieldValue=await EmailField.inputValue()
if(EmailFieldValue===("Bhuvana@gmail.com")){
console.log("EmailField has value")}
else{
console.log("EmailField has no value")}
})

//Date of Demo
test.skip ('Date of Demo', async ({page})=> {
const year= '2026'
const month = 'April'
const date = '18'
await page.click("//input[@id='vfb-18']")

while(true)
{
const currentYear=await page.locator("//span[@class='ui-datepicker-year']").textContent()
const currentMonth=await page.locator("//span[@class='ui-datepicker-month']").textContent()
if(currentYear== year && currentMonth==month)
{ break;}
await page.locator("//a[@title='Prev']").click()
}
await page.waitForTimeout(5000)

const DateInput=await page.locator("//input[@id='vfb-18']")
const DateInputValue = await DateInput.inputValue()
if(DateInput !== ""){ 
console.log("Date Field has value")
}else{
    console.log("Date Field has no value")
}
})

//ConvenientTimeHH
test('Convenient Time', async ({page}) => {
const ConvenientTimeHH=await page.locator("//select[@id='vfb-16-hour']")
if(ConvenientTimeHH.isVisible()) {
console.log("Convenient Time Field is Visible")
}else{
console.log("Convenient Time is not Visible")    
}    

if(ConvenientTimeHH.isEnabled()){
console.log("Convenient Time Field is Enabled")
}else{
console.log("Convenient Time Field is Enabled")    
}
const ConvenientTimeCountHH=await page.$$("//select[@id='vfb-16-hour']/following::option")
console.log(ConvenientTimeCountHH.length)
const OptionSelect=await page.locator("//select[@id='vfb-16-hour']"
    + "/following::option[10]")
const ConvenientTimeValueHH=  await expect(ConvenientTimeHH).toHaveValue(/.+/);

    if(ConvenientTimeValueHH !== ""){
    console.log("Convenient Time field has value")        
    }else{

    console.log("Convenient Time field has no value")        
    }
})

//ConvenientTimeMM
test('ConvenientTimeMM', async ({page})=>{
const ConvenientTimeMM=page.locator("//span[@class='vfb-time']/child::select[@id='vfb-16-min']")
if (ConvenientTimeMM.isVisible()){
console.log("Convenient Time Count MM is visible")
}else{
    console.log("Convenient Time Count MM is not visible")
}

if (ConvenientTimeMM.isEnabled){
console.log("Convenient Time Count MM is enabled")
}else{
    console.log("Convenient Time Count MM is not enabled")
}

const ConvenientTimeCountMM=await page.$$("//span[@class='vfb-time']/child::select[@id='vfb-16-min']")
console.log(ConvenientTimeCountMM.length)
const OptionSelect=await page.locator("//span[@class='vfb-time']/child::select[@id='vfb-16-min']/option[05]")
const ConvenientTimeMMValue=await expect(ConvenientTimeMM).toHaveValue(/.+/);

    if(ConvenientTimeMMValue !== ""){
    console.log("Convenient Time field has value")        
    }else{

    console.log("Convenient Time field has no value")        
    }
})


