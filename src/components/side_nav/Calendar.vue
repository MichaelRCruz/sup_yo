<template lang="html">
  <div id="calendar" class="animated fadeInRight">


    <form class="form-inline">
      <label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon" @click="focus()">
          <i class="fa fa-calendar"></i>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="MM/DD/YYYY" :value="this.selection" @click="focus()">
      </div>
    </form>

    <div v-show="active" class="animated bounceIn">
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

             :style="[date.style]">
          {{ date.format('D') }}
        </div>
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
        availableDates: [],
        moment: moment(),
        selection: "",
        active: false
      }
    },
    computed: {
      filterDate() {
        var _self = this;
        return this.month.map(function(e) {
          var color = '#ACE496';
          var available = false;
          _self.availableDates.forEach(function(el) {
            if (el.format('LL') == e.format('LL')) {
              available = true;
              color = 'red';
            }
          });
          if (e.format('M') != _self.moment.format('M')) {
            color = '#dcf4d3';
          }
          e['style'] = { backgroundColor: color }
          return e
        })
      }
    },
    beforeMount() {
      this.setDates();
      // this.availableDates.push(this.moment.clone().add(1, 'd'));
      // this.availableDates.push(this.moment.clone().add(2, 'd'));
      for (var i = 1; i <= 365; i++) {
        this.availableDates.push(this.moment.clone().add(i, 'd'));
      }
      for (var i = 365; i > 0; i--) {
        this.availableDates.push(this.moment.clone().subtract(i, 'd'));
      }
      console.log(this.availableDates);
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
        this.selection = date.format('MM/DD/YYYY');
        this.active = false;
      },
      focus() {
        this.active = !this.active;
      }
    }
  }
</script>

<style lang="css" scoped>

  #calendar {
    flex: 1;
    padding: 30px 30px 30px 0;
  }

  .form-inline {
    margin-bottom: 15px;
  }

  .input-group-addon {
    cursor: pointer;
    color: #dcf4d3;
    background-color: #5F7279;
  }

  .toggleContainer {
    width: 307px;
    height: 20px;
    margin-bottom: 5px;
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    color: #5F7279;
  }

  .toggleLeft {
    text-align: left;
    flex: 1;
    margin-left: 15px;
    font-size: 20px;
    cursor: pointer;
  }

  .currentMonth {
    text-align: center;
    flex: 1;
    font-family: 'Archivo Black', sans-serif;
    font-size: 17px;
    text-align: center;
    vertical-align: middle;
    line-height: 20px;
  }

  .toggleRight {
    text-align: right;
    flex: 1;
    margin-right: 15px;
    font-size: 20px;
    cursor: pointer;
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
    font-family: 'Archivo Black', sans-serif;
    color: #5F7279;
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
    cursor: pointer;
    color: #5F7279;
  }

  .child:hover {
    background-color: #ED8A9A;
  }

</style>
