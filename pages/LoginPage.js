//pages/LoginPage.js

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = this.page.getByLabel('Email');
    this.passwordField = this.page.getByLabel('Password');
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };
