// Codere-CABA-Home-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class CodereCABASignPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly accessOkButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Usuario / Correo electrónico' });
    this.passwordInput = page.getByRole('textbox', { name: 'Contraseña' });
    this.accessOkButton = page.locator('login-page').getByRole('button', { name: 'Acceder' });
  }

  async inputUsername() {
    await this.usernameInput.fill('andreozzi.stella@gmail.com');
  }

  async inputPassword() {
    await this.passwordInput.fill('Test@135!');
  }

  async loginConfirmation(){
    await this.accessOkButton.click();
  }

}