import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { TestSetup } from '../tests/testSetup';
import testData from '../data/testData.json';

test.describe('Meli Home Page Tests', () => {
  let page: Page;
  let homePage: HomePage;
  let testSetup : TestSetup;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    homePage = new HomePage(page);
    testSetup = new TestSetup(page);
    await testSetup.navigateTo();
  });

  test('debería buscar un producto', async () => {
    await homePage.searchForItem(testData.validProduct.name);
    await expect(page).toHaveTitle(/.*Apple Iphone 13.*/); // Usa una expresión regular para evitar hardcodear el título exacto
    await page.screenshot({ path: '/screenshot.png' });
  });

  // Otros casos de prueba para HomePage (login, crear cuenta, etc.)
  test('debería verificar la visibilidad del botón de búsqueda', async () => {
    await expect(homePage.searchButton).toBeVisible();
  });
  
  test.afterAll(async () => {
    await page.close();
  });
});
