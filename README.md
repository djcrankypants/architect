# architect

## Setup
1. Install node v10 on your machine - instructions are here:
  https://nodejs.org/en/download/
2. Clone this repo!
3. From command line, cd to the root for the project (`/architect`)
4. Run `npm install` - this will give you all the packages necessary to run this monstrosity
5. Cross your fingers.
6. You ready? Let's do this thing. Run `npm test`.

## Commentary
* Page Objects:
  You'll notice that there is usage of the page object model. I do things a bit differently here re: elements due to some changes WDIO has made in their recent version that I needed to fiddle with for this project. There are better ways of doing this, but time constraints rarely lend themselves to elegance.
* Data Management:
  This is quite a bit easier with full access to API docs + any roles/permissions needed. I'm happy to walk through where I would leverage API helpers to handle setup/teardown to improve test performance & stability. For example: logging in via API rather than UI to set cookies and move along.
* Pending features/scenarios:
  As you can see, I've left quite a few features and scenarios as pending. These were to illustrate some test cases that I had identified, but did not have time/info to implement or fully stabilize.
* Stability:
  I have noticed some inconsistencies with state carrying between scenarios. Since I've not worked with this version of wdio until, uh, today (HUBRIS!), I suspect this is a configuration tweak, but my lack of familiarity is not helpful. It is also worth mentioning that this framework is webdriverio wrapping cucumber rather than the other way around (which is what my own tools are built in) - also not working in my favor for something under these time constraints.
* Reporting:
  We have LOAAAADS of reporting options. However, I find them most valuable when applied to CI tooling so that stability/breakage can be tracked over time, as well as current status. For this exercise, I stuck with `spec` & JSON output, but HTML reporters, allure, junit, etc. can be configured pretty easily, and then output to the artifacts storage in your CI tool of choice. Normally we would clean & gitignore logs, but I figured they would be worth committing for this exercise. They are located in - surprise - `/logs`.
* Oh noes! Errors!:
  You'll notice a chromedriver error that frequently pops up if you are using OSX. The good news is that this is not a fatal error (but is annoying - I've included it in the chromedriver logs for context). If we were using cucumber itself as the runner, we would circumvent that using something like this:
  ```      var intercept = require('intercept-stdout');
        intercept(function (txt) {
            if (!txt.includes('TIS/TSM')) {
                return txt;
                }
            else {
              return '';
            }
          });```
