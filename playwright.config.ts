import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 30000,
  forbidOnly: !!process.env.CI,
  //N° de intentos si falla la ejecucion
  retries: process.env.CI ? 2 : 0,
  //N° max o min de ejecuciones en paralelo
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
    headless: false,
    screenshot: 'on', // Captura en cada paso (opcional)
    //screenshot: 'only-on-failure', // Captura la pantalla solo en caso de fallos
    //baseURL: 'https://web.dev.cargopay.com.ar/',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        deviceScaleFactor: undefined,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        deviceScaleFactor: undefined,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        }
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        deviceScaleFactor: undefined,
        viewport: null,
       // launchOptions: {
        //  args: ['--start-maximized']
       // }
      }
    },

  ],
});
