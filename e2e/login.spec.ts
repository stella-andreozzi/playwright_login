import { test, expect } from '@playwright/test';
// We use POM design pattern, so here we are importing those pages.
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


  //List of test cases we can automate for sign in:
  // 
  // 1. Sign in with invalid username and valid password -> verify error message
  // 2. Sign in with valid username and invalid password -> verify error message
  // 3. Sign in with invalid username and invalid password -> verify error message
  // 4. Sign in with a non-registrated user -> verify error message
  // 5. Sign in with empty username -> verify error message
  // 6. Sign in with empty password -> verify error message
  // 7. Sign in with special characters -> verify error message
  // 8. Sign in with valid credentials in different browsers -> validate that the session is still open.