@pending
Feature: Upload Feed
Background:
Given I am logged in

Scenario: I can upload a valid feed
When I upload a valid feed
And I wait foreverrrrr
Then I will see the "Import Successful" dialog
And the uploaded feed will be in my feeds list

Scenario: I cannot upload random data
When I upload a photo of my dog
Then I will see the "Import failed" dialog
And the feed will not include my dog
And we will all be sad because my dog is very cute
