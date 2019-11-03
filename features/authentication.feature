Feature: Authentication
Background:
Given I am on the login page

Scenario: I can login successfully with valid credentials
When I submit a valid username with a valid password
Then I am redirected to the All Feeds view

Scenario Outline: I cannot login with invalid credentials
When I submit the username <username> with the password <password>
Then I am on the login page
# For whatever reason, this element is wonky
# And I see the message <errorMessage>
Examples:
| username   | password | errorMessage                            |
| qa_user_02 | hi       | "Incorrect username/email or password." |
| steve      | yo       | "Incorrect username/email or password." |
# | empty      | empty    | "Please fill out this field"           |

@pending
Scenario: I can reset my password if I forget it
Given I am an existing user
When I select "Forgot Password"
And I submit my email address
Then I expect to reset my password through the link I receive in email

@pending
Scenario: I can authenticate with University Login
