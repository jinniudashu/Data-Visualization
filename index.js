var app = new Vue({
  el: "#chart",
  data: {
    chartWidth: 500,
    chartHeight: 400,
    chartData: [5, 8, 20, 3, 17, 14]
    // width: 200,
    // height: 200,
    // x: 10,
    // y: 10
  },
  methods: {
    barWidth(value) {
      return (this.chartWidth / this.dataMax) * value;
    }
  },
  computed: {
    dataMax() {
      return Math.max(...this.chartData);
    }
  }
});
