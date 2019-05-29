Feature: Login page feature

    this is test login functionality.

    @login
    Scenario: verify login with valid credentials
        Given home page should be loaded
        When i click on form authentication link
        Then enter the valid credentials and logout