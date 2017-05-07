<template lang="html">
  <div id="calendar" class="animated fadeInRight">


      <div class="toggleContainer">
          <div class="toggle toggleLeft">
            <i @click="lastMonth(moment)" class="fa fa-arrow-circle-left"></i>
          </div>
          <div class="toggle currentMonth">
            {{ this.moment.format('MMM') + this.moment.format(' YYYY') }}
          </div>
          <div class="toggle toggleRight">
            <i @click="nextMonth(moment)" class="fa fa-arrow-circle-right"></i>
          </div>
      </div>

      <div class="dayNameContainer">
        <div class="dayNames" v-for="days in weekdays">
          {{ days }}
        </div>
      </div>

      <div class="parent">
        <div class="child"
             v-for="date in filterDate"
             @click="selectDate(date)"
             :style="date.style">
          {{ date.format('D') }}
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
        weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        moment: moment()
        }
      },
      computed: {
        filterDate() {
          var _self = this
          return this.month.map(function(e) {
            var color = '#dcdcdc';
            if ( e.format('M') != _self.moment.format('M') ) {
              color = '#ffffff';
            }

            e['style'] = { backgroundColor: color }
            return e
          })
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
        },
        selectDate(date) {
          console.log(date);
        }
      }
  }
</script>

<style lang="css">

  #calendar {
    flex: 1;
    padding: 30px 30px 30px 0;
  }

  .toggleContainer {
    width: 307px;
    height: 20px;
    margin-bottom: 5px;
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
  }

  .toggleLeft {
    text-align: left;
    flex: 1;
    margin-left: 15px;
  }

  .currentMonth {
    text-align: center;
    flex: 1
  }

  .toggleRight {
    text-align: right;
    flex: 1;
    margin-right: 15px;
  }

  .dayNameContainer {
    width: 307px;
    height: 24px;
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
  }

  .dayNames {
    margin-right: 14px;
    text-align: center;
    flex: 1 0 12.2%;
    height: 20px;
    margin: 1px;
    border-radius: 2px;
  }

  .parent {
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    width: 307px;
  }
  .child {
    flex: 1 0 12.2%;
    border: 1px solid #bdbdbd;
    height: 40px;
    margin: 1px;
    background-color: #dcdcdc;
    border-radius: 2px;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
  }

</style>
