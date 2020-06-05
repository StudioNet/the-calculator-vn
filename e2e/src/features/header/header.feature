@header
Feature: Magnetic Calcultor Header Component
         As user arrived to the main page header Component
         should be exist and available to use.

  Scenario: Title must be 'Magnetic Calculation Component'
    Given User on the main page
     When User does nothing
     Then The title of the component should be "Magnetic Calculation Component"

