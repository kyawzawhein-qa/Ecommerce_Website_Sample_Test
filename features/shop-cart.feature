@regression @smoke
Feature: Browse and add to cart
  As a shopper I want to add a product from the shop
  So that I can review it in my cart

  Scenario: Add first shop product to cart
    Given the shop catalog is available
    When I add the first product to my cart from the shop page
    Then my cart should contain at least one item