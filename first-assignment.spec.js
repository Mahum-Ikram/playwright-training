const { test, expect } = require('@playwright/test');

test.only("First Assignment", async({page}) => {

  //Store the text "Playwright","Installation | Playwright" in an array
    const arrayList = ["Playwright","Installation | Playwright"]
    const searchBtn = page.locator('#APjFqb')

  //Go to Google and search for the 1st array entry in the field
    await page.goto('https://www.google.com');
    await searchBtn.click()

    await searchBtn.type(arrayList[0])
    
  //Verify that the same text has been searched 
    const enteredValue = await searchBtn.inputValue();
    expect(enteredValue).toBe(arrayList[0]);
    await page.keyboard.press('Enter');

  //Go to the search results. Click on the first search result
    const firstLink = page.locator('[href="https://playwright.dev/docs/intro"]');
    await firstLink.click()
    await page.waitForTimeout(5000)

  //Get the page title and verify it should equal to the title stored in the array i.e. a second entry in the array
    const pageTitle = await page.locator('//title');
    const pageTitleText = await pageTitle.textContent();
    expect(pageTitleText).toBe(arrayList[1]);



})