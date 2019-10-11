@tagPlaceholder1 @tagPlaceholder2
Feature: Magnetic Calcultor Title
  As end user transfered to the index page,
  the title of 'Magnetic Calculation Component'
  must be seen
  Scenario: Validate the title on the right place
    Given I am on the main page of the system
     When I am do nothing
     Then The title should be placed in the top-right corner of the page

