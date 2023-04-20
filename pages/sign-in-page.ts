// Codere-CABA-SignIn-page.ts
// Following POM design pattern, this page will contain all the objects and methods to interact with the Codere Sign in Modal Page.
import { expect, Locator, Page } from '@playwright/test';

export class CodereCABASignPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly accessOkButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Usuario / Correo electrónico' }); //username input field locator
    this.passwordInput = page.getByRole('textbox', { name: 'Contraseña' }); //password input field locator
    this.accessOkButton = page.locator('login-page').getByRole('button', { name: 'Acceder' }); //confirmation input field locator
  }

  async inputUsername() { //method to fill username
    await this.usernameInput.fill('example@gmail.com');  //TODO: pass the username by parameter. Add an object in helpers folder with all the user info
  }

  async inputPassword() { //method to fill password
    await this.passwordInput.fill('Test@135!');
  }

  async loginConfirmation(){
    await this.accessOkButton.click();
  }

}