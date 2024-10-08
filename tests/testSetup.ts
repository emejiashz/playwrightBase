import { Page } from '@playwright/test';
import testURLs from '../data/testURLs.json';

export class TestSetup{

    protected page: Page;
    constructor(page: Page) {
      this.page = page;
    }

  /**
   * Navega a una URL específica o una predeterminada si es proporcionada.
   * @param url - La URL a la que navegar (opcional).
   */
  async navigateTo(url?: string): Promise<void> {
    const envUrl = process.env.BASE_URL || testURLs.env.PROD; // No hardcodear URLs
    await this.page.goto(url || envUrl);
    //await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

};