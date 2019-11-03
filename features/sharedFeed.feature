@pending
Feature: Shared Feed
Background:
Given I am logged in

Scenario: I can share a valid feed
Given I have a valid feed
When I share my feed
Then I receive confirmation that my feed is now shareable
And I can click the link to download the file

Scenario: I can download a shared feed
Given I have a shared feed
When I click the link for the shared feed
Then I successfully download the zip file
