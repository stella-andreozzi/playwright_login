// Codere-CABA-Home-page.ts
// Following POM design pattern, this page will contain all the objects and methods to interact with the Codere Home Page.
import { expect, Locator, Page } from '@playwright/test';

export class CodereCABAHomePage {
  readonly page: Page;
  readonly okCookies: Locator;
  readonly accessButton: Locator;
  readonly signinUsername: Locator;

  constructor(page: Page) {
    this.page = page;
    this.okCookies = page.getByRole('button', { name: 'OK' }); // confirm cookies OK button locator
    this.accessButton = page.getByRole('button', { name: 'Acceder' }); // Access button locator 
    this.signinUsername = page.getByRole('button', { name: 'stellaand' }); // Username displayed in Home page after login
  }

  async goto() { //method to go to codere URL
    await this.page.goto('https://m.caba.codere.bet.ar/deportes/#/HomePage');
    await expect(this.page).toHaveTitle(/Codere Apuestas/);
  }

  async skipCookies() { // method to confirm cookies
    await this.okCookies.click();
  }

  async clickaccessButton() { // method to click access button
    await this.accessButton.click();
  }

  async verifiedUsername(){ // method to verify the username after login
    const username = await this.signinUsername.textContent();
    console.log(username);
  }
}