<template lang="html">
  <div id="calendar">


    <div class="month">
      <div class="week">
        <div class="day">1</div>
        <div class="day">2</div>
        <div class="day">3</div>
        <div class="day">4</div>
        <div class="day">4</div>
        <div class="day">4</div>
        <div class="day">4</div>
      </div>
      <div class="week">
        <div class="day">5</div>
        <div class="day">6</div>
        <div class="day">7</div>
        <div class="day">8</div>
        <div class="day">9</div>
        <div class="day">10</div>
        <div class="day">11</div>
      </div>
      <div class="week">
        <div class="day">12</div>
        <div class="day">13</div>
        <div class="day">14</div>
        <div class="day">15</div>
        <div class="day">16</div>
        <div class="day">17</div>
        <div class="day">18</div>
      </div>
      <div class="week">
        <div class="day">19</div>
        <div class="day">20</div>
        <div class="day">21</div>
        <div class="day">22</div>
        <div class="day">23</div>
        <div class="day">24</div>
        <div class="day">25</div>
      </div>
      <div class="week">
        <div class="day">26</div>
        <div class="day">27</div>
        <div class="day">28</div>
        <div class="day">29</div>
        <div class="day">30</div>
        <div class="day">31</div>
        <div class="day">31</div>
      </div>
    </div>



  </div>
</template>


<script scoped>
  export default {

    data() {
      return {

      }
    }

  }
</script>

<style lang="css">

  #calendar {
    flex: 1;
    padding: 30px 30px 30px 0;
  }

  .week {
    display: flex;
    height: 100px;
  }

  .day {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    color: #00d1b2;
    padding: 10px;
    box-shadow:
      -1px -1px #00d1b2,
      inset -1px -1px 0 0 #00d1b2;
  }

  .month {
    max-width: 860px;
    margin: 20px auto;
  }

  /*.week:first-of-type .day:first-of-type {
    margin-left: 42.9%;
  }

  .week:last-of-type .day:last-of-type {
    margin-right: 14.285%;
  }*/
</style>
