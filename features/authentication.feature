Feature: Authentication
Background:
Given I am on the login page

Scenario: I can login successfully with valid credentials
When I submit a valid username with a valid password
Then I am redirected to the All Feeds view

@pending
Scenario Outline: I cannot login with invalid credentials
When I submit a <usernameCheck> username with a <passwordCheck> password
Then I am on the login page
And I see the message <errorMessage>
Examples:
| usernameCheck | passwordCheck | errorMessage                           |
| valid         | invalid       | "Incorrect username/email or password" |
| invalid       | invalid       | "Incorrect username/email or password" |
| empty         | empty         | "Please fill out this field"           |

@pending
Scenario: I can reset my password if I forget it

@pending
Scenario: I can create a new account

@pending
Scenario: I can authenticate with University Login
