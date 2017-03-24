<template lang="html">
  <div id="dashboard" class="animated fadeInRight">

    <div class="content">
      <h1>Welcome to my app!</h1>
      <p>This application originally started off as a company directory of some kind, but has recently pivoted towards a job-hunting application to help keep track of resumes and cover letters. The weblog is intended to be a community to help developers write better cover letters, resumes, and even code and projects they might be working on. There are many directions in which I can take this project, but for now take a look around.</p> <p>If you're curious, the front end has been deployed to Heroku using Express as a BFF. The back end serves resources built with Node, Express, and MongoDB. Mongo suits this application well as I am not sure on the modeling and schema of the database.</p>
      <p>...I almost forgot. Here is a link to this project's <a target="_blank" href="https://github.com/MichaelRCruz/sup_yo">front-end</a> repository on Github.</p>
      <p>...here is a link to this project's <a target="_blank" href="https://github.com/MichaelRCruz/a1_api">back-end</a> repository. As always, feel free to fork!</p>
      <h3>Calendar</h3>
      <p>As you can see, the calendar still needs a lot of work. I am making progress with <a target="_blank" href="https://momentjs.com/">moment.js</a> as it has proven to be a very useful tool when working with date and time. I have used <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes"> CSS flexbox</a> to design the calendar and need to decide if the current iteration has to be refactored to accommodate Vue's <code>v-for</code> directive which renders the days and weeks of the calendar.</p>
      <h5>Intended Features:</h5>
      <ul>
        <li>upon clicking each day of the week, a list of companies applied to is listed accompanied by some fancy animation.</li>
        <li>an ability to upload documents (resumes and cover letters) specific to a particular company.</li>
        <li>perhaps some sort of statistics tracker that may or may not compare you to other community members (maybe?).</li>
      </ul>
      <h3>Weblog</h3>
      <p>This part of the application was very fun to work on. Despite how challenging some parts were, it served as a fantastic learning tool. The most challenging part was the nested comments feature. Now that it is finished, I have sort of discovered a more efficient way to render the nested comments using components. I theorize that if I were to use seperate Vue components, then I can have infinitely nested comments, but this isn't Reddit so we'll see. One thing to keep in mind is that I have temporarily disabled the ability to delete posts and comments. This is due to a bug I am working on that needs to recursively delete the nested comments tied to the parent comment. I will come back to this bug later as I would like to prioritze other features of this app for now.</p>
      <h5>Intended Features:</h5>
      <ul>
        <li>infinitely nested comment, but again, this isn't Reddit.</li>
        <li>in an effort to preserve user content, perhaps instead of comment and post deletion, there should be a way of rendering the comments and posts annonymous. I will have to think about that.</li>
        <li>setting up the "favorites" feature so a user can bookmark their favorite discussions.</li>
      </ul>
      <!-- <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote> -->
      <h3>Oauth</h3>
      <p>I have choosen to use the Github strategy simply because I see the user base consisting of mostly developers, but that could change. I intend to include Google as a strategy and maybe a simple user name and password. Oauth is so nice though!</p>
      <h5>Intended Features:</h5>
      <ul>
        <li>redirect does not work yet when a user navigates to an unauthorized page.</li>
        <li>a second oauth strategy.</li>
        <li>better styling on the Welcome page.</li>
      </ul>


  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

  #dashboard {
    flex: 1;
    padding: 30px 30px 30px 0;
  }

</style>
