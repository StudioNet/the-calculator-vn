@modelist
Feature: List of Calculator Modes
         User will get possibility to change the
         mode of the calculator

  Scenario: User can select any existing mode
    Given Header has list of calculator modes
     When User changed the mode
     Then Calculator will be changed appropriated to the selected "Programmer" mode
