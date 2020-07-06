const { When, Then } = require("cucumber");
const expect = require("chai").expect;

When(/^I open "([^"]*)" url$/, async (url) => {
  return await browser.get(url);
});

Then(/^Page title should be "([^"]*)"$/, async (title) => {
  const actualTitle = await browser.getTitle();
  expect(actualTitle).to.equal(title);
});
