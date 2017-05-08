<template lang="html">
  <div id="calendar">

    <div @click="setRange()">
        <vue-slider id="slider"
                    ref="slider"
                    v-bind="slider"
                    v-model="slider.value">
        </vue-slider>
    </div>

    <form class="form-inline">
      <label class="sr-only" for="inlineFormInputGroup"></label>
      <div class="input-group mb-2 mr-sm-2 mb-sm-0">
        <div class="input-group-addon" @click="focus()">
          <i class="fa fa-calendar"></i>
        </div>
        <input type="text"
               class="form-control" id="inlineFormInputGroup" placeholder="MM/DD/YYYY"
               :value="this.selectionDisplay"
               @click="focus()">
      </div>
    </form>

    <div v-show="active">
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
  import vueSlider from 'vue-slider-component';

  export default {
    data() {
      return {
        month: [],
        weekdays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        availableDates: [],
        datesRange: [ null, null ],
        moment: moment(),
        selectionDisplay: "",
        selection: {},
        active: false,
        slider: {
          value: [
            -5,
            5
          ],
          width: "100%",
          height: 8,
          dotSize: 16,
          min: -30,
          max: 30,
          disabled: false,
          show: true,
          tooltip: "always",
          formatter: "{value} days",
          bgStyle: {
            "backgroundColor": "#dcf4d3",
            "boxShadow": "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
          },
          sliderStyle: [
            {
              "backgroundColor": "#ACE496"
            },
            {
              "backgroundColor": "#ACE496"
            }
          ],
          tooltipStyle: {
            "backgroundColor": "#5F7279",
            "borderColor": "#5F7279"
          },
          processStyle: {
            "backgroundColor": "#ACE496",
            // "boxShadow": "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
          }
        }
      }
    },
    computed: {
      filterDate() {
        var _self = this;
        if (this.active) {
          return this.month.map(function(e) {
            var color = '#ACE496';
            var borderColor = '1px solid #bdbdbd';
            var cursorStyle = 'not-allowed';
            _self.availableDates.forEach(function(el) {
              if (el.format('LL') == e.format('LL')) {
                borderColor = '2px solid #5F7279';
                cursorStyle = 'pointer';
              }
            });
            if ( e.unix() >= _self.datesRange[0]
                 && e.unix() <= _self.datesRange[1] ) {
                   borderColor = '2px solid #5F7279';
                   cursorStyle = 'pointer'
                 }
            if (e.format('M') != _self.moment.format('M')) {
              color = '#dcf4d3';
            }
            e['style'] = { backgroundColor: color,
                           border: borderColor,
                           cursor: cursorStyle
                         }
            return e
          })
        }
      }
    },
    beforeMount() {
      this.setDates();
      this.setRange();
    },
    components: {
      vueSlider
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
        while ( fun < end ) {
          this.month.push(fun.clone());
          fun.add(1, 'day');
        }
      },
      setRange() {
        this.datesRange[0] = this.moment.clone()
                                        .add(this.slider.value[0] - 1, 'days')
                                        .unix();
        this.datesRange[1] = this.moment.clone()
                                        .add(this.slider.value[1], 'days')
                                        .unix();
        this.active = false;
      },
      selectDate(date) {
        var _self = this;
        if ( date.unix() >= this.datesRange[0]
             && date.unix() <= this.datesRange[1] ) {
          this.selectionDisplay = date.format('MM/DD/YYYY');
          this.selection = date;
          this.active = false;
        }
        this.availableDates.forEach(function(el) {
          if (el.format('LL') == date.format('LL')) {
            _self.selectionDisplay = date.format('MM/DD/YYYY');
            _self.selection = date;
            _self.active = false;
          }
        });
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

  #slider {
    margin: 20px;
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
