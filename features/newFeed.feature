
@pending
Feature: Create a new feed
Background:
Given I am on the Login page
And I have logged in
And I am on the All Feeds page

Scenario: I can create a new feed
When I create a feed with the following:
| FeedName | Publisher                  | PublisherURL       | Language | Start Date | End Date | Version | AgencyURL          |
| So Fancy | Cat the Great and Terrible | www.thegoogles.com | English  | 10/31/19   | 11/5/19  | 1.0     | www.thingplace.com |
And I click Save
Then the following are visible:
| Routes | Stops | Calendars | Trips & Patterns | Blocks |
And the feed name is now displayed

Scenario: I cannot create a feed without required fields
