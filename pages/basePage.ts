import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Obtiene el título de la página actual.
   * @returns - El título de la página.
   */
  async getTitle(): Promise<string> {
    return this.page.title();
  }

  /**
   * Hace clic en un elemento basado en su localizador.
   * @param locator - El localizador del elemento a hacer clic.
   */
  async click(locator: string): Promise<void> {
    await this.page.locator(locator).click();
  }

  /**
   * Escribe texto en un campo de entrada basado en su localizador.
   * @param locator - El localizador del campo de entrada.
   * @param text - El texto a ingresar.
   */
  async typeText(locator: string, text: string): Promise<void> {
    await this.page.locator(locator).fill(text);
  }

  /**
   * Verifica si un elemento es visible en la página.
   * @param locator - El localizador del elemento a verificar.
   * @returns - `true` si el elemento es visible, `false` en caso contrario.
   */
  async isVisible(locator: string): Promise<boolean> {
    return await this.page.locator(locator).isVisible();
  }
}
