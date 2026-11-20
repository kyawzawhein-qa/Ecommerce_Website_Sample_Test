@regression @smoke
Feature: Customer login
  As a shopper I want to sign in with valid credentials
  So that I can access my account dashboard

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I sign in with valid test credentials
    Then I should see the account dashboard

  Scenario: Login rejected for wrong password
    Given I am on the login page
    When I attempt to sign in with an incorrect password
    Then I should see a login error message