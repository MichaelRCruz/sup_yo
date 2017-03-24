<template lang="html">
  <div id="calendar" class="animated fadeInRight">


    <div class="tabs is-fullwidth">
      <ul>
        <li>
          <a @click="lastMonth(moment)">
            <span class="icon"><i class="fa fa-angle-left"></i></span>
            <span>Left</span>
          </a>
        </li>
        <h1>{{ moment.format('MMMM') }}</h1>
        <li>
          <a @click="nextMonth(moment)">
            <span>Right</span>
            <span class="icon"><i class="fa fa-angle-right"></i></span>
          </a>
        </li>
      </ul>
    </div>

    <div class="month">
      <div class="titles">
        <div class="dayNames" v-for="day in days">
          {{ day }}
        </div>
      </div>
      <div class="week" v-for="week in weeks">
        <div class="day" v-for="day in days"></div>
      </div>
    </div>


  </div>
</template>


<script scoped>
  import moment from 'moment';

  export default {
    data() {
      return {
        month: [],
        weeks: [1, 2, 3, 4, 5],
        days: ["Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        moment: moment()
        }
      },
      beforeMount() {
        this.setDates();
      },
      methods: {
        nextMonth(moment) {
          this.moment = moment.clone().add(1, 'months');
          this.setDates();
          console.log('toggle forward', this.month);
        },
        lastMonth(moment) {
          this.moment = moment.clone().subtract(1, 'months');
          this.setDates();
          console.log('toggle backward', this.month);
        },
        setDates() {
          this.month = [];
          var fun = this.moment.clone().startOf('month').startOf('week');
          var end = this.moment.clone().endOf('month').endOf('week');
          while (fun < end) {
            this.month.push(fun.clone());
            fun.add(1, 'day');
          }
        }
      },
      computed: {
        testFunction() {
          console.log('Hello, world.');
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
    height: 90px;
  }

  .day {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    color: #232323;
    padding: 10px;
    box-shadow:
      -1px -1px #00d1b2,
      inset -1px -1px 0 0 #00d1b2;
  }

  .month {
    max-width: 860px;
    margin: 20px auto;
  }

  .titles {
    display: flex;
    height: 25px;
  }

  .dayNames {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    color: #232323;
    padding: 0px;
    box-shadow:
      -1px -1px #00d1b2,
      inset -1px -1px 0 0 #00d1b2;
    margin: 0 auto;
  }

  /*.week:first-of-type .day:first-of-type {
    margin-left: 42.9%;
  }

  .week:last-of-type .day:last-of-type {
    margin-right: 14.285%;
  }*/
</style>
