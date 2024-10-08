import { BasePage } from './basePage';
import { Locator, Page } from '@playwright/test';

export class HomePage extends BasePage {
  readonly searchBox: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.searchBox = page.getByPlaceholder('Buscar productos, marcas y má');
    this.searchButton = page.getByRole('button', { name: 'Buscar' });
  }

  /**
   * Busca un ítem usando los localizadores.
   * @param item - El texto del ítem a buscar.
   */
  async searchForItem(item: string) {
    await this.searchBox.fill(item);
    await this.searchButton.click();
    
  }
}
