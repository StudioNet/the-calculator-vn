#This is presentation Feature for Shlomi and Danielle
@demo
Feature: Magnetic Calcultor Header
  As end user transfered to the index page,
  the title of 'Magnetic Calculation Component'
  must be seen

  Scenario: Assert the title exist
    Given I am on the main page of the system
    When I am do nothing
    Then The title should be placed in the top-right corner of the page

  Scenario: There are a list of calculator types
    Given Calculator have the following types
    When I see the calculator's types list
    Then The list of calculator types should be exist
    | Standart, Scientific, Programmer |




