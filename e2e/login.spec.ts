import { test, expect } from '@playwright/test';
// We use POM design patter:
import { CodereCABAHomePage } from '../pages/home-page'; // POM for Home Screen
import { CodereCABASignPage } from '../pages/sign-in-page'; // POM for Sign in modal Screen

test.beforeEach(async ({ page }) => {
  //Preconditions: 
  //  User is able to access HOME screen. 
  //  User sees the "Acceso" button, should be clickable.
  //  User clicks Acceso button.

  // Before each test case for SIGN IN, we should go to Home page, accept cookies and click on Access button to go to sign in modal
  const codereCABAHomePage = new CodereCABAHomePage(page);
  await codereCABAHomePage.goto();
  await codereCABAHomePage.skipCookies();
  await codereCABAHomePage.clickaccessButton();
});

test.describe('Successfull login with valid user', () => {
  //In this group of test cases we will test a successfull login:
  // Steps:
  //     1. User sees sign in modal. 
  //     2. User inputs username. Data: example@gmail.com
  //     3. User inputs password. Data: Test@135!
  //     4. User clicks OK.
  //     5. User has signed in and sees Home screen.

  test('User should be allowed to input username and password', async ({page}) =>
  {
    const codereCABASignPage = new CodereCABASignPage(page);
    await codereCABASignPage.inputUsername();
    await codereCABASignPage.inputPassword();
    await codereCABASignPage.loginConfirmation();
  });
});
