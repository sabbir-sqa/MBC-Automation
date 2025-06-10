//tests/ui/login.spec.js

const { LoginPage } = require('../../pages/LoginPage');
const { loadConfig } = require('../../utils/confgiLoader');
const { readCSV } = require('../../utils/dataManager');

const env = process.env.ENV || 'stage';
const config = loadConfig(env);
const users = await readCSV('../../data/users.csv');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('sabbir.blubird+abc@gmail.com', 'Asd@1122');

  //Assertion
  await expect(page).toHaveURL(/.*dashboard/);
});
