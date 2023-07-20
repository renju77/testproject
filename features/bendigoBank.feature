Feature: Bendigo bank application for validating credit card Feature

  Scenario Outline: An user should be able to apply for credit card from the application

    Given I am on the BendigoBank home page
    When I click on the applybutton and apply for Bendigo Bright Credit Card option
    And prooced further to check the eligibility by providing the required details 
    Then I should be able to submit or cancel request successfully

    

