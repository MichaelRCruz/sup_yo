## Welcome to my app!

This application originally started off as a company directory of some kind, but has recently pivoted towards a job-hunting application to help keep track of resumes and cover letters. The weblog is intended to be a community to help developers write better cover letters, resumes, and even code and projects they might be working on. There are many directions in which I can take this project, but for now take a look around.

If you're curious, the front end has been deployed to Heroku using Express as a BFF. The back end serves resources built with Node, Express, and MongoDB. Mongo suits this application well as I am not sure on the modeling and schema of the database.

### Technologies used

* Vue 2
* vue-router
* vue-resource (probably switching to Axios or fetch )
* webpack (through vue-cli)
* bulma (for styling)
* flexbox (what bulma can't do)
* heroku
* javascript
* HTML
* CSS

...here is a link to this project's [back-end](https://github.com/MichaelRCruz/a1_api) repository. As always, feel free to fork!

### Calendar

As you can see, the calendar still needs a lot of work. I am making progress with [moment.js](https://momentjs.com/) as it has proven to be a very useful tool when working with date and time. I have used [CSS flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) to design the calendar and need to decide if the current iteration has to be refactored to accommodate Vue's ```v-for``` directive which renders the days and weeks of the calendar.

### Weblog

This part of the application was very fun to work on. Despite how challenging some parts were, it served as a fantastic learning tool. The most challenging part was the nested comments feature. Now that it is finished, I have sort of discovered a more efficient way to render the nested comments using more components. I theorize that if I were to use separate Vue components, then I can have infinitely nested comments, but this isn't Reddit so we'll see. One thing to keep in mind is that I have temporarily disabled the ability to delete posts and comments. This is due to a bug I am working on that needs to recursively delete the nested comments tied to the parent comment. I will come back to this bug later as I would like to prioritize other features of this app for now.

#### Intended features

* infinitely nested comment, but again, this isn't Reddit.
* in an effort to preserve user content, perhaps instead of comment and post deletion, there should be a way of rendering the comments and posts annonymous. I will have to think about that.
* setting up the "favorites" feature so a user can bookmark their favorite discussions.

#### Oauth

I have choosen to use the Github strategy simply because I see the user base consisting of mostly developers, but that could change. I intend to include Google as a strategy and maybe a simple user name and password. Oauth is so nice though!

* redirect does not work yet when a user navigates to an unauthorized page.
* a second oauth strategy (probs Google).
* better styling on the Welcome page.
