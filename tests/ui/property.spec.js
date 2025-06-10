test('Create property with retry', async ({ page }, testInfo) => {
  let retries = 3;
  while (retries > 0) {
    try {
      await test.step('Fill property form', async () => {
        await page.fill('#title', 'Luxury Villa');
      });
      break;
    } catch (err) {
      retries--;
      if (retries === 0) throw err;
      logger.warn(`Retrying... ${retries} left`);
    }
  }
});
