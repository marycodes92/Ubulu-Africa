# Ubulu-Africa
This is a Web Automation Test project for the Sauce Demo Application and the below Modules and scenarios were covered in the test;
- Login Tests:
  Attempt login using invalid credentials (negative scenarios).
- Logout Functionality:
  Log in and log out of the application.
- Cart Interaction:
  Add products to the cart.
  Remove products from the cart.
- Checkout Process:
  Proceed to checkout and simulate removal of items during the checkout flow.

# Test Structure
Page Object Model (POM) is the test design pattern used in this project to ensure clean code, reusability, and maintainability of code. You can find it in the `/page-objects` directory.

Most of the Modules are in their seperate test files and this is to ensure seperation of concerns to avoid tests being dependent on each other which can lead to alot of flakiness.

# Run Test
To run the test;
- Clone the repository: https://github.com/marycodes92/Ubulu-Africa.git
- Run `npm install` to install all the framework and library used.
- In the `package.json` file, you'd see a couple of scripts to run the test as you wish

I also added a github workflow to run the test in the pipeline and the trigger is `push` 