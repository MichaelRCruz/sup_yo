<template lang="html">
  <div id="calendar" class="animated fadeInRight">


    <div class="toggle"></div>
    <div class="parent">
      <div class="child" v-for="days in month"></div>
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

  .toggle {
    border: 1px solid black;
    width: 300px;
    height: 20px;
    margin-bottom: 5px;
  }

  .parent {
    display: flex;
    flex-flow: row wrap;
    /*border: 1px solid black;*/
    width: 300px;
    height: 200px;
  }
  .child {
    flex: 1 0 14.2%;
    border: 1px solid black;
    /*margin: 1px;*/
  }

</style>
