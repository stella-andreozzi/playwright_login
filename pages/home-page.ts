// Codere-CABA-Home-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class CodereCABAHomePage {
  readonly page: Page;
  readonly okCookies: Locator;
  readonly accessButton: Locator;
  readonly signinUsername: Locator;

  constructor(page: Page) {
    this.page = page;
    this.okCookies = page.getByRole('button', { name: 'OK' });
    this.accessButton = page.getByRole('button', { name: 'Acceder' });
    this.signinUsername = page.getByRole('button', { name: 'stellaand' });
  }

  async goto() {
    await this.page.goto('https://m.caba.codere.bet.ar/deportes/#/HomePage');
    await expect(this.page).toHaveTitle(/Codere Apuestas/);
  }

  async skipCookies() {
    await this.okCookies.click();
  }

  async clickaccessButton() {
    await this.accessButton.click();
  }

  async verifiedUsername(){
    const username = await this.signinUsername.textContent();
    console.log(username);
  }
}