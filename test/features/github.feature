Feature: Open the page and check title

    Scenario: Open github page and verify page title
        Given I open "https://github.com/" url
        Then Page title should be "The world’s leading software development platform · GitHub"
    
    Scenario: Open epam page and verify page title
        Given I open "https://www.epam.com/" url
        Then Page title should be "EPAM | Enterprise Software Development, Design & Consulting"
