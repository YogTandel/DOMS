"use strict";
function ownKeys(e, t) {
  var o,
    r = Object.keys(e);
  return (
    Object.getOwnPropertySymbols &&
      ((o = Object.getOwnPropertySymbols(e)),
      t &&
        (o = o.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
      r.push.apply(r, o)),
    r
  );
}
function _objectSpread(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(o), !0).forEach(function (t) {
          _defineProperty(e, t, o[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o))
      : ownKeys(Object(o)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t));
        });
  }
  return e;
}
function _defineProperty(t, e, o) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = o),
    t
  );
}
function _typeof(t) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
var docReady = function (t) {
    "loading" === document.readyState
      ? document.addEventListener("DOMContentLoaded", t)
      : setTimeout(t, 1);
  },
  resize = function (t) {
    return window.addEventListener("resize", t);
  },
  isIterableArray = function (t) {
    return Array.isArray(t) && !!t.length;
  },
  camelize = function (t) {
    t = t.replace(/[-_\s.]+(.)?/g, function (t, e) {
      return e ? e.toUpperCase() : "";
    });
    return "".concat(t.substr(0, 1).toLowerCase()).concat(t.substr(1));
  },
  getData = function (e, o) {
    try {
      return JSON.parse(e.dataset[camelize(o)]);
    } catch (t) {
      return e.dataset[camelize(o)];
    }
  },
  hexToRgb = function (t) {
    (t = 0 === t.indexOf("#") ? t.substring(1) : t),
      (t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
        t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, o, r) {
          return e + e + o + o + r + r;
        })
      ));
    return t
      ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
      : null;
  },
  rgbaColor = function () {
    var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "#fff",
      e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0.5;
    return "rgba(".concat(hexToRgb(t), ", ").concat(e, ")");
  },
  getColor = function (t) {
    var e =
      1 < arguments.length && void 0 !== arguments[1]
        ? arguments[1]
        : document.documentElement;
    return getComputedStyle(e).getPropertyValue("--falcon-".concat(t)).trim();
  },
  getColors = function (t) {
    return {
      primary: getColor("primary", t),
      secondary: getColor("secondary", t),
      success: getColor("success", t),
      info: getColor("info", t),
      warning: getColor("warning", t),
      danger: getColor("danger", t),
      light: getColor("light", t),
      dark: getColor("dark", t),
    };
  },
  getSoftColors = function (t) {
    return {
      primary: getColor("soft-primary", t),
      secondary: getColor("soft-secondary", t),
      success: getColor("soft-success", t),
      info: getColor("soft-info", t),
      warning: getColor("soft-warning", t),
      danger: getColor("soft-danger", t),
      light: getColor("soft-light", t),
      dark: getColor("soft-dark", t),
    };
  },
  getGrays = function (t) {
    return {
      white: getColor("white", t),
      100: getColor("100", t),
      200: getColor("200", t),
      300: getColor("300", t),
      400: getColor("400", t),
      500: getColor("500", t),
      600: getColor("600", t),
      700: getColor("700", t),
      800: getColor("800", t),
      900: getColor("900", t),
      1e3: getColor("1000", t),
      1100: getColor("1100", t),
      black: getColor("black", t),
    };
  },
  hasClass = function (t, e) {
    return t.classList.value.includes(e);
  },
  addClass = function (t, e) {
    t.classList.add(e);
  },
  getOffset = function (t) {
    var e = t.getBoundingClientRect(),
      o = window.pageXOffset || document.documentElement.scrollLeft,
      t = window.pageYOffset || document.documentElement.scrollTop;
    return { top: e.top + t, left: e.left + o };
  };
function isScrolledIntoView(t) {
  var e = t.getBoundingClientRect(),
    o = window.innerHeight || document.documentElement.clientHeight,
    t = window.innerWidth || document.documentElement.clientWidth,
    o = e.top <= o && 0 <= e.top + e.height,
    e = e.left <= t && 0 <= e.left + e.width;
  return o && e;
}
var breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1540 },
  getBreakpoint = function (t) {
    var e,
      t = t && t.classList.value;
    return (e = t
      ? breakpoints[
          t
            .split(" ")
            .filter(function (t) {
              return t.includes("navbar-expand-");
            })
            .pop()
            .split("-")
            .pop()
        ]
      : e);
  },
  setCookie = function (t, e, o) {
    var r = new Date();
    r.setTime(r.getTime() + o),
      (document.cookie = ""
        .concat(t, "=")
        .concat(e, ";expires=")
        .concat(r.toUTCString()));
  },
  getCookie = function (t) {
    t = document.cookie.match("(^|;) ?".concat(t, "=([^;]*)(;|$)"));
    return t && t[2];
  },
  settings = {
    tinymce: { theme: "oxide" },
    chart: { borderColor: "rgba(255, 255, 255, 0.8)" },
  },
  newChart = function (t, e) {
    t = t.getContext("2d");
    return new window.Chart(t, e);
  },
  getItemFromStore = function (e, o) {
    var r =
      2 < arguments.length && void 0 !== arguments[2]
        ? arguments[2]
        : localStorage;
    try {
      return JSON.parse(r.getItem(e)) || o;
    } catch (t) {
      return r.getItem(e) || o;
    }
  },
  setItemToStore = function (t, e) {
    return (
      2 < arguments.length && void 0 !== arguments[2]
        ? arguments[2]
        : localStorage
    ).setItem(t, e);
  },
  getStoreSpace = function () {
    var t =
      0 < arguments.length && void 0 !== arguments[0]
        ? arguments[0]
        : localStorage;
    return parseFloat(
      (escape(encodeURIComponent(JSON.stringify(t))).length / 1048576).toFixed(
        2
      )
    );
  },
  getDates = function (o, t) {
    var r =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 864e5;
    return Array.from({ length: 1 + (t - o) / r }, function (t, e) {
      return new Date(o.valueOf() + r * e);
    });
  },
  getPastDates = function (t) {
    var e;
    switch (t) {
      case "week":
        e = 7;
        break;
      case "month":
        e = 30;
        break;
      case "year":
        e = 365;
        break;
      default:
        e = t;
    }
    var o = new Date(),
      r = o,
      o = new Date(new Date().setDate(o.getDate() - (e - 1)));
    return getDates(o, r);
  },
  getRandomNumber = function (t, e) {
    return Math.floor(Math.random() * (e - t) + t);
  },
  utils = {
    docReady: docReady,
    resize: resize,
    isIterableArray: isIterableArray,
    camelize: camelize,
    getData: getData,
    hasClass: hasClass,
    addClass: addClass,
    hexToRgb: hexToRgb,
    rgbaColor: rgbaColor,
    getColor: getColor,
    getColors: getColors,
    getSoftColors: getSoftColors,
    getGrays: getGrays,
    getOffset: getOffset,
    isScrolledIntoView: isScrolledIntoView,
    getBreakpoint: getBreakpoint,
    setCookie: setCookie,
    getCookie: getCookie,
    newChart: newChart,
    settings: settings,
    getItemFromStore: getItemFromStore,
    setItemToStore: setItemToStore,
    getStoreSpace: getStoreSpace,
    getDates: getDates,
    getPastDates: getPastDates,
    getRandomNumber: getRandomNumber,
  },
  getPosition = function (t, e, o, r, a) {
    return {
      top: t[1] - a.contentSize[1] - 10,
      left: t[0] - a.contentSize[0] / 2,
    };
  },
  echartSetOption = function (e, o, r) {
    var t = document.body;
    e.setOption(window._.merge(r(), o)),
      t.addEventListener("clickControl", function (t) {
        "theme" === t.detail.control && e.setOption(window._.merge(r(), o));
      });
  },
  tooltipFormatter = function (t) {
    var e = "";
    return (
      t.forEach(function (t) {
        e +=
          '<div class=\'ms-1\'> \n        <h6 class="text-700"><span class="fas fa-circle me-1 fs--2" style="color:'
            .concat(t.borderColor || t.color, '"></span>\n          ')
            .concat(t.seriesName, " : ")
            .concat(
              "object" === _typeof(t.value) ? t.value[1] : t.value,
              "\n        </h6>\n      </div>"
            );
      }),
      "<div>\n            <p class='mb-2 text-600'>\n              "
        .concat(
          window.dayjs(t[0].axisValue).isValid()
            ? window.dayjs(t[0].axisValue).format("MMMM DD")
            : t[0].axisValue,
          "\n            </p>\n            "
        )
        .concat(e, "\n          </div>")
    );
  },
  echartsAreaPiecesChartInit = function () {
    var t,
      e = document.querySelector(".echart-area-pieces-chart-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            position: function (t, e, o, r, a) {
              return getPosition(t, e, o, r, a);
            },
            axisPointer: { type: "none" },
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "category",
            boundaryGap: !1,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[400],
              margin: 15,
              formatter: function (t) {
                return window.dayjs(t).format("MMM DD");
              },
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
          },
          visualMap: {
            type: "piecewise",
            show: !1,
            dimension: 0,
            seriesIndex: 0,
            pieces: [
              {
                gt: 1,
                lt: 3,
                color: utils.rgbaColor(utils.getColor("primary"), 0.4),
              },
              {
                gt: 5,
                lt: 7,
                color: utils.rgbaColor(utils.getColor("primary"), 0.4),
              },
            ],
          },
          series: [
            {
              type: "line",
              name: "Total",
              smooth: 0.6,
              symbol: "none",
              lineStyle: { color: utils.getColor("primary"), width: 5 },
              markLine: {
                symbol: ["none", "none"],
                label: { show: !1 },
                data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }],
              },
              areaStyle: {},
              data: [
                ["2019-10-10", 200],
                ["2019-10-11", 560],
                ["2019-10-12", 750],
                ["2019-10-13", 580],
                ["2019-10-14", 250],
                ["2019-10-15", 300],
                ["2019-10-16", 450],
                ["2019-10-17", 300],
                ["2019-10-18", 100],
              ],
            },
          ],
          grid: { right: 20, left: 5, bottom: 5, top: 8, containLabel: !0 },
        };
      }));
  },
  echartsBarLineChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-bar-line-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: { color: utils.getGrays()[500] },
              label: {
                show: !0,
                backgroundColor: utils.getGrays()[600],
                color: utils.getGrays()[100],
              },
            },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: tooltipFormatter,
          },
          toolbox: {
            top: 0,
            feature: {
              dataView: { show: !1 },
              magicType: { show: !0, type: ["line", "bar"] },
              restore: { show: !0 },
              saveAsImage: { show: !0 },
            },
            iconStyle: { borderColor: utils.getGrays()[700], borderWidth: 1 },
            emphasis: { iconStyle: { textFill: utils.getGrays()[600] } },
          },
          legend: {
            top: 40,
            data: ["Evaporation", "Precipitation", "Average temperature"],
            textStyle: { color: utils.getGrays()[600] },
          },
          xAxis: [
            {
              type: "category",
              data: e,
              axisLabel: {
                color: utils.getGrays()[600],
                formatter: function (t) {
                  return t.slice(0, 3);
                },
              },
              axisPointer: { type: "shadow" },
              axisLine: {
                show: !0,
                lineStyle: { color: utils.getGrays()[300] },
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              min: 0,
              max: 250,
              interval: 50,
              axisLabel: {
                color: utils.getGrays()[600],
                formatter: "{value} ml",
              },
              splitLine: {
                show: !0,
                lineStyle: { color: utils.getGrays()[200] },
              },
            },
            {
              type: "value",
              min: 0,
              max: 25,
              interval: 5,
              axisLabel: {
                color: utils.getGrays()[600],
                formatter: "{value} °C",
              },
              splitLine: {
                show: !0,
                lineStyle: { color: utils.getGrays()[200] },
              },
            },
          ],
          series: [
            {
              name: "Evaporation",
              type: "bar",
              data: [
                2, 4.9, 7, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20, 6.4, 3.3,
              ],
              itemStyle: {
                color: utils.getColor("primary"),
                barBorderRadius: [3, 3, 0, 0],
              },
            },
            {
              name: "Precipitation",
              type: "bar",
              data: [
                2.6, 5.9, 9, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6, 2.3,
              ],
              itemStyle: {
                color: utils.getColor("info"),
                barBorderRadius: [3, 3, 0, 0],
              },
            },
            {
              name: "Average temperature",
              type: "line",
              yAxisIndex: 1,
              data: [
                2, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23, 16.5, 12, 6.2,
              ],
              lineStyle: { color: utils.getColor("warning") },
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("warning"),
                borderWidth: 2,
              },
              symbol: "circle",
              symbolSize: 10,
            },
          ],
          grid: { right: 5, left: 5, bottom: 5, top: "23%", containLabel: !0 },
        };
      }));
  },
  echartsBarNegativeChartInit = function () {
    var t,
      e = document.querySelector(".echart-bar-chart-negative-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: tooltipFormatter,
          },
          grid: { top: 5, bottom: 5, left: 5, right: 5 },
          xAxis: {
            type: "value",
            position: "top",
            splitLine: {
              lineStyle: { type: "dashed", color: utils.getGrays()[200] },
            },
          },
          yAxis: {
            type: "category",
            axisLine: { show: !1 },
            axisLabel: { show: !1 },
            axisTick: { show: !1 },
            splitLine: { show: !1 },
            data: [
              "Ten",
              "Nine",
              "Eight",
              "Seven",
              "Six",
              "Five",
              "Four",
              "Three",
              "Two",
              "One",
            ],
          },
          series: [
            {
              name: "Cost",
              type: "bar",
              stack: "total",
              label: { show: !0, formatter: "{b}", color: "#fff" },
              itemStyle: { color: utils.getColor("primary") },
              data: [
                -0.12, -0.19, 0.2, 0.44, -0.23, 0.08, -0.17, 0.47, -0.36, 0.18,
              ],
            },
          ],
        };
      }));
  },
  echartsBarRaceChartInit = function () {
    var t,
      e,
      o,
      r,
      a = document.querySelector(".echart-bar-race-chart-example");
    a &&
      ((t = utils.getData(a, "options")),
      (e = window.echarts.init(a)),
      (o = Array.from(Array(7).keys()).map(function () {
        return Math.round(200 * Math.random());
      })),
      echartSetOption(e, t, function () {
        return {
          xAxis: {
            max: "dataMax",
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
            axisLabel: { color: utils.getGrays()[500] },
          },
          yAxis: {
            type: "category",
            data: ["A", "B", "C", "D", "E", "F", "G"],
            inverse: !0,
            axisLabel: { color: utils.getGrays()[500] },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[300] } },
            axisTick: { show: !1 },
            animationDuration: 300,
            animationDurationUpdate: 300,
            max: 4,
          },
          series: [
            {
              realtimeSort: !0,
              name: "X",
              type: "bar",
              data: o,
              label: {
                show: !0,
                position: "right",
                color: utils.getGrays()[700],
                fontWeight: 500,
                valueAnimation: !0,
              },
              itemStyle: {
                color: utils.getColor("primary"),
                barBorderRadius: [0, 3, 3, 0],
              },
            },
          ],
          animationDuration: 0,
          animationDurationUpdate: 3e3,
          animationEasing: "linear",
          animationEasingUpdate: "linear",
          grid: { right: "10%", left: 5, bottom: 5, top: 5, containLabel: !0 },
        };
      }),
      (r = function () {
        (o = o.map(function (t) {
          return 0.9 < Math.random()
            ? t + Math.round(2e3 * Math.random())
            : t + Math.round(200 * Math.random());
        })),
          e.setOption({ series: [{ data: o }] });
      }),
      setTimeout(function () {
        r();
      }, 0),
      setInterval(function () {
        r();
      }, 3e3));
  },
  echartsBarSeriesChartInit = function () {
    var t,
      e = document.querySelector(".echart-bar-chart-series-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          color: [utils.getColor("primary"), utils.getColor("info")],
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "value",
            axisLabel: {
              formatter: function (t) {
                return "".concat(t / 1e3, "k");
              },
              color: utils.getGrays()[500],
            },
            axisLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            splitLine: {
              lineStyle: { type: "dashed", color: utils.getGrays()[200] },
            },
          },
          yAxis: {
            type: "category",
            axisLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisLabel: { color: utils.getGrays()[500] },
            axisTick: { show: !1 },
            splitLine: { show: !1 },
            data: ["Brazil", "Indonesia", "USA", "India", "China"],
          },
          series: [
            {
              name: "2011",
              type: "bar",
              data: [18203, 23489, 29034, 104970, 131744],
              itemStyle: { barBorderRadius: [0, 3, 3, 0] },
            },
            {
              name: "2012",
              type: "bar",
              data: [19325, 23438, 31e3, 121594, 134141],
              itemStyle: { barBorderRadius: [0, 3, 3, 0] },
            },
          ],
          grid: { right: 15, left: "12%", bottom: "10%", top: 5 },
        };
      }));
  },
  echartsBarStackedChartInit = function () {
    var t = document.querySelector(".echart-bar-stacked-chart-example");
    if (t) {
      for (
        var e = utils.getData(t, "options"),
          t = window.echarts.init(t),
          o = [],
          r = [],
          a = [],
          i = [],
          l = [],
          s = 0;
        s < 10;
        s += 1
      )
        o.push("Class".concat(s + 1)),
          r.push((2 * Math.random()).toFixed(2)),
          a.push((5 * Math.random()).toFixed(2)),
          i.push((Math.random() + 0.3).toFixed(2)),
          l.push(-Math.random().toFixed(2));
      var n = {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: utils.rgbaColor(utils.getColor("dark"), 0.3),
        },
      };
      echartSetOption(t, e, function () {
        return {
          color: [
            utils.getColor("primary"),
            utils.getColor("info"),
            utils.getColor("warning"),
            utils.getColor("danger"),
          ],
          legend: {
            data: ["Bar1", "Bar2", "Bar3", "Bar4"],
            textStyle: { color: utils.getGrays()[700] },
            left: 0,
          },
          toolbox: {
            feature: { magicType: { type: ["stack", "tiled"] } },
            iconStyle: { borderColor: utils.getGrays()[700], borderWidth: 1 },
          },
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          xAxis: {
            data: o,
            splitLine: { show: !1 },
            splitArea: { show: !1 },
            axisLabel: { color: utils.getGrays()[600] },
            axisLine: { lineStyle: { color: utils.getGrays()[400] } },
          },
          yAxis: {
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
            axisLabel: { color: utils.getGrays()[600] },
          },
          series: [
            { name: "Bar1", type: "bar", stack: "one", emphasis: n, data: r },
            { name: "Bar2", type: "bar", stack: "one", emphasis: n, data: a },
            { name: "Bar3", type: "bar", stack: "two", emphasis: n, data: i },
            { name: "Bar4", type: "bar", stack: "two", emphasis: n, data: l },
          ],
          grid: { top: "10%", bottom: 10, left: 5, right: 7, containLabel: !0 },
        };
      });
    }
  },
  echartsBarTimelineChartInit = function () {
    var t,
      e,
      r,
      o,
      a = document.querySelector(".echart-bar-timeline-chart-example");
    a &&
      ((t = utils.getData(a, "options")),
      (e = window.echarts.init(a)),
      (r = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]),
      ((o = {}).dataTI = (a = function (o) {
        return Object.keys(o).reduce(function (t, e) {
          return _objectSpread(
            _objectSpread({}, t),
            {},
            _defineProperty(
              {},
              e,
              o[e].map(function (t, e) {
                return { name: r[e], value: t };
              })
            )
          );
        }, {});
      })({
        2005: [
          88.68, 112.38, 1400, 262.42, 589.56, 882.41, 625.61, 684.6, 90.26,
          1461.51, 892.83, 966.5,
        ],
        2006: [
          88.8, 103.35, 1461.81, 276.77, 634.94, 939.43, 672.76, 750.14, 93.81,
          1545.05, 925.1, 1011.03,
        ],
        2007: [
          101.26, 110.19, 1804.72, 311.97, 762.1, 1133.42, 783.8, 915.38,
          101.84, 1816.31, 986.02, 1200.18,
        ],
        2008: [
          112.83, 122.58, 2034.59, 313.58, 907.95, 1302.02, 916.72, 1088.94,
          111.8, 2100.11, 1095.96, 1418.09,
        ],
        2009: [
          118.29, 128.85, 2207.34, 477.59, 929.6, 1414.9, 980.57, 1154.33,
          113.82, 2261.86, 1163.08, 1495.45,
        ],
        2010: [
          124.36, 145.58, 2562.81, 554.48, 1095.28, 1631.08, 1050.15, 1302.9,
          114.15, 2540.1, 1360.56, 1729.02,
        ],
        2011: [
          136.27, 159.72, 2905.73, 641.42, 1306.3, 1915.57, 1277.44, 1701.5,
          124.94, 3064.78, 1583.04, 2015.31,
        ],
      })),
      (o.dataSI = a({
        2005: [
          2026.51, 2135.07, 5271.57, 2357.04, 1773.21, 3869.4, 1580.83, 2971.68,
          4381.2, 10524.96, 7164.75, 2245.9,
        ],
        2006: [
          2191.43, 2457.08, 6110.43, 2755.66, 2374.96, 4566.83, 1915.29,
          3365.31, 4969.95, 12282.89, 8511.51, 2711.18,
        ],
        2007: [
          2509.4, 2892.53, 7201.88, 3454.49, 3193.67, 5544.14, 2475.45, 3695.58,
          5571.06, 14471.26, 10154.25, 3370.96,
        ],
        2008: [
          2626.41, 3709.78, 8701.34, 4242.36, 4376.19, 7158.84, 3097.12,
          4319.75, 6085.84, 16993.34, 11567.42, 4198.93,
        ],
        2009: [
          2855.55, 3987.84, 8959.83, 3993.8, 5114, 7906.34, 3541.92, 4060.72,
          6001.78, 18566.37, 11908.49, 4905.22,
        ],
        2010: [
          3388.38, 4840.23, 10707.68, 5234, 6367.69, 9976.82, 4506.31, 5025.15,
          7218.32, 21753.93, 14297.93, 6436.62,
        ],
        2011: [
          3752.48, 5928.32, 13126.86, 6635.26, 8037.69, 12152.15, 5611.48,
          5962.41, 7927.89, 25203.28, 16555.58, 8309.38,
        ],
      })),
      (o.dataPI = a({
        2005: [
          4854.33, 1658.19, 3340.54, 1611.07, 1542.26, 3295.45, 1413.83,
          1857.42, 4776.2, 6612.22, 5360.1, 2137.77,
        ],
        2006: [
          5837.55, 1902.31, 3895.36, 1846.18, 1934.35, 3798.26, 1687.07,
          2096.35, 5508.48, 7914.11, 6281.86, 2390.29,
        ],
        2007: [
          7236.15, 2250.04, 4600.72, 2257.99, 2467.41, 4486.74, 2025.44,
          2493.04, 6821.11, 9730.91, 7613.46, 2789.78,
        ],
        2008: [
          8375.76, 2886.65, 5276.04, 2759.46, 3212.06, 5207.72, 2412.26,
          2905.68, 7872.23, 11888.53, 8799.31, 3234.64,
        ],
        2009: [
          9179.19, 3405.16, 6068.31, 2886.92, 3696.65, 5891.25, 2756.26,
          3371.95, 8930.85, 13629.07, 9918.78, 3662.15,
        ],
        2010: [
          10600.84, 4238.65, 7123.77, 3412.38, 4209.03, 6849.37, 3111.12,
          4040.55, 9833.51, 17131.45, 12063.82, 4193.69,
        ],
        2011: [
          12363.18, 5219.24, 8483.17, 3960.87, 5015.89, 8158.98, 3679.91,
          4918.09, 11142.86, 20842.21, 14180.23, 4975.96,
        ],
      })),
      echartSetOption(e, t, function () {
        return {
          baseOption: {
            timeline: {
              axisType: "category",
              autoPlay: !0,
              playInterval: 1e3,
              data: [
                "2005-01-01",
                "2006-01-01",
                "2007-01-01",
                "2008-01-01",
                "2009-01-01",
                "2010-01-01",
                "2011-01-01",
              ],
              label: {
                formatter: function (t) {
                  return new Date(t).getFullYear();
                },
              },
              lineStyle: { color: utils.getColor("info") },
              itemStyle: { color: utils.getColor("secondary") },
              checkpointStyle: {
                color: utils.getColor("primary"),
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
              },
              controlStyle: { color: utils.getColor("info") },
            },
            title: { textStyle: { color: utils.getGrays()[700] } },
            tooltip: {
              trigger: "axis",
              axisPointer: { type: "shadow" },
              padding: [7, 10],
              backgroundColor: utils.getGrays()[100],
              borderColor: utils.getGrays()[300],
              textStyle: { color: utils.getColors().dark },
              borderWidth: 1,
              transitionDuration: 0,
              formatter: tooltipFormatter,
            },
            legend: {
              left: "right",
              data: [
                "Primary industry",
                "Secondary industry",
                "Tertiary Industry",
              ],
              textStyle: { color: utils.getGrays()[700] },
            },
            calculable: !0,
            xAxis: [
              {
                type: "category",
                data: r,
                splitLine: { show: !1 },
                axisLabel: { color: utils.getGrays()[600] },
                axisLine: { lineStyle: { color: utils.getGrays()[400] } },
              },
            ],
            yAxis: [
              {
                type: "value",
                axisLabel: {
                  formatter: function (t) {
                    return "".concat(t / 1e3, "k");
                  },
                  color: utils.getGrays()[600],
                },
                splitLine: { lineStyle: { color: utils.getGrays()[200] } },
              },
            ],
            series: [
              {
                name: "Primary industry",
                type: "bar",
                itemStyle: {
                  color: utils.getColor("primary"),
                  barBorderRadius: [3, 3, 0, 0],
                },
              },
              {
                name: "Secondary industry",
                type: "bar",
                itemStyle: {
                  color: utils.getColor("info"),
                  barBorderRadius: [3, 3, 0, 0],
                },
              },
              {
                name: "Tertiary Industry",
                type: "bar",
                itemStyle: {
                  color: utils.getColor("warning"),
                  barBorderRadius: [3, 3, 0, 0],
                },
              },
            ],
            grid: {
              top: "10%",
              bottom: "15%",
              left: 5,
              right: 10,
              containLabel: !0,
            },
          },
          options: [
            {
              title: { text: "2005" },
              series: [
                { data: o.dataPI[2005] },
                { data: o.dataSI[2005] },
                { data: o.dataTI[2005] },
              ],
            },
            {
              title: { text: "2006" },
              series: [
                { data: o.dataPI[2006] },
                { data: o.dataSI[2006] },
                { data: o.dataTI[2006] },
              ],
            },
            {
              title: { text: "2007" },
              series: [
                { data: o.dataPI[2007] },
                { data: o.dataSI[2007] },
                { data: o.dataTI[2007] },
              ],
            },
            {
              title: { text: "2008" },
              series: [
                { data: o.dataPI[2008] },
                { data: o.dataSI[2008] },
                { data: o.dataTI[2008] },
              ],
            },
            {
              title: { text: "2009" },
              series: [
                { data: o.dataPI[2009] },
                { data: o.dataSI[2009] },
                { data: o.dataTI[2009] },
              ],
            },
            {
              title: { text: "2010" },
              series: [
                { data: o.dataPI[2010] },
                { data: o.dataSI[2010] },
                { data: o.dataTI[2010] },
              ],
            },
            {
              title: { text: "2011" },
              series: [
                { data: o.dataPI[2011] },
                { data: o.dataSI[2011] },
                { data: o.dataTI[2011] },
              ],
            },
          ],
        };
      }));
  },
  echartsWaterFallChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-nightfall-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "2021-06-05",
        "2021-06-06",
        "2021-06-07",
        "2021-06-08",
        "2021-06-09",
        "2021-06-10",
        "2021-06-11",
        "2021-06-12",
        "2021-06-13",
        "2021-06-14",
        "2021-06-15",
      ]),
      echartSetOption(o, t, function () {
        return {
          legend: {
            data: ["Expenditure", "Income"],
            textStyle: { color: utils.getGrays()[600] },
          },
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: function (t) {
              t = "-" !== t[1].value ? t[1] : t[2];
              return ""
                .concat(window.dayjs(t.name).format("MMM DD"), "<br/>")
                .concat(t.seriesName, " : ")
                .concat(t.value);
            },
            transitionDuration: 0,
            axisPointer: { type: "shadow" },
          },
          xAxis: {
            type: "category",
            data: e,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[400],
              formatter: function (t) {
                return window.dayjs(t).format("MMM DD");
              },
              margin: 15,
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            boundaryGap: !0,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
            min: 600,
          },
          series: [
            {
              name: "Assist",
              type: "bar",
              stack: "Total",
              itemStyle: {
                barBorderColor: "transparent",
                color: "transparent",
              },
              emphasis: {
                itemStyle: {
                  barBorderColor: "transparent",
                  color: "transparent",
                },
              },
              data: [
                0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292,
              ],
            },
            {
              name: "Income",
              type: "bar",
              stack: "Total",
              label: {
                show: !0,
                position: "top",
                color: utils.getGrays()[600],
              },
              data: [900, 345, 393, "-", "-", 135, 178, 286, "-", "-", "-"],
              itemStyle: {
                color: utils.getColor("primary"),
                barBorderRadius: [3, 3, 0, 0],
              },
            },
            {
              name: "Expenditure",
              type: "bar",
              stack: "Total",
              label: {
                show: !0,
                position: "bottom",
                color: utils.getGrays()[600],
              },
              data: ["-", "-", "-", 108, 154, "-", "-", "-", 119, 361, 203],
              itemStyle: {
                color: utils.getColor("success"),
                barBorderRadius: [3, 3, 0, 0],
              },
            },
          ],
          grid: { right: "3%", left: "10%", bottom: "10%", top: "10%" },
        };
      }));
  },
  echartsBasicBarChartInit = function () {
    var t,
      e,
      o,
      r = document.querySelector(".echart-basic-bar-chart-example");
    r &&
      ((t = utils.getData(r, "options")),
      (r = window.echarts.init(r)),
      (e = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]),
      (o = [
        1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204,
      ]),
      echartSetOption(r, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: tooltipFormatter,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          xAxis: {
            type: "category",
            data: e,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[400],
              formatter: function (t) {
                return t.substring(0, 3);
              },
              margin: 15,
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            boundaryGap: !0,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
            min: 600,
          },
          series: [
            {
              type: "bar",
              name: "Total",
              data: o,
              lineStyle: { color: utils.getColor("primary") },
              itemStyle: {
                color: utils.getColor("primary"),
                barBorderRadius: [3, 3, 0, 0],
              },
              showSymbol: !1,
              symbol: "circle",
              smooth: !1,
              hoverAnimation: !0,
            },
          ],
          grid: { right: "3%", left: "10%", bottom: "10%", top: "5%" },
        };
      }));
  },
  echartsBasicCandlestickChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-candlestick-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        ["2013/1/24", 2320.26, 2320.26, 2287.3, 2362.94],
        ["2013/1/25", 2300, 2291.3, 2288.26, 2308.38],
        ["2013/1/28", 2295.35, 2346.5, 2295.35, 2346.92],
        ["2013/1/29", 2347.22, 2358.98, 2337.35, 2363.8],
        ["2013/1/30", 2360.75, 2382.48, 2347.89, 2383.76],
        ["2013/1/31", 2383.43, 2385.42, 2371.23, 2391.82],
        ["2013/2/1", 2377.41, 2419.02, 2369.57, 2421.15],
        ["2013/2/4", 2425.92, 2428.15, 2417.58, 2440.38],
        ["2013/2/5", 2411, 2433.13, 2403.3, 2437.42],
        ["2013/2/6", 2432.68, 2434.48, 2427.7, 2441.73],
        ["2013/2/7", 2430.69, 2418.53, 2394.22, 2433.89],
        ["2013/2/8", 2416.62, 2432.4, 2414.4, 2443.03],
        ["2013/2/18", 2441.91, 2421.56, 2415.43, 2444.8],
        ["2013/2/19", 2420.26, 2382.91, 2373.53, 2427.07],
        ["2013/2/20", 2383.49, 2397.18, 2370.61, 2397.94],
        ["2013/2/21", 2378.82, 2325.95, 2309.17, 2378.82],
        ["2013/2/22", 2322.94, 2314.16, 2308.76, 2330.88],
        ["2013/2/25", 2320.62, 2325.82, 2315.01, 2338.78],
        ["2013/2/26", 2313.74, 2293.34, 2289.89, 2340.71],
        ["2013/2/27", 2297.77, 2313.22, 2292.03, 2324.63],
        ["2013/2/28", 2322.32, 2365.59, 2308.92, 2366.16],
        ["2013/3/1", 2364.54, 2359.51, 2330.86, 2369.65],
        ["2013/3/4", 2332.08, 2273.4, 2259.25, 2333.54],
        ["2013/3/5", 2274.81, 2326.31, 2270.1, 2328.14],
        ["2013/3/6", 2333.61, 2347.18, 2321.6, 2351.44],
        ["2013/3/7", 2340.44, 2324.29, 2304.27, 2352.02],
        ["2013/3/8", 2326.42, 2318.61, 2314.59, 2333.67],
        ["2013/3/11", 2314.68, 2310.59, 2296.58, 2320.96],
        ["2013/3/12", 2309.16, 2286.6, 2264.83, 2333.29],
        ["2013/3/13", 2282.17, 2263.97, 2253.25, 2286.33],
        ["2013/3/14", 2255.77, 2270.28, 2253.31, 2276.22],
        ["2013/3/15", 2269.31, 2278.4, 2250, 2312.08],
        ["2013/3/18", 2267.29, 2240.02, 2239.21, 2276.05],
        ["2013/3/19", 2244.26, 2257.43, 2232.02, 2261.31],
        ["2013/3/20", 2257.74, 2317.37, 2257.42, 2317.86],
        ["2013/3/21", 2318.21, 2324.24, 2311.6, 2330.81],
        ["2013/3/22", 2321.4, 2328.28, 2314.97, 2332],
        ["2013/3/25", 2334.74, 2326.72, 2319.91, 2344.89],
        ["2013/3/26", 2318.58, 2297.67, 2281.12, 2319.99],
        ["2013/3/27", 2299.38, 2301.26, 2289, 2323.48],
        ["2013/3/28", 2273.55, 2236.3, 2232.91, 2273.55],
        ["2013/3/29", 2238.49, 2236.62, 2228.81, 2246.87],
        ["2013/4/1", 2229.46, 2234.4, 2227.31, 2243.95],
        ["2013/4/2", 2234.9, 2227.74, 2220.44, 2253.42],
        ["2013/4/3", 2232.69, 2225.29, 2217.25, 2241.34],
        ["2013/4/8", 2196.24, 2211.59, 2180.67, 2212.59],
        ["2013/4/9", 2215.47, 2225.77, 2215.47, 2234.73],
        ["2013/4/10", 2224.93, 2226.13, 2212.56, 2233.04],
        ["2013/4/11", 2236.98, 2219.55, 2217.26, 2242.48],
        ["2013/4/12", 2218.09, 2206.78, 2204.44, 2226.26],
      ]),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          toolbox: {
            top: 0,
            feature: { dataZoom: { yAxisIndex: !1 }, restore: { show: !0 } },
            iconStyle: { borderColor: utils.getGrays()[700], borderWidth: 1 },
            emphasis: { iconStyle: { textFill: utils.getGrays()[600] } },
          },
          dataZoom: [{ type: "inside", start: 0, end: 100, minValueSpan: 10 }],
          xAxis: {
            type: "category",
            data: e.map(function (t) {
              return t[0];
            }),
            scale: !0,
            splitLine: { show: !1 },
            splitNumber: 10,
            min: "dataMin",
            max: "dataMax",
            boundaryGap: !0,
            axisPointer: {
              lineStyle: { color: utils.getGrays()[300], type: "dashed" },
            },
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[600],
              formatter: function (t) {
                return window.dayjs(t, "YYYY-MM-DD").format("MMM DD");
              },
              margin: 15,
              fontWeight: 500,
            },
          },
          yAxis: {
            scale: !0,
            axisPointer: { show: !1 },
            splitLine: {
              lineStyle: { color: utils.getGrays()[200], type: "dashed" },
            },
            boundaryGap: !1,
            axisLabel: {
              show: !0,
              color: utils.getGrays()[600],
              margin: 15,
              fontWeight: 500,
            },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
          },
          series: [
            {
              type: "candlestick",
              name: "Volume",
              data: e.map(function (t) {
                return t.slice(1);
              }),
              itemStyle: {
                color: utils.getColor("warning"),
                color0: utils.getColor("primary"),
                borderColor: utils.getColor("warning"),
                borderColor0: utils.getColor("primary"),
              },
            },
          ],
          grid: { right: 5, left: 5, bottom: 5, top: "15%", containLabel: !0 },
        };
      }));
  },
  echartsBasicGaugeChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-basic-gauge-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = function (t) {
        return '\n      <div>\n          <h6 class="fs--1 text-700 mb-0">\n            <span class="fas fa-circle me-1" style=\'color:'
          .concat(t[0].color, "'></span>\n            ")
          .concat(t[0].name, " : ")
          .concat(t[0].value, "\n          </h6>\n      </div>\n      ");
      }),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: e,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          radius: "100%",
          series: [
            {
              name: "Pressure",
              type: "gauge",
              splitLine: { lineStyle: { color: utils.getGrays()[600] } },
              axisLabel: { color: utils.getGrays()[600] },
              detail: { formatter: "{value}" },
              title: { color: utils.getGrays()[600] },
              data: [
                {
                  value: 50,
                  name: "SCORE",
                  detail: { color: utils.getGrays()[600] },
                },
              ],
            },
          ],
        };
      }));
  },
  echartsLineChartInit = function () {
    var t,
      e,
      o,
      r,
      a = document.querySelector(".echart-line-chart-example");
    a &&
      ((t = utils.getData(a, "options")),
      (a = window.echarts.init(a)),
      (e = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]),
      (o = [
        1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204,
      ]),
      (r = function (t) {
        return '\n      <div>\n          <h6 class="fs--1 text-700 mb-0">\n            <span class="fas fa-circle me-1" style=\'color:'
          .concat(t[0].borderColor, "'></span>\n            ")
          .concat(t[0].name, " : ")
          .concat(t[0].value, "\n          </h6>\n      </div>\n      ");
      }),
      echartSetOption(a, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: r,
            transitionDuration: 0,
            position: function (t, e, o, r, a) {
              return getPosition(t, e, o, r, a);
            },
            axisPointer: { type: "none" },
          },
          xAxis: {
            type: "category",
            data: e,
            boundaryGap: !1,
            axisLine: { lineStyle: { color: utils.getGrays()[300] } },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[400],
              formatter: function (t) {
                return t.substring(0, 3);
              },
              margin: 15,
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            splitLine: {
              lineStyle: { type: "dashed", color: utils.getGrays()[200] },
            },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
            min: 600,
          },
          series: [
            {
              type: "line",
              data: o,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("primary") },
              showSymbol: !1,
              symbol: "circle",
              symbolSize: 10,
              smooth: !1,
              hoverAnimation: !0,
            },
          ],
          grid: { right: "3%", left: "10%", bottom: "10%", top: "5%" },
        };
      }));
  },
  echartsBubbleChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-bubble-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        [
          [28604, 77, 17096869, "Australia", 1990],
          [31163, 77.4, 27662440, "Canada", 1990],
          [1516, 68, 1154605773, "China", 1990],
          [28599, 75, 4986705, "Finland", 1990],
          [29476, 77.1, 56943299, "France", 1990],
          [31476, 75.4, 78958237, "Germany", 1990],
          [1777, 57.7, 870601776, "India", 1990],
          [29550, 79.1, 122249285, "Japan", 1990],
          [12087, 72, 42972254, "South Korea", 1990],
          [24021, 75.4, 3397534, "New Zealand", 1990],
          [43296, 76.8, 4240375, "Norway", 1990],
          [10088, 70.8, 38195258, "Poland", 1990],
          [19349, 69.6, 147568552, "Russia", 1990],
          [26424, 75.7, 57110117, "United Kingdom", 1990],
          [37062, 75.4, 252847810, "United States", 1990],
        ],
        [
          [44056, 81.8, 23968973, "Australia", 2015],
          [43294, 81.7, 35939927, "Canada", 2015],
          [13334, 76.9, 1376048943, "China", 2015],
          [38923, 80.8, 5503457, "Finland", 2015],
          [37599, 81.9, 64395345, "France", 2015],
          [44053, 81.1, 80688545, "Germany", 2015],
          [5903, 66.8, 1311050527, "India", 2015],
          [36162, 83.5, 126573481, "Japan", 2015],
          [34644, 80.7, 50293439, "South Korea", 2015],
          [34186, 80.6, 4528526, "New Zealand", 2015],
          [64304, 81.6, 5210967, "Norway", 2015],
          [24787, 77.3, 38611794, "Poland", 2015],
          [23038, 73.13, 143456918, "Russia", 2015],
          [38225, 81.4, 64715810, "United Kingdom", 2015],
          [53354, 79.1, 321773631, "United States", 2015],
        ],
      ]),
      echartSetOption(o, t, function () {
        return {
          title: {
            text: "1990 and 2015 have per capita and GDP",
            left: 0,
            top: 0,
            textStyle: { color: utils.getGrays()[600], fontWeight: 600 },
          },
          legend: {
            right: 0,
            top: "10%",
            data: ["1990", "2015"],
            textStyle: { color: utils.getGrays()[600] },
          },
          xAxis: {
            axisLabel: {
              color: utils.getGrays()[600],
              formatter: function (t) {
                return "".concat(t / 1e3, "k");
              },
            },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[300] } },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
          },
          yAxis: {
            scale: !0,
            axisLabel: { color: utils.getGrays()[600] },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[300] } },
          },
          series: [
            {
              name: "1990",
              data: e[0],
              type: "scatter",
              symbolSize: function (t) {
                return Math.sqrt(t[2]) / 500;
              },
              emphasis: {
                focus: "series",
                label: {
                  color: utils.getGrays()[600],
                  show: !0,
                  formatter: function (t) {
                    return t.data[3];
                  },
                  position: "top",
                },
              },
              itemStyle: {
                color: utils.rgbaColor(utils.getColor("primary"), 0.7),
              },
            },
            {
              name: "2015",
              data: e[1],
              type: "scatter",
              symbolSize: function (t) {
                return Math.sqrt(t[2]) / 700;
              },
              emphasis: {
                focus: "series",
                label: {
                  color: utils.getGrays()[600],
                  show: !0,
                  formatter: function (t) {
                    return t.data[3];
                  },
                  position: "top",
                },
              },
              itemStyle: {
                color: utils.rgbaColor(utils.getColor("warning"), 0.7),
              },
            },
          ],
          grid: { left: 5, right: 10, bottom: 5, top: "20%", containLabel: !0 },
        };
      }));
  },
  echartsCandlestickMixedChartInit = function () {
    var t,
      e,
      o,
      r,
      a,
      i = document.querySelector(".echart-candlestick-mixed-chart-example");
    i &&
      ((t = utils.getData(i, "options")),
      (i = window.echarts.init(i)),
      (e = [
        utils.getColor("primary"),
        utils.getColor("info"),
        utils.getColor("dark"),
        utils.getColor("warning"),
      ]),
      (o = utils.getPastDates(61).map(function (t) {
        return window.dayjs(t).format("MMM DD, YYYY");
      })),
      (a = (function (t, e) {
        for (var o = [], r = 0, a = e.length; r < a; r += 1)
          if (r < t) o.push("-");
          else {
            for (var i = 0, l = 0; l < t; l += 1) i += e[r - l][1];
            o.push((i / t).toFixed(2));
          }
        return o;
      })(
        5,
        (r = [
          [17512.58, 17633.11, 17434.27, 17642.81, 8616e4],
          [17652.36, 17716.66, 17652.36, 17790.11, 7933e4],
          [17716.05, 17685.09, 17669.72, 17755.7, 1026e5],
          [17661.74, 17792.75, 17568.02, 17811.48, 10489e4],
          [17799.39, 17737, 17710.67, 17806.38, 8523e4],
          [17718.03, 17603.32, 17579.56, 17718.03, 11523e4],
          [17605.45, 17716.05, 17542.54, 17723.55, 9941e4],
          [17687.28, 17541.96, 17484.23, 17687.28, 9012e4],
          [17555.39, 17576.96, 17528.16, 17694.51, 7999e4],
          [17586.48, 17556.41, 17555.9, 17731.63, 1071e5],
          [17571.34, 17721.25, 17553.57, 17744.43, 8102e4],
          [17741.66, 17908.28, 17741.66, 17918.35, 9171e4],
          [17912.25, 17926.43, 17885.44, 17962.14, 8451e4],
          [17925.95, 17897.46, 17867.41, 17937.65, 11816e4],
          [17890.2, 18004.16, 17848.22, 18009.53, 8939e4],
          [18012.1, 18053.6, 17984.43, 18103.46, 8982e4],
          [18059.49, 18096.27, 18031.21, 18167.63, 10021e4],
          [18092.84, 17982.52, 17963.89, 18107.29, 10272e4],
          [17985.05, 18003.75, 17909.89, 18026.85, 13412e4],
          [17990.94, 17977.24, 17855.55, 17990.94, 8377e4],
          [17987.38, 17990.32, 17934.17, 18043.77, 9257e4],
          [17996.14, 18041.55, 17920.26, 18084.66, 10909e4],
          [18023.88, 17830.76, 17796.55, 18035.73, 10092e4],
          [17813.09, 17773.64, 17651.98, 17814.83, 13667e4],
          [17783.78, 17891.16, 17773.71, 17912.35, 801e5],
          [17870.75, 17750.91, 17670.88, 17870.75, 9706e4],
          [17735.02, 17651.26, 17609.01, 17738.06, 9502e4],
          [17664.48, 17660.71, 17615.82, 17736.11, 8153e4],
          [17650.3, 17740.63, 17580.38, 17744.54, 8002e4],
          [17743.85, 17705.91, 17668.38, 17783.16, 8559e4],
          [17726.66, 17928.35, 17726.66, 17934.61, 7579e4],
          [17919.03, 17711.12, 17711.05, 17919.03, 8739e4],
          [17711.12, 17720.5, 17625.38, 17798.19, 8856e4],
          [17711.12, 17535.32, 17512.48, 17734.74, 8664e4],
          [17531.76, 17710.71, 17531.76, 17755.8, 8844e4],
          [17701.46, 17529.98, 17469.92, 17701.46, 10326e4],
          [17501.28, 17526.62, 17418.21, 17636.22, 7912e4],
          [17514.16, 17435.4, 17331.07, 17514.16, 9553e4],
          [17437.32, 17500.94, 17437.32, 17571.75, 11199e4],
          [17507.04, 17492.93, 17480.05, 17550.7, 8779e4],
          [17525.19, 17706.05, 17525.19, 17742.59, 8648e4],
          [17735.09, 17851.51, 17735.09, 17891.71, 7918e4],
          [17859.52, 17828.29, 17803.82, 17888.66, 6894e4],
          [17826.85, 17873.22, 17824.73, 17873.22, 7319e4],
          [17891.5, 17787.2, 17724.03, 17899.24, 14739e4],
          [17754.55, 17789.67, 17664.79, 17809.18, 7853e4],
          [17789.05, 17838.56, 17703.55, 17838.56, 7556e4],
          [17799.8, 17807.06, 17689.68, 17833.17, 8227e4],
          [17825.69, 17920.33, 17822.81, 17949.68, 7187e4],
          [17936.22, 17938.28, 17936.22, 18003.23, 7875e4],
          [17931.91, 18005.05, 17931.91, 18016, 7126e4],
          [17969.98, 17985.19, 17915.88, 18005.22, 6969e4],
          [17938.82, 17865.34, 17812.34, 17938.82, 9054e4],
          [17830.5, 17732.48, 17731.35, 17893.28, 10169e4],
          [17710.77, 17674.82, 17595.79, 17733.92, 9374e4],
          [17703.65, 17640.17, 17629.01, 17762.96, 9413e4],
          [17602.23, 17733.1, 17471.29, 17754.91, 9195e4],
          [17733.44, 17675.16, 17602.78, 17733.44, 24868e4],
          [17736.87, 17804.87, 17736.87, 17946.36, 9938e4],
          [17827.33, 17829.73, 17799.8, 17877.84, 8513e4],
          [17832.67, 17780.83, 17770.36, 17920.16, 8944e4],
        ])
      )),
      echartSetOption(i, t, function () {
        return {
          animation: !1,
          color: e,
          legend: {
            top: 0,
            data: ["MA1", "MA5", "Volume"],
            textStyle: { color: utils.getGrays()[600] },
          },
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            position: function (t, e, o, r, a) {
              var i = { top: 60 };
              return (i[["left", "right"][+(t[0] < a.viewSize[0] / 2)]] = 5), i;
            },
          },
          axisPointer: { link: [{ xAxisIndex: [0, 1] }] },
          dataZoom: [
            {
              type: "slider",
              xAxisIndex: [0, 1],
              realtime: !1,
              start: 20,
              end: 70,
              top: 35,
              height: 15,
              handleIcon:
                "path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
              handleSize: "120%",
            },
            {
              type: "inside",
              xAxisIndex: [0, 1],
              start: 40,
              end: 70,
              top: 30,
              height: 20,
            },
          ],
          xAxis: [
            {
              type: "category",
              data: o,
              boundaryGap: !1,
              axisLine: { lineStyle: { color: utils.getGrays()[300] } },
              axisLabel: {
                color: utils.getGrays()[600],
                formatter: function (t) {
                  return window.dayjs(t).format("MMM DD");
                },
              },
              min: "dataMin",
              max: "dataMax",
              axisPointer: { show: !0 },
            },
            {
              type: "category",
              gridIndex: 1,
              data: o,
              scale: !0,
              boundaryGap: !1,
              splitLine: { show: !1 },
              axisLabel: { show: !1 },
              axisTick: { show: !1 },
              axisLine: { lineStyle: { color: "blue" } },
              splitNumber: 20,
              min: "dataMin",
              max: "dataMax",
              axisPointer: {
                type: "shadow",
                label: { show: !1 },
                triggerTooltip: !0,
              },
            },
          ],
          yAxis: [
            {
              scale: !0,
              splitNumber: 2,
              axisLine: { show: !1 },
              splitLine: { lineStyle: { color: utils.getGrays()[200] } },
              axisTick: { show: !1 },
              axisLabel: { color: utils.getGrays()[600] },
            },
            {
              scale: !0,
              gridIndex: 1,
              splitNumber: 2,
              axisLabel: { show: !1 },
              axisLine: { show: !1 },
              axisTick: { show: !1 },
              splitLine: { show: !1 },
            },
          ],
          grid: [
            { left: 5, right: 12, bottom: 60, height: 160, containLabel: !0 },
            { left: 50, right: 12, height: 40, top: 260, containLabel: !0 },
          ],
          series: [
            {
              name: "Volume",
              type: "bar",
              xAxisIndex: 1,
              yAxisIndex: 1,
              itemStyle: { color: utils.getColor("primary") },
              emphasis: { itemStyle: { color: utils.getColor("primary") } },
              data: r.map(function (t) {
                return t[4];
              }),
            },
            {
              type: "candlestick",
              name: "MA1",
              data: r,
              itemStyle: {
                color: utils.getColor("success"),
                color0: utils.getColor("info"),
                borderColor: utils.getColor("success"),
                borderColor0: utils.getColor("info"),
              },
            },
            {
              name: "MA5",
              type: "line",
              data: a,
              smooth: !0,
              showSymbol: !1,
              lineStyle: { width: 1, color: utils.getColor("primary") },
            },
          ],
        };
      }));
  },
  echartsDoughnutChartInit = function () {
    var t,
      e = document.querySelector(".echart-doughnut-chart-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          legend: { left: "left", textStyle: { color: utils.getGrays()[600] } },
          series: [
            {
              type: "pie",
              radius: ["40%", "70%"],
              center: ["50%", "55%"],
              avoidLabelOverlap: !1,
              label: { show: !1, position: "center" },
              labelLine: { show: !1 },
              data: [
                {
                  value: 1048,
                  name: "Facebook",
                  itemStyle: { color: utils.getColor("primary") },
                },
                {
                  value: 735,
                  name: "Youtube",
                  itemStyle: { color: utils.getColor("danger") },
                },
                {
                  value: 580,
                  name: "Twitter",
                  itemStyle: { color: utils.getColor("info") },
                },
                {
                  value: 484,
                  name: "Linkedin",
                  itemStyle: { color: utils.getColor("success") },
                },
                {
                  value: 300,
                  name: "Github",
                  itemStyle: { color: utils.getColor("warning") },
                },
              ],
            },
          ],
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
        };
      }));
  },
  echartsDoughnutRoundedChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-doughnut-rounded-chart");
    o &&
      ((t = utils.getData(o, "options")),
      (e = window.echarts.init(o)),
      echartSetOption(e, t, function () {
        return {
          legend: {
            orient: "vertical",
            left: "left",
            textStyle: { color: utils.getGrays()[600] },
          },
          series: [
            {
              type: "pie",
              radius: ["40%", "70%"],
              center: window.innerWidth < 530 ? ["65%", "55%"] : ["50%", "55%"],
              avoidLabelOverlap: !1,
              itemStyle: {
                borderRadius: 10,
                borderColor: utils.getGrays()[100],
                borderWidth: 2,
              },
              label: { show: !1, position: "center" },
              labelLine: { show: !1 },
              data: [
                {
                  value: 1048,
                  name: "Starter",
                  itemStyle: { color: utils.getColor("primary") },
                },
                {
                  value: 735,
                  name: "Basic",
                  itemStyle: { color: utils.getColor("danger") },
                },
                {
                  value: 580,
                  name: "Optimal",
                  itemStyle: { color: utils.getColor("info") },
                },
                {
                  value: 484,
                  name: "Business",
                  itemStyle: { color: utils.getColor("success") },
                },
                {
                  value: 300,
                  name: "Premium",
                  itemStyle: { color: utils.getColor("warning") },
                },
              ],
            },
          ],
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
        };
      }),
      utils.resize(function () {
        window.innerWidth < 530
          ? e.setOption({ series: [{ center: ["65%", "55%"] }] })
          : e.setOption({ series: [{ center: ["50%", "55%"] }] });
      }));
  },
  echartsDynamicLineChartInit = function () {
    var t = document.querySelector(".echart-dynamic-line-chart-example");
    if (t) {
      for (
        var e = utils.getData(t, "options"),
          o = window.echarts.init(t),
          r = function () {
            return (
              (i = new Date(+i + 864e5)),
              (l = l + 21 * Math.random() - 10),
              {
                name: i.toString(),
                value: [
                  [i.getFullYear(), i.getMonth() + 1, i.getDate()].join("/"),
                  Math.round(l),
                ],
              }
            );
          },
          a = [],
          i = +new Date(1997, 9, 3),
          l = 1e3 * Math.random(),
          s = 0;
        s < 1e3;
        s++
      )
        a.push(r());
      echartSetOption(o, e, function () {
        return {
          tooltip: {
            trigger: "axis",
            axisPointer: { animation: !1 },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "time",
            splitLine: { show: !1 },
            axisLabel: { color: utils.getGrays()[500] },
            axisLine: { lineStyle: { color: utils.getGrays()[300] } },
            axisPointer: { lineStyle: { color: utils.getGrays()[300] } },
          },
          yAxis: {
            type: "value",
            boundaryGap: [0, "100%"],
            splitLine: { show: !1 },
            axisLabel: { color: utils.getGrays()[500] },
          },
          series: [
            {
              name: "Total",
              type: "line",
              showSymbol: !1,
              hoverAnimation: !1,
              data: a,
              lineStyle: { color: utils.getColor("primary") },
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              symbol: "circle",
              symbolSize: 10,
            },
          ],
          grid: { right: 5, left: "7%", bottom: "10%", top: "5%" },
        };
      }),
        setInterval(function () {
          for (var t = 0; t < 5; t++) a.shift(), a.push(r());
          o.setOption({ series: [{ data: a }] });
        }, 1e3);
    }
  },
  echartsGaugeGradeChartInit = function () {
    var t,
      e = document.querySelector(".echart-gauge-grade-chart-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          series: [
            {
              radius: "100%",
              type: "gauge",
              center: ["50%", "70%"],
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 1,
              splitNumber: 8,
              axisLine: {
                lineStyle: {
                  width: 6,
                  color: [
                    [0.25, utils.getColor("danger")],
                    [0.5, utils.getColor("warning")],
                    [0.75, utils.getColor("info")],
                    [1, utils.getColor("success")],
                  ],
                },
              },
              pointer: {
                icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
                length: "12%",
                width: 20,
                offsetCenter: [0, "-60%"],
                itemStyle: { color: "auto" },
              },
              axisTick: { length: 12, lineStyle: { color: "auto", width: 2 } },
              splitLine: { length: 20, lineStyle: { color: "auto", width: 5 } },
              axisLabel: {
                color: utils.getGrays()[600],
                distance: -60,
                formatter: function (t) {
                  return 0.875 === t
                    ? "Excellent"
                    : 0.625 === t
                    ? "Good"
                    : 0.375 === t
                    ? "Well"
                    : 0.125 === t
                    ? "Bad"
                    : "";
                },
              },
              title: {
                offsetCenter: [0, "-20%"],
                color: utils.getGrays()[600],
              },
              detail: {
                offsetCenter: [0, "0%"],
                valueAnimation: !0,
                formatter: function (t) {
                  return Math.round(100 * t);
                },
                color: "auto",
              },
              data: [{ value: 0.7, name: "Grade" }],
            },
          ],
        };
      }));
  },
  echartsGaugeMultiRingChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-gauge-multi-ring-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = function (t) {
        return '\n      <div>\n          <h6 class="fs--1 text-700 mb-0">\n            <span class="fas fa-circle me-1" style=\'color:'
          .concat(t[0].color, "'></span>\n            ")
          .concat(t[0].name, " : ")
          .concat(t[0].value, "\n          </h6>\n      </div>\n      ");
      }),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: e,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          series: [
            {
              type: "gauge",
              radius: "100%",
              startAngle: 90,
              endAngle: -270,
              pointer: { show: !1 },
              progress: {
                show: !0,
                overlap: !1,
                roundCap: !0,
                clip: !1,
                itemStyle: {
                  borderWidth: 1,
                  borderColor: utils.getGrays()[500],
                },
              },
              axisLine: { lineStyle: { width: 40 } },
              splitLine: { show: !1, distance: 0, length: 10 },
              axisTick: { show: !1 },
              axisLabel: { show: !1, distance: 50 },
              data: [
                {
                  value: 60,
                  name: "Perfect",
                  title: { offsetCenter: ["0%", "-50%"] },
                  detail: { offsetCenter: ["0%", "-35%"] },
                  itemStyle: { color: utils.getColor("primary") },
                },
                {
                  value: 40,
                  name: "Good",
                  title: { offsetCenter: ["0%", "-10%"] },
                  detail: { offsetCenter: ["0%", "5%"] },
                  itemStyle: { color: utils.getColor("success") },
                },
                {
                  value: 20,
                  name: "Commonly",
                  title: { offsetCenter: ["0%", "30%"] },
                  detail: { offsetCenter: ["0%", "45%"] },
                  itemStyle: { color: utils.getColor("warning") },
                },
              ],
              title: { fontSize: 14, color: utils.getGrays()[600] },
              detail: {
                width: 50,
                height: 14,
                fontSize: 14,
                color: "auto",
                borderColor: "auto",
                borderRadius: 20,
                borderWidth: 1,
                formatter: "{value}%",
              },
            },
          ],
        };
      }));
  },
  echartsGaugeMultiTitleChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-gauge-multi-title-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = function (t) {
        return '\n      <div>\n          <h6 class="fs--1 text-700 mb-0">\n            <span class="fas fa-circle me-1" style=\'color:'
          .concat(t[0].color, "'></span>\n            ")
          .concat(t[0].name, " : ")
          .concat(t[0].value, "\n          </h6>\n      </div>\n      ");
      }),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: e,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          series: [
            {
              type: "gauge",
              radius: "100%",
              anchor: {
                show: !0,
                showAbove: !0,
                size: 18,
                itemStyle: { color: utils.getColor("warning") },
              },
              progress: { show: !0, overlap: !0, roundCap: !0 },
              axisLine: { roundCap: !0 },
              axisTick: { show: !1 },
              splitLine: {
                lineStyle: { width: 2, color: utils.getGrays()[600] },
              },
              axisLabel: { distance: 25, color: utils.getGrays()[600] },
              data: [
                {
                  value: 20,
                  name: "Perfect",
                  title: { offsetCenter: ["-40%", "80%"] },
                  detail: { offsetCenter: ["-40%", "95%"] },
                  itemStyle: { color: utils.getColor("primary") },
                },
                {
                  value: 40,
                  name: "Good",
                  title: { offsetCenter: ["0%", "80%"] },
                  detail: { offsetCenter: ["0%", "95%"] },
                  itemStyle: { color: utils.getColor("success") },
                },
                {
                  value: 60,
                  name: "Commonly",
                  title: { offsetCenter: ["40%", "80%"] },
                  detail: { offsetCenter: ["40%", "95%"] },
                  itemStyle: { color: utils.getColor("warning") },
                },
              ],
              title: { fontSize: 14, color: utils.getGrays()[600] },
              detail: {
                width: 40,
                height: 14,
                fontSize: 14,
                color: "#fff",
                backgroundColor: "auto",
                borderRadius: 3,
                formatter: "{value}%",
              },
            },
          ],
        };
      }));
  },
  echartsGaugeProgressChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-gauge-progress-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = function (t) {
        return '\n      <div>\n          <h6 class="fs--1 text-700 mb-0">\n            <span class="fas fa-circle me-1" style=\'color:'
          .concat(t[0].color, "'></span>\n            ")
          .concat(t[0].name, " : ")
          .concat(t[0].value, "\n          </h6>\n      </div>\n      ");
      }),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: e,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          series: [
            {
              type: "gauge",
              center: ["50%", "60%"],
              radius: "100%",
              startAngle: 180,
              endAngle: 0,
              progress: {
                show: !0,
                width: 18,
                itemStyle: { color: utils.getColor("info") },
              },
              itemStyle: {
                color: utils.getColor("info"),
                shadowColor: utils.rgbaColor(utils.getColor("primary"), 0.5),
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
              },
              axisLine: { lineStyle: { width: 18 } },
              axisTick: { show: !1 },
              splitLine: {
                lineStyle: { width: 2, color: utils.getGrays()[600] },
              },
              axisLabel: { distance: 25, color: utils.getGrays()[600] },
              anchor: {
                show: !0,
                showAbove: !0,
                size: 25,
                itemStyle: { color: utils.getColor("info") },
              },
              title: { show: !1 },
              detail: {
                valueAnimation: !0,
                fontSize: 80,
                offsetCenter: [0, "70%"],
              },
              data: [
                {
                  value: 70,
                  detail: {
                    fontSize: 30,
                    color: utils.getGrays()[600],
                    offsetCenter: [0, "40%"],
                  },
                },
              ],
            },
          ],
        };
      }));
  },
  echartsGaugeRingChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-gauge-ring-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = function (t) {
        return '\n      <div>\n          <h6 class="fs--1 text-700 mb-0">\n            <span class="fas fa-circle me-1" style=\'color:'
          .concat(t[0].color, "'></span>\n            ")
          .concat(t[0].name, " : ")
          .concat(t[0].value, "\n          </h6>\n      </div>\n      ");
      }),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: e,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          series: [
            {
              type: "gauge",
              radius: "100%",
              startAngle: 90,
              endAngle: -270,
              pointer: { show: !1 },
              progress: {
                show: !0,
                overlap: !1,
                roundCap: !0,
                clip: !1,
                itemStyle: {
                  borderWidth: 1,
                  borderColor: utils.getGrays()[500],
                },
              },
              axisLine: { lineStyle: { width: 18 } },
              splitLine: { show: !1, distance: 0, length: 10 },
              axisTick: { show: !1 },
              axisLabel: { show: !1, distance: 50 },
              data: [
                {
                  value: 80,
                  title: { offsetCenter: ["0%", "0%"] },
                  detail: { offsetCenter: ["0%", "0%"] },
                  itemStyle: { color: utils.getColor("primary") },
                },
              ],
              title: { fontSize: 14 },
              detail: {
                width: 50,
                height: 14,
                fontSize: 20,
                color: "auto",
                formatter: "{value}%",
              },
            },
          ],
        };
      }));
  },
  echartsGradientBarChartInit = function () {
    var t,
      e,
      o,
      r,
      a = document.querySelector(".echart-gradient-bar-chart-example");
    a &&
      ((t = utils.getData(a, "options")),
      (e = window.echarts.init(a)),
      (o = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
      ]),
      (r = [
        220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122,
        133, 334, 198, 123, 125, 220,
      ]),
      echartSetOption(e, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
            formatter: tooltipFormatter,
          },
          title: {
            text: "Gradient and Clickable bar chart",
            textStyle: { color: utils.getGrays()[600] },
            left: "center",
          },
          xAxis: {
            data: o,
            axisLabel: { inside: !0, textStyle: { color: "#fff" } },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
            z: 10,
          },
          yAxis: {
            axisLine: { show: !1 },
            axisTick: { show: !1 },
            axisLabel: { textStyle: { color: utils.getGrays()[600] } },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getColor()[300] },
            },
          },
          dataZoom: [{ type: "inside" }],
          series: [
            {
              type: "bar",
              name: "Total",
              showBackground: !0,
              itemStyle: {
                color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: utils.getColor("info") },
                  { offset: 0.5, color: utils.getColor("primary") },
                  { offset: 1, color: utils.getColor("primary") },
                ]),
                barBorderRadius: [3, 3, 0, 0],
              },
              emphasis: {
                itemStyle: {
                  color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: utils.getColor("primary") },
                    { offset: 0.7, color: utils.getColor("primary") },
                    { offset: 1, color: utils.getColor("info") },
                  ]),
                },
              },
              data: r,
            },
          ],
          grid: { right: 5, left: 5, bottom: 5, top: "10%", containLabel: !0 },
        };
      }),
      e.on("click", function (t) {
        e.dispatchAction({
          type: "dataZoom",
          startValue: o[Math.max(t.dataIndex - 3, 0)],
          endValue: o[Math.min(t.dataIndex + 3, r.length - 1)],
        });
      }));
  },
  echartsHeatMapChartInit = function () {
    for (
      var t,
        e = document.querySelector(".echart-heatmap-chart-example"),
        o = [
          "12a",
          "2a",
          "4a",
          "6a",
          "8a",
          "10a",
          "12p",
          "2p",
          "4p",
          "6p",
          "8p",
          "10p",
        ],
        r = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        a = [],
        i = 0;
      i < 7;
      i += 1
    )
      for (var l = 0; l < 12; l += 1)
        a.push([l, i, utils.getRandomNumber(5, 12)]);
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          tooltip: {
            position: "top",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
          },
          grid: { right: 5, left: 5, top: 5, bottom: "15%", containLabel: !0 },
          xAxis: {
            type: "category",
            data: o,
            splitArea: { show: !0 },
            axisLabel: { color: utils.getGrays()[600] },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[400] } },
          },
          yAxis: {
            type: "category",
            data: r,
            axisLabel: {
              formatter: function (t) {
                return t.substring(0, 3);
              },
              color: utils.getGrays()[600],
            },
            splitArea: { show: !0 },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[400] } },
          },
          visualMap: {
            min: 0,
            max: 10,
            calculable: !0,
            orient: "horizontal",
            left: "center",
            bottom: "0%",
            textStyle: { color: utils.getGrays()[600], fontWeight: 500 },
            inRange: {
              color: [
                utils.rgbaColor(utils.getColors().primary, 1),
                utils.rgbaColor(utils.getColors().info, 1),
                utils.rgbaColor(utils.getColors().success, 1),
              ],
            },
          },
          series: [
            {
              type: "heatmap",
              data: a,
              label: { show: !0 },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: utils.rgbaColor(utils.getColors().black, 0.5),
                },
              },
            },
          ],
        };
      }));
  },
  echartsHeatMapSingleSeriesChartInit = function () {
    for (
      var t,
        e = document.querySelector(".echart-heatmap-single-series-chart"),
        o = [
          "12a",
          "2a",
          "4a",
          "6a",
          "8a",
          "10a",
          "12p",
          "2p",
          "4p",
          "6p",
          "8p",
          "10p",
        ],
        r = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        a = [],
        i = 0;
      i < 7;
      i += 1
    )
      for (var l = 0; l < 12; l += 1)
        a.push([l, i, utils.getRandomNumber(1, 12)]);
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          gradientColor: [
            utils.rgbaColor(utils.getColors().info, 1),
            utils.rgbaColor(utils.getColors().primary, 1),
          ],
          tooltip: {
            position: "top",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
          },
          grid: { right: 5, left: 5, top: 5, bottom: 5, containLabel: !0 },
          xAxis: {
            axisTick: { show: !1 },
            type: "category",
            data: o,
            splitArea: { show: !0 },
            axisLabel: { color: utils.getGrays()[600] },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[400] } },
          },
          yAxis: {
            axisTick: { show: !1 },
            type: "category",
            data: r,
            axisLabel: {
              formatter: function (t) {
                return t.substring(0, 3);
              },
              color: utils.getGrays()[600],
            },
            splitArea: { show: !0 },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[400] } },
          },
          visualMap: {
            show: !1,
            min: 0,
            max: 10,
            calculable: !0,
            orient: "horizontal",
            left: "center",
            bottom: "0%",
            textStyle: { color: utils.getGrays()[600], fontWeight: 500 },
          },
          series: [
            {
              type: "heatmap",
              data: a,
              label: { show: !0 },
              itemStyle: {
                borderColor: utils.getColor("white"),
                borderWidth: 3,
              },
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowColor: utils.rgbaColor(utils.getColors().black, 0.5),
                },
              },
            },
          ],
        };
      }));
  },
  echartsHorizontalBarChartInit = function () {
    var t,
      e,
      o,
      r = document.querySelector(".echart-horizontal-bar-chart-example");
    r &&
      ((t = utils.getData(r, "options")),
      (r = window.echarts.init(r)),
      (e = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]),
      (o = [
        1272, 1301, 1402, 1216, 1086, 1236, 1219, 1330, 1367, 1416, 1297, 1204,
      ]),
      echartSetOption(r, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: tooltipFormatter,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          xAxis: {
            type: "value",
            boundaryGap: !1,
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[300] } },
            axisTick: { show: !0 },
            axisLabel: { color: utils.getGrays()[500] },
            splitLine: { show: !1 },
            min: 600,
          },
          yAxis: {
            type: "category",
            data: e,
            boundaryGap: !0,
            axisLabel: {
              formatter: function (t) {
                return t.substring(0, 3);
              },
              show: !0,
              color: utils.getGrays()[500],
              margin: 15,
            },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
            axisTick: { show: !1 },
            axisLine: { lineStyle: { color: utils.getGrays()[300] } },
          },
          series: [
            {
              type: "bar",
              name: "Total",
              data: o,
              lineStyle: { color: utils.getColor("primary") },
              itemStyle: {
                color: utils.getColor("primary"),
                barBorderRadius: [0, 3, 3, 0],
              },
              showSymbol: !1,
              symbol: "circle",
              smooth: !1,
              hoverAnimation: !0,
            },
          ],
          grid: { right: "3%", left: "10%", bottom: "10%", top: "5%" },
        };
      }));
  },
  echartsLineAreaChartInit = function () {
    var t,
      e,
      o,
      r,
      a = document.querySelector(".echart-line-area-chart-example");
    a &&
      ((t = utils.getData(a, "options")),
      (a = window.echarts.init(a)),
      (e = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]),
      (o = [
        1142, 1160, 1179, 946, 1420, 1434, 986, 1247, 1051, 1297, 927, 1282,
      ]),
      (r = function (t) {
        return '\n      <div>\n          <h6 class="fs--1 text-700 mb-0">\n            <span class="fas fa-circle me-1" style=\'color:'
          .concat(t[0].borderColor, "'></span>\n            ")
          .concat(t[0].name, " : ")
          .concat(t[0].value, "\n          </h6>\n      </div>\n      ");
      }),
      echartSetOption(a, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            formatter: r,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          xAxis: {
            type: "category",
            data: e,
            boundaryGap: !1,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[400],
              formatter: function (t) {
                return t.substring(0, 3);
              },
              margin: 15,
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
            min: 600,
          },
          series: [
            {
              type: "line",
              data: o,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("primary") },
              showSymbol: !1,
              symbolSize: 10,
              symbol: "circle",
              smooth: !1,
              hoverAnimation: !0,
              areaStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: utils.rgbaColor(utils.getColors().primary, 0.5),
                    },
                    {
                      offset: 1,
                      color: utils.rgbaColor(utils.getColors().primary, 0),
                    },
                  ],
                },
              },
            },
          ],
          grid: { right: "3%", left: "10%", bottom: "10%", top: "5%" },
        };
      }));
  },
  echartsLineGradientChartInit = function () {
    var t,
      e,
      o,
      r,
      a = document.querySelector(".echart-line-gradient-chart-example");
    a &&
      ((t = utils.getData(a, "options")),
      (e = window.echarts.init(a)),
      (o = (a = [
        ["2021-06-05", 116],
        ["2021-06-06", 129],
        ["2021-06-07", 135],
        ["2021-06-08", 86],
        ["2021-06-09", 73],
        ["2021-06-10", 85],
        ["2021-06-11", 73],
        ["2021-06-12", 68],
        ["2021-06-13", 92],
        ["2021-06-14", 130],
        ["2021-06-15", 245],
        ["2021-06-16", 139],
        ["2021-06-17", 115],
        ["2021-06-18", 111],
        ["2021-06-19", 309],
        ["2021-06-20", 206],
        ["2021-06-21", 137],
        ["2021-06-22", 128],
        ["2021-06-23", 85],
        ["2021-06-24", 94],
        ["2021-06-25", 71],
        ["2021-06-26", 106],
        ["2021-06-27", 84],
        ["2021-06-28", 93],
        ["2021-06-29", 85],
        ["2021-06-30", 73],
        ["2021-07-01", 83],
        ["2021-07-02", 125],
        ["2021-07-03", 107],
        ["2021-07-04", 82],
        ["2021-07-05", 44],
        ["2021-07-06", 72],
        ["2021-07-07", 106],
        ["2021-07-08", 107],
        ["2021-07-09", 66],
        ["2021-07-10", 91],
        ["2021-07-11", 92],
        ["2021-07-12", 113],
        ["2021-07-13", 107],
        ["2021-07-14", 131],
        ["2021-07-15", 111],
        ["2021-07-16", 64],
        ["2021-07-17", 69],
        ["2021-07-18", 88],
        ["2021-07-19", 77],
        ["2021-07-20", 83],
        ["2021-07-21", 111],
        ["2021-07-22", 57],
        ["2021-07-23", 55],
        ["2021-07-24", 60],
      ]).map(function (t) {
        return t[0];
      })),
      (r = a.map(function (t) {
        return t[1];
      })),
      echartSetOption(e, t, function () {
        return {
          visualMap: {
            show: !1,
            type: "continuous",
            dimension: 0,
            min: 0,
            max: o.length - 1,
            color: [utils.getColor("danger"), utils.getColor("warning")],
          },
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "category",
            data: o,
            axisLabel: {
              formatter: function (t) {
                return window.dayjs(t).format("MMM DD");
              },
              color: utils.getGrays()[500],
              margin: 15,
            },
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisPointer: { lineStyle: { color: utils.getGrays()[300] } },
          },
          yAxis: {
            type: "value",
            axisLabel: { show: !0, color: utils.getGrays()[500], margin: 15 },
            splitLine: {
              lineStyle: { color: utils.getGrays()[200], type: "dashed" },
            },
          },
          grid: { right: "3%", left: "8%", bottom: "10%", top: "5%" },
          series: {
            name: "Total",
            type: "line",
            showSymbol: !1,
            symbolSize: 10,
            symbol: "circle",
            data: r,
            itemStyle: { color: utils.getGrays().white, borderWidth: 2 },
          },
        };
      }));
  },
  echartsLineLogChartInit = function () {
    var t,
      e = document.querySelector(".echart-line-log-chart-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "category",
            axisLine: { lineStyle: { color: utils.getGrays()[300] } },
            axisLabel: { color: utils.getGrays()[600] },
            splitLine: { show: !1 },
            data: Array.from(Array(10).keys()).map(function (t) {
              return t + 1;
            }),
          },
          yAxis: {
            type: "log",
            axisLabel: { color: utils.getGrays()[600] },
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
          },
          series: [
            {
              name: "Index Of 3",
              type: "line",
              data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
              symbolSize: 7,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("danger"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("danger") },
              symbol: "circle",
            },
            {
              name: "Index of 2",
              type: "line",
              data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
              symbolSize: 7,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("success"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("success") },
              symbol: "circle",
            },
            {
              name: "Index of 1/2",
              type: "line",
              data: [
                0.5,
                0.25,
                1 / 8,
                1 / 16,
                1 / 32,
                1 / 64,
                1 / 128,
                1 / 256,
                1 / 512,
              ],
              symbolSize: 7,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("info"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("info") },
              symbol: "circle",
            },
          ],
          grid: { right: 10, left: 5, bottom: 5, top: 10, containLabel: !0 },
        };
      }));
  },
  echartsLineMarkerChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-line-marker-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]),
      echartSetOption(o, t, function () {
        return {
          color: [utils.getColor("primary"), utils.getColor("warning")],
          legend: {
            data: [
              { name: "Max", textStyle: { color: utils.getGrays()[600] } },
              { name: "Min", textStyle: { color: utils.getGrays()[600] } },
            ],
          },
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            position: function (t, e, o, r, a) {
              return getPosition(t, e, o, r, a);
            },
            axisPointer: { type: "none" },
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "category",
            data: e,
            boundaryGap: !1,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              formatter: function (t) {
                return t.substring(0, 3);
              },
              color: utils.getGrays()[400],
              margin: 15,
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
          },
          series: [
            {
              name: "Max",
              type: "line",
              data: [10, 11, 13, 11, 12, 9, 12],
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("primary") },
              symbol: "circle",
              markPoint: {
                itemStyle: { color: utils.getColor("primary") },
                data: [
                  { type: "max", name: "Max" },
                  { type: "min", name: "Min" },
                ],
              },
              markLine: {
                lineStyle: { color: utils.getColor("primary") },
                label: { color: utils.getGrays()[600] },
                data: [{ type: "average", name: "average" }],
              },
            },
            {
              name: "Min",
              type: "line",
              data: [1, -2, 2, 5, 3, 2, 0],
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("danger"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("danger") },
              symbol: "circle",
              markPoint: {
                itemStyle: { color: utils.getColor("danger") },
                label: { color: "#fff" },
                data: [
                  { name: "Weekly lowest", value: -2, xAxis: 1, yAxis: -1.5 },
                ],
              },
              markLine: {
                lineStyle: { color: utils.getColor("danger") },
                label: { color: utils.getGrays()[600] },
                data: [
                  { type: "average", name: "average" },
                  [
                    { symbol: "none", x: "90%", yAxis: "max" },
                    {
                      symbol: "circle",
                      label: { position: "start", formatter: "Max" },
                      type: "max",
                      name: "Highest point",
                    },
                  ],
                ],
              },
            },
          ],
          grid: { right: "8%", left: "5%", bottom: "10%", top: "15%" },
        };
      }));
  },
  echartsLineRaceChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-line-race-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]),
      echartSetOption(o, t, function () {
        return {
          color: [utils.getColor("primary"), utils.getColor("warning")],
          legend: {
            data: [
              { name: "Max", textStyle: { color: utils.getGrays()[600] } },
              { name: "Min", textStyle: { color: utils.getGrays()[600] } },
            ],
          },
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            position: function (t, e, o, r, a) {
              return getPosition(t, e, o, r, a);
            },
            axisPointer: { type: "none" },
          },
          xAxis: {
            type: "category",
            data: e,
            boundaryGap: !1,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              formatter: function (t) {
                return t.substring(0, 3);
              },
              color: utils.getGrays()[400],
              margin: 15,
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: utils.getGrays()[300] } },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
          },
          series: [
            {
              name: "Max",
              type: "line",
              data: [10, 11, 13, 11, 12, 9, 12],
              markPoint: {
                data: [
                  { type: "max", name: "Max" },
                  { type: "min", name: "Min" },
                ],
              },
              markLine: {
                label: { color: utils.getGrays()[600] },
                data: [{ type: "average", name: "average" }],
              },
            },
            {
              name: "Min",
              type: "line",
              data: [1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                label: { color: "#fff" },
                data: [
                  { name: "Weekly lowest", value: -2, xAxis: 1, yAxis: -1.5 },
                ],
              },
              markLine: {
                label: { color: utils.getGrays()[600] },
                data: [
                  { type: "average", name: "average" },
                  [
                    { symbol: "none", x: "90%", yAxis: "max" },
                    {
                      symbol: "circle",
                      label: { position: "start", formatter: "Max" },
                      type: "max",
                      name: "Highest point",
                    },
                  ],
                ],
              },
            },
          ],
          grid: { right: "8%", left: "5%", bottom: "10%", top: "15%" },
        };
      }));
  },
  echartsLineShareDatasetChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-line-share-dataset-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (e = window.echarts.init(o)),
      echartSetOption(e, t, function () {
        return {
          color: [
            utils.getColor("danger"),
            utils.getColor("warning"),
            utils.getColor("info"),
            utils.getColor("primary"),
          ],
          legend: { top: 0, textStyle: { color: utils.getGrays()[700] } },
          tooltip: { trigger: "axis", showContent: !1 },
          dataset: {
            source: [
              ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
              ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
              ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
              ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
              ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
            ],
          },
          xAxis: {
            type: "category",
            axisLine: { lineStyle: { color: utils.getGrays()[300] } },
            axisLabel: { color: utils.getGrays()[600] },
            axisPointer: { lineStyle: { color: utils.getGrays()[300] } },
          },
          yAxis: {
            gridIndex: 0,
            axisLabel: { color: utils.getGrays()[600] },
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
          },
          series: [
            {
              type: "line",
              smooth: !0,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("danger"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("danger") },
              symbol: "circle",
            },
            {
              type: "line",
              smooth: !0,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("info"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("info") },
              symbol: "circle",
            },
            {
              type: "line",
              smooth: !0,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("warning"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("warning") },
              symbol: "circle",
            },
            {
              type: "line",
              smooth: !0,
              seriesLayoutBy: "row",
              emphasis: { focus: "series" },
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("primary") },
              symbol: "circle",
            },
            {
              type: "pie",
              id: "pie",
              radius: "30%",
              center: ["50%", "28%"],
              emphasis: { focus: "data" },
              label: {
                formatter: "{b}: {@2012} ({d}%)",
                color: utils.getGrays()[600],
              },
              encode: { itemName: "product", value: "2012", tooltip: "2012" },
            },
          ],
          grid: { right: 10, left: 5, bottom: 5, top: "55%", containLabel: !0 },
        };
      }),
      e.on("updateAxisPointer", function (t) {
        t = t.axesInfo[0];
        t &&
          ((t = t.value + 1),
          e.setOption({
            series: {
              id: "pie",
              label: { formatter: "{b}: {@[".concat(t, "]} ({d}%)") },
              encode: { value: t, tooltip: t },
            },
          }));
      }));
  },
  echartsUsaMapInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-map-usa-example"),
      r = [
        { name: "Alabama", value: 4822023 },
        { name: "Alaska", value: 731449 },
        { name: "Arizona", value: 6553255 },
        { name: "Arkansas", value: 2949131 },
        { name: "California", value: 38041430 },
        { name: "Colorado", value: 5187582 },
        { name: "Connecticut", value: 3590347 },
        { name: "Delaware", value: 917092 },
        { name: "District of Columbia", value: 632323 },
        { name: "Florida", value: 19317568 },
        { name: "Georgia", value: 9919945 },
        { name: "Hawaii", value: 1392313 },
        { name: "Idaho", value: 1595728 },
        { name: "Illinois", value: 12875255 },
        { name: "Indiana", value: 6537334 },
        { name: "Iowa", value: 3074186 },
        { name: "Kansas", value: 2885905 },
        { name: "Kentucky", value: 4380415 },
        { name: "Louisiana", value: 4601893 },
        { name: "Maine", value: 1329192 },
        { name: "Maryland", value: 5884563 },
        { name: "Massachusetts", value: 6646144 },
        { name: "Michigan", value: 9883360 },
        { name: "Minnesota", value: 5379139 },
        { name: "Mississippi", value: 2984926 },
        { name: "Missouri", value: 6021988 },
        { name: "Montana", value: 1005141 },
        { name: "Nebraska", value: 1855525 },
        { name: "Nevada", value: 2758931 },
        { name: "New Hampshire", value: 1320718 },
        { name: "New Jersey", value: 8864590 },
        { name: "New Mexico", value: 2085538 },
        { name: "New York", value: 19570261 },
        { name: "North Carolina", value: 9752073 },
        { name: "North Dakota", value: 699628 },
        { name: "Ohio", value: 11544225 },
        { name: "Oklahoma", value: 3814820 },
        { name: "Oregon", value: 3899353 },
        { name: "Pennsylvania", value: 12763536 },
        { name: "Rhode Island", value: 1050292 },
        { name: "South Carolina", value: 4723723 },
        { name: "South Dakota", value: 833354 },
        { name: "Tennessee", value: 6456243 },
        { name: "Texas", value: 26059203 },
        { name: "Utah", value: 2855287 },
        { name: "Vermont", value: 626011 },
        { name: "Virginia", value: 8185867 },
        { name: "Washington", value: 6897012 },
        { name: "West Virginia", value: 1855413 },
        { name: "Wisconsin", value: 5726398 },
        { name: "Wyoming", value: 576412 },
        { name: "Puerto Rico", value: 3667084 },
      ];
    o &&
      ((t = utils.getData(o, "options")),
      (e = window.echarts.init(o)),
      echartSetOption(e, t, function () {
        return {
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: function (t) {
              return "<strong>"
                .concat(t.data.name, " :</strong> ")
                .concat(t.data.value);
            },
          },
          toolbox: { show: !1, feature: { restore: {} } },
          visualMap: {
            left: "right",
            min: 5e5,
            max: 38e6,
            inRange: {
              color: [utils.getColor("primary"), utils.getColor("info")],
            },
            text: ["High", "Low"],
            calculable: !0,
            textStyle: { color: utils.getGrays()[600] },
            formatter: function (t) {
              return "".concat(t / 1e3, "k");
            },
          },
          series: [
            {
              left: 10,
              name: "USA PopEstimates",
              type: "map",
              zoom: 1.2,
              roam: !0,
              scaleLimit: { min: 1, max: 5 },
              itemStyle: { borderColor: utils.getGrays()[300] },
              label: { color: "#fff" },
              map: "USA",
              emphasis: {
                label: { show: !0, color: "#fff" },
                itemStyle: { areaColor: utils.getColor("warning") },
              },
              data: r,
            },
          ],
        };
      }),
      document
        .querySelector(".usa-map-reset")
        .addEventListener("click", function () {
          e.dispatchAction({ type: "restore" });
        }));
  },
  echartsPieChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-pie-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (e = window.echarts.init(o)),
      echartSetOption(e, t, function () {
        return {
          legend: { left: "left", textStyle: { color: utils.getGrays()[600] } },
          series: [
            {
              type: "pie",
              radius: window.innerWidth < 530 ? "45%" : "60%",
              label: { color: utils.getGrays()[700] },
              center: ["50%", "55%"],
              data: [
                {
                  value: 1048,
                  name: "Facebook",
                  itemStyle: { color: utils.getColor("primary") },
                },
                {
                  value: 735,
                  name: "Youtube",
                  itemStyle: { color: utils.getColor("danger") },
                },
                {
                  value: 580,
                  name: "Twitter",
                  itemStyle: { color: utils.getColor("info") },
                },
                {
                  value: 484,
                  name: "Linkedin",
                  itemStyle: { color: utils.getColor("success") },
                },
                {
                  value: 300,
                  name: "Github",
                  itemStyle: { color: utils.getColor("warning") },
                },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: utils.rgbaColor(utils.getGrays()[600], 0.5),
                },
              },
            },
          ],
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
        };
      }),
      utils.resize(function () {
        window.innerWidth < 530
          ? e.setOption({ series: [{ radius: "45%" }] })
          : e.setOption({ series: [{ radius: "60%" }] });
      }));
  },
  echartsPieEdgeAlignChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-pie-edge-align-chart"),
      r = [
        {
          value: 800,
          name: "Starter",
          itemStyle: { color: utils.rgbaColor(utils.getColors().primary, 0.5) },
        },
        {
          value: 1048,
          name: "Starter Pro",
          itemStyle: { color: utils.getColor("danger") },
        },
        {
          value: 735,
          name: "Basic",
          itemStyle: { color: utils.getColor("primary") },
        },
        {
          value: 580,
          name: "Optimal",
          itemStyle: { color: utils.getColor("secondary") },
        },
        {
          value: 484,
          name: "Business",
          itemStyle: { color: utils.getColor("warning") },
        },
        {
          value: 600,
          name: "Classic addition",
          itemStyle: { color: utils.rgbaColor(utils.getColors().warning, 0.8) },
        },
        {
          value: 300,
          name: "Premium",
          itemStyle: { color: utils.getColor("success") },
        },
        {
          value: 300,
          name: "Platinum",
          itemStyle: { color: utils.getColor("info") },
        },
        {
          value: 400,
          name: "Platinum Pro",
          itemStyle: { color: utils.rgbaColor(utils.getColors().primary, 0.5) },
        },
      ];
    o &&
      ((t = utils.getData(o, "options")),
      (e = window.echarts.init(o)),
      echartSetOption(e, t, function () {
        return {
          title: [
            {
              text: "Pie Edge Align Chart",
              left: "center",
              textStyle: { color: utils.getGrays()[600] },
            },
            {
              subtext: 'alignTo: "edge"',
              left: "50%",
              top: "85%",
              textAlign: "center",
              subtextStyle: { color: utils.getGrays()[700] },
            },
          ],
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          series: [
            {
              type: "pie",
              radius: window.innerWidth < 530 ? "45%" : "60%",
              center: ["50%", "50%"],
              data: r,
              label: {
                position: "outer",
                alignTo: "edge",
                margin: 20,
                color: utils.getGrays()[700],
              },
              left: "5%",
              right: "5%",
              top: 0,
              bottom: 0,
            },
          ],
        };
      }),
      utils.resize(function () {
        window.innerWidth < 530
          ? e.setOption({ series: [{ radius: "45%" }] })
          : e.setOption({ series: [{ radius: "60%" }] });
      }));
  },
  echartsPieLabelAlignChartInit = function () {
    var t,
      e,
      o,
      r = document.querySelector(".echart-pie-label-align-chart");
    r &&
      ((t = utils.getData(r, "options")),
      (e = window.echarts.init(r)),
      (o = [
        {
          value: 800,
          name: "Starter",
          itemStyle: { color: utils.rgbaColor(utils.getColors().primary, 0.5) },
        },
        {
          value: 1048,
          name: "Starter Pro",
          itemStyle: { color: utils.getColor("danger") },
        },
        {
          value: 735,
          name: "Basic",
          itemStyle: { color: utils.getColor("primary") },
        },
        {
          value: 580,
          name: "Optimal",
          itemStyle: { color: utils.getColor("secondary") },
        },
        {
          value: 484,
          name: "Business",
          itemStyle: { color: utils.getColor("warning") },
        },
        {
          value: 600,
          name: "Classic addition",
          itemStyle: { color: utils.rgbaColor(utils.getColors().warning, 0.8) },
        },
        {
          value: 300,
          name: "Premium",
          itemStyle: { color: utils.getColor("success") },
        },
        {
          value: 300,
          name: "Platinum",
          itemStyle: { color: utils.getColor("info") },
        },
        {
          value: 400,
          name: "Platinum Pro",
          itemStyle: { color: utils.rgbaColor(utils.getColors().primary, 0.5) },
        },
      ]),
      echartSetOption(e, t, function () {
        return {
          title: [
            {
              text: "Pie Label Align Chart",
              left: "center",
              textStyle: { color: utils.getGrays()[600] },
            },
            {
              subtext: 'alignTo: "labelLine"',
              left: "50%",
              top: "85%",
              textAlign: "center",
              subtextStyle: { color: utils.getGrays()[700] },
            },
          ],
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          series: [
            {
              type: "pie",
              radius: window.innerWidth < 530 ? "45%" : "60%",
              center: ["50%", "50%"],
              data: o,
              label: {
                position: "outer",
                alignTo: "labelLine",
                bleedMargin: 5,
                color: utils.getGrays()[700],
              },
              left: "5%",
              right: "5%",
              top: 0,
              bottom: 0,
            },
          ],
        };
      }),
      utils.resize(function () {
        window.innerWidth < 530
          ? e.setOption({ series: [{ radius: "45%" }] })
          : e.setOption({ series: [{ radius: "60%" }] });
      }));
  },
  data1 = [
    {
      value: 1048,
      name: "Starter",
      itemStyle: { color: utils.getColor("danger") },
    },
    {
      value: 735,
      name: "Basic",
      itemStyle: { color: utils.getColor("primary") },
    },
    {
      value: 580,
      name: "Optimal",
      itemStyle: { color: utils.getColor("secondary") },
    },
    {
      value: 484,
      name: "Business",
      itemStyle: { color: utils.getColor("warning") },
    },
    {
      value: 300,
      name: "Premium",
      itemStyle: { color: utils.getColor("success") },
    },
    {
      value: 300,
      name: "Platinum",
      itemStyle: { color: utils.getColor("info") },
    },
  ],
  data2 = [
    {
      value: 1048,
      name: "Facebook",
      itemStyle: { color: utils.getColor("primary") },
    },
    {
      value: 735,
      name: "Youtube",
      itemStyle: { color: utils.getColor("danger") },
    },
    {
      value: 580,
      name: "Twitter",
      itemStyle: { color: utils.getColor("info") },
    },
    {
      value: 484,
      name: "Linkedin",
      itemStyle: { color: utils.getColor("success") },
    },
    {
      value: 300,
      name: "Github",
      itemStyle: { color: utils.getColor("warning") },
    },
  ],
  defaultRadius = { radius: "55%" },
  smallRadius = { radius: "48%" },
  echartsPieMultipleChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-pie-multiple-chart");
    o &&
      ((t = utils.getData(o, "options")),
      (e = window.echarts.init(o)),
      echartSetOption(e, t, function () {
        return {
          title: [
            {
              text: "Pie Multiple Chart",
              left: "center",
              textStyle: { color: utils.getGrays()[600] },
            },
          ],
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          series: [
            {
              type: "pie",
              radius: window.innerWidth < 450 ? "48%" : "55%",
              center: ["25%", "50%"],
              data: data1,
              label: { show: !1 },
            },
            {
              type: "pie",
              radius: window.innerWidth < 450 ? "48%" : "55%",
              center: ["75%", "50%"],
              avoidLabelOverlap: !1,
              label: { show: !1 },
              data: data2,
            },
          ],
        };
      }),
      utils.resize(function () {
        window.innerWidth < 450
          ? e.setOption({ series: [smallRadius, smallRadius] })
          : e.setOption({ series: [defaultRadius, defaultRadius] });
      }));
  },
  echartsRadarChartInit = function () {
    var t,
      e = document.querySelector(".echart-radar-chart-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          legend: {
            orient: "vertical",
            left: "left",
            textStyle: { color: utils.getGrays()[600] },
          },
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          radar: {
            indicator: [
              { name: "Marketing", max: 6500 },
              { name: "Admin", max: 16e3 },
              { name: "Tech", max: 3e4 },
              { name: "Support", max: 38e3 },
              { name: "Dev ", max: 52e3 },
              { name: "Sales ", max: 25e3 },
            ],
            radius: 120,
            splitLine: {
              lineStyle: { color: utils.rgbaColor(utils.getGrays()[700]) },
            },
          },
          series: [
            {
              type: "radar",
              data: [
                {
                  value: [4200, 3e3, 2e4, 35e3, 5e4, 18e3],
                  name: "Data A",
                  itemStyle: { color: utils.getColor("primary") },
                },
                {
                  value: [5e3, 14e3, 28e3, 26e3, 42e3, 21e3],
                  name: "Data B",
                  itemStyle: { color: utils.getColor("warning") },
                },
              ],
            },
          ],
        };
      }));
  },
  echartsRadarCustomizedChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-radar-customized-chart");
    function r(t) {
      var e = [
          ["Marketing", "Sales", "Dev", "Support", "Tech", "Admin"],
          ["Language", "Math", "English", "Physics", "Chemistry", "Biology"],
        ],
        o = t.seriesIndex;
      return "<strong > "
        .concat(
          t.name,
          ' </strong>\n    <div class="fs--1 text-600">\n      <strong >'
        )
        .concat(e[t.seriesIndex][0], "</strong>: ")
        .concat(t.value[0], "  <br>\n      <strong>")
        .concat(e[o][1], "</strong>: ")
        .concat(t.value[1], "  <br>\n      <strong>")
        .concat(e[o][2], "</strong>: ")
        .concat(t.value[2], "  <br>\n      <strong>")
        .concat(e[o][3], "</strong>: ")
        .concat(t.value[3], "  <br>\n      <strong>")
        .concat(e[o][4], "</strong>: ")
        .concat(t.value[4], "  <br>\n      <strong>")
        .concat(e[o][5], "</strong>: ")
        .concat(t.value[5], "  <br>\n    </div>");
    }
    o &&
      ((t = utils.getData(o, "options")),
      (e = window.echarts.init(o)),
      echartSetOption(e, t, function () {
        return {
          legend: {
            orient: "vertical",
            left: "left",
            textStyle: { color: utils.getGrays()[600] },
          },
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
            formatter: r,
          },
          radar: [
            {
              radius: window.innerWidth < 576 ? 90 : 120,
              startAngle: 90,
              splitNumber: 4,
              shape: "circle",
              center: window.innerWidth < 992 ? ["50%", "30%"] : ["25%", "50%"],
              indicator: [
                { name: "Admin", max: 6500 },
                { name: "Tech", max: 16e3 },
                { name: "Support", max: 3e4 },
                { name: "Dev", max: 38e3 },
                { name: "Sales", max: 52e3 },
                { name: "Marketing", max: 25e3 },
              ],
              name: {
                formatter: "{value}",
                textStyle: { color: utils.getGrays()[700] },
              },
              splitLine: {
                lineStyle: { color: utils.rgbaColor(utils.getGrays()[700]) },
              },
            },
            {
              indicator: [
                { text: "Language", max: 150 },
                { text: "Math", max: 150 },
                { text: "English", max: 150 },
                { text: "physics", max: 120 },
                { text: "Chemistry", max: 108 },
                { text: "Biology", max: 72 },
              ],
              radius: window.innerWidth < 576 ? 90 : 120,
              center: window.innerWidth < 992 ? ["50%", "75%"] : ["75%", "50%"],
              splitLine: {
                lineStyle: { color: utils.rgbaColor(utils.getGrays()[700]) },
              },
              name: {
                textStyle: {
                  color: utils.rgbaColor(utils.getGrays()[1e3]),
                  backgroundColor: utils.rgbaColor(utils.getGrays()[100]),
                  borderRadius: 3,
                  padding: [3, 5],
                },
              },
            },
          ],
          series: [
            {
              type: "radar",
              data: [
                {
                  value: [5200, 4e3, 2e4, 3e4, 2e4, 18e3],
                  name: "Data A",
                  itemStyle: { color: utils.getColor("info") },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().info, 0.3),
                  },
                },
                {
                  value: [5e3, 12e3, 28e3, 26e3, 32e3, 21e3],
                  name: "Data B",
                  itemStyle: { color: utils.getColor("success") },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().success, 0.3),
                  },
                },
              ],
            },
            {
              type: "radar",
              radarIndex: 1,
              data: [
                {
                  value: [130, 110, 130, 100, 99, 70],
                  name: "Data C",
                  symbol: "rect",
                  symbolSize: 12,
                  lineStyle: { type: "dashed" },
                  itemStyle: { color: utils.getColor("warning") },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().warning, 0.3),
                  },
                  label: {
                    show: !0,
                    formatter: function (t) {
                      return t.value;
                    },
                    color: utils.getGrays()[700],
                  },
                },
                {
                  value: [100, 93, 50, 90, 70, 60],
                  name: "Data D",
                  itemStyle: { color: utils.getColor("danger") },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().danger, 0.3),
                  },
                },
              ],
            },
          ],
        };
      }),
      utils.resize(function () {
        window.innerWidth < 992
          ? e.setOption({
              radar: [{ center: ["50%", "30%"] }, { center: ["50%", "75%"] }],
            })
          : e.setOption({
              radar: [{ center: ["25%", "50%"] }, { center: ["75%", "50%"] }],
            }),
          window.innerWidth < 576
            ? e.setOption({ radar: [{ radius: 90 }, { radius: 90 }] })
            : e.setOption({ radar: [{ radius: 120 }, { radius: 120 }] });
      }));
  },
  echartsRadarMultipleChartInit = function () {
    var t,
      e,
      o,
      r,
      a = document.querySelector(".echart-radar-multiple-chart");
    a &&
      ((t = utils.getData(a, "options")),
      (e = window.echarts.init(a)),
      (o = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]),
      (r = function () {
        return window.innerWidth < 1540 && 992 < window.innerWidth
          ? [
              ["25%", "40%"],
              ["50%", "75%"],
              ["75%", "40%"],
            ]
          : window.innerWidth < 992
          ? [
              ["50%", "20%"],
              ["50%", "50%"],
              ["50%", "80%"],
            ]
          : [
              ["15%", "50%"],
              ["50%", "50%"],
              ["85%", "50%"],
            ];
      }),
      echartSetOption(e, t, function () {
        return {
          legend: { left: "left", textStyle: { color: utils.getGrays()[600] } },
          tooltip: {
            trigger: "item",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            axisPointer: { type: "none" },
          },
          radar: [
            {
              indicator: [
                { text: "Brand", max: 100 },
                { text: "content", max: 100 },
                { text: "Usability", max: 100 },
                { text: "Features", max: 100 },
              ],
              center: r()[0],
              radius: 85,
              splitLine: {
                lineStyle: { color: utils.rgbaColor(utils.getGrays()[700]) },
              },
            },
            {
              indicator: [
                { text: "Exterior", max: 100 },
                { text: "Take pictures", max: 100 },
                { text: "system", max: 100 },
                { text: "performance", max: 100 },
                { text: "screen", max: 100 },
              ],
              radius: 85,
              center: r()[1],
              splitLine: {
                lineStyle: { color: utils.rgbaColor(utils.getGrays()[700]) },
              },
            },
            {
              indicator: o.map(function (t) {
                return { text: t, max: 100 };
              }),
              center: r()[2],
              radius: 85,
              splitLine: {
                lineStyle: { color: utils.rgbaColor(utils.getGrays()[700]) },
              },
            },
          ],
          series: [
            {
              type: "radar",
              tooltip: { trigger: "item" },
              areaStyle: {
                color: utils.rgbaColor(utils.getColors().info, 0.5),
              },
              data: [
                {
                  value: [60, 73, 85, 40],
                  name: "A software",
                  itemStyle: { color: utils.getColor("info") },
                },
              ],
            },
            {
              type: "radar",
              radarIndex: 1,
              data: [
                {
                  value: [85, 90, 90, 95, 95],
                  name: "A staple mobile phone",
                  itemStyle: {
                    color: utils.rgbaColor(utils.getColors().primary, 0.8),
                  },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().primary, 0.3),
                  },
                },
                {
                  value: [95, 80, 75, 90, 93],
                  name: "A fruit phone",
                  itemStyle: { color: utils.getColor("success") },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().success, 0.3),
                  },
                },
              ],
            },
            {
              type: "radar",
              radarIndex: 2,
              areaStyle: {},
              tooltip: { show: !1 },
              data: [
                {
                  name: "Precipitation",
                  value: [
                    2.6, 5.9, 9, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6,
                    2.3,
                  ],
                  itemStyle: { color: utils.getColor("primary") },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().primary, 0.5),
                  },
                },
                {
                  name: "Evaporation",
                  value: [
                    2, 4.9, 7, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20, 6.4, 3.3,
                  ],
                  itemStyle: { color: utils.getColor("warning") },
                  areaStyle: {
                    color: utils.rgbaColor(utils.getColors().warning, 0.5),
                  },
                },
              ],
            },
          ],
        };
      }),
      utils.resize(function () {
        e.setOption({
          radar: r().map(function (t) {
            return { center: t };
          }),
        });
      }));
  },
  echartsScatterBasicChartInit = function () {
    var t,
      e = document.querySelector(".echart-basic-scatter-chart-example");
    e &&
      ((t = utils.getData(e, "options")),
      (e = window.echarts.init(e)),
      echartSetOption(e, t, function () {
        return {
          tooltip: {
            trigger: "item",
            axisPointer: { type: "none" },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
          },
          xAxis: {
            axisLabel: { color: utils.getGrays()[600] },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[200] } },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
          },
          yAxis: {
            axisLabel: { color: utils.getGrays()[600] },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[200] } },
          },
          series: [
            {
              data: [
                [10, 8.04],
                [8.07, 6.95],
                [13, 7.58],
                [9.05, 8.81],
                [11, 8.33],
                [14, 7.66],
                [13.4, 6.81],
                [10, 6.33],
                [14, 8.96],
                [12.5, 6.82],
                [9.15, 7.2],
                [11.5, 7.2],
                [3.03, 4.23],
                [12.2, 7.83],
                [2.02, 4.47],
                [1.05, 3.33],
                [4.05, 4.96],
                [6.03, 7.24],
                [12, 6.26],
                [12, 8.84],
                [7.08, 5.82],
                [5.02, 5.68],
              ],
              type: "scatter",
              itemStyle: { color: utils.getColor("danger") },
            },
          ],
          grid: { right: 8, left: 5, bottom: 5, top: 8, containLabel: !0 },
        };
      }));
  },
  echartsScatterQuartetChartInit = function () {
    var t,
      e,
      o,
      r,
      a,
      i,
      l,
      s,
      n = document.querySelector(".echart-scatter-quartet-chart-example");
    n &&
      ((t = utils.getData(n, "options")),
      (e = window.echarts.init(n)),
      (o = [
        [
          [10, 8.04],
          [8, 6.95],
          [13, 7.58],
          [9, 8.81],
          [11, 8.33],
          [14, 9.96],
          [6, 7.24],
          [4, 4.26],
          [12, 10.84],
          [7, 4.82],
          [5, 5.68],
        ],
        [
          [10, 9.14],
          [8, 8.14],
          [13, 8.74],
          [9, 8.77],
          [11, 9.26],
          [14, 8.1],
          [6, 6.13],
          [4, 3.1],
          [12, 9.13],
          [7, 7.26],
          [5, 4.74],
        ],
        [
          [10, 7.46],
          [8, 6.77],
          [13, 12.74],
          [9, 7.11],
          [11, 7.81],
          [14, 8.84],
          [6, 6.08],
          [4, 5.39],
          [12, 8.15],
          [7, 6.42],
          [5, 5.73],
        ],
        [
          [8, 6.58],
          [8, 5.76],
          [8, 7.71],
          [8, 8.84],
          [8, 8.47],
          [8, 7.04],
          [8, 5.25],
          [19, 12.5],
          [8, 5.56],
          [8, 7.91],
          [8, 6.89],
        ],
      ]),
      (r = function () {
        return {
          axisLabel: { color: utils.getGrays()[600] },
          axisLine: { show: !0, lineStyle: { color: utils.getGrays()[300] } },
          splitLine: { show: !0, lineStyle: { color: utils.getGrays()[200] } },
        };
      }),
      (i = {
        animation: !(a = function () {
          return {
            axisLabel: { color: utils.getGrays()[600] },
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[300] } },
          };
        }),
        label: {
          formatter: "y = 0.5 * x + 3",
          align: "right",
          color: utils.getGrays()[600],
          fontWeight: 600,
        },
        lineStyle: { type: "solid" },
        tooltip: { formatter: "y = 0.5 * x + 3" },
        data: [
          [
            { coord: [0, 3], symbol: "none" },
            { coord: [20, 13], symbol: "none" },
          ],
        ],
      }),
      (l = [
        { left: "7%", top: "10%", width: "38%", height: "38%" },
        { right: "7%", top: "10%", width: "38%", height: "38%" },
        { left: "7%", bottom: "7%", width: "38%", height: "38%" },
        { right: "7%", bottom: "7%", width: "38%", height: "38%" },
      ]),
      (s = [
        { left: 6, right: 7, top: "4%", height: "20%" },
        { left: 6, right: 7, top: "29%", height: "20%" },
        { left: 6, right: 7, bottom: "26%", height: "20%" },
        { left: 6, right: 7, bottom: 25, height: "20%" },
      ]),
      echartSetOption(e, t, function () {
        return {
          color: [
            utils.getColor("primary"),
            utils.getColor("success"),
            utils.getColor("warning"),
            utils.getColor("danger"),
          ],
          tooltip: {
            trigger: "item",
            axisPointer: { type: "none" },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: "Group {a}: ({c})",
          },
          title: {
            text: "Anscombe's quartet",
            left: "center",
            top: 0,
            textStyle: { color: utils.getGrays()[600] },
          },
          grid: window.innerWidth < 768 ? s : l,
          xAxis: [
            _objectSpread({ gridIndex: 0, min: 0, max: 20 }, r()),
            _objectSpread({ gridIndex: 1, min: 0, max: 20 }, r()),
            _objectSpread({ gridIndex: 2, min: 0, max: 20 }, r()),
            _objectSpread({ gridIndex: 3, min: 0, max: 20 }, r()),
          ],
          yAxis: [
            _objectSpread({ gridIndex: 0, min: 0, max: 15 }, a()),
            _objectSpread({ gridIndex: 1, min: 0, max: 15 }, a()),
            _objectSpread({ gridIndex: 2, min: 0, max: 15 }, a()),
            _objectSpread({ gridIndex: 3, min: 0, max: 15 }, a()),
          ],
          series: [
            {
              name: "I",
              type: "scatter",
              xAxisIndex: 0,
              yAxisIndex: 0,
              data: o[0],
              markLine: i,
            },
            {
              name: "II",
              type: "scatter",
              xAxisIndex: 1,
              yAxisIndex: 1,
              data: o[1],
              markLine: i,
            },
            {
              name: "III",
              type: "scatter",
              xAxisIndex: 2,
              yAxisIndex: 2,
              data: o[2],
              markLine: i,
            },
            {
              name: "IV",
              type: "scatter",
              xAxisIndex: 3,
              yAxisIndex: 3,
              data: o[3],
              markLine: i,
            },
          ],
        };
      }),
      utils.resize(function () {
        window.innerWidth < 768
          ? e.setOption({ grid: s })
          : e.setOption({ grid: l });
      }));
  },
  echartsScatterSingleAxisChartInit = function () {
    var t = document.querySelector(".echart-scatter-single-axis-chart-example");
    if (t) {
      for (
        var e = utils.getData(t, "options"),
          t = window.echarts.init(t),
          o = [
            "12am",
            "1am",
            "2am",
            "3am",
            "4am",
            "5am",
            "6am",
            "7am",
            "8am",
            "9am",
            "10am",
            "11am",
            "12pm",
            "1pm",
            "2pm",
            "3pm",
            "4pm",
            "5pm",
            "6pm",
            "7pm",
            "8pm",
            "9pm",
            "10pm",
            "11pm",
          ],
          r = [
            "Saturday",
            "Friday",
            "Thursday",
            "Wednesday",
            "Tuesday",
            "Monday",
            "Sunday",
          ],
          a = [],
          i = 0;
        i < 7;
        i += 1
      )
        for (var l = 0; l < 24; l += 1)
          a.push([l, i, utils.getRandomNumber(0, 10)]);
      echartSetOption(t, e, function () {
        return {
          tooltip: {
            trigger: "item",
            axisPointer: { type: "none" },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            position: "top",
            formatter: function (t) {
              return "\n            "
                .concat(r[t.value[1]], " <br/>\n            ")
                .concat(o[t.value[0]], " : ")
                .concat(t.value[2], "\n          ");
            },
          },
          xAxis: {
            type: "category",
            data: o,
            boundaryGap: !1,
            splitLine: {
              show: !0,
              lineStyle: { color: utils.getGrays()[200] },
            },
            axisLine: { show: !1 },
            axisTick: { lineStyle: { color: utils.getGrays()[600] } },
          },
          yAxis: {
            type: "category",
            data: r,
            axisLine: { show: !1 },
            axisTick: { lineStyle: { color: utils.getGrays()[600] } },
            axisLabel: { margin: 15 },
          },
          series: [
            {
              name: "Punch Card",
              type: "scatter",
              symbolSize: function (t) {
                return 2 * t[2];
              },
              data: a,
              animationDelay: function (t) {
                return 5 * t;
              },
              itemStyle: { color: utils.getColor("primary") },
            },
          ],
          grid: { right: 12, left: 5, bottom: 5, top: 5, containLabel: !0 },
        };
      });
    }
  },
  echartsStackedAreaChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-stacked-area-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            position: function (t, e, o, r, a) {
              return getPosition(t, e, o, r, a);
            },
            axisPointer: { type: "none" },
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "category",
            data: e,
            boundaryGap: !1,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[400],
              margin: 15,
              formatter: function (t) {
                return t.substring(0, 3);
              },
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
          },
          series: [
            {
              name: "Matcha Latte",
              type: "line",
              symbolSize: 10,
              stack: "product",
              data: [120, 132, 101, 134, 90, 230, 210],
              areaStyle: {
                color: utils.rgbaColor(utils.getColor("info"), 0.3),
              },
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("info"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("info") },
              symbol: "circle",
            },
            {
              name: "Milk Tea",
              type: "line",
              symbolSize: 10,
              stack: "product",
              data: [220, 182, 191, 234, 290, 330, 310],
              areaStyle: {
                color: utils.rgbaColor(utils.getColor("success"), 0.3),
              },
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("success"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("success") },
              symbol: "circle",
            },
            {
              name: "Cheese Cocoa",
              type: "line",
              symbolSize: 10,
              stack: "product",
              data: [150, 232, 201, 154, 190, 330, 410],
              areaStyle: {
                color: utils.rgbaColor(utils.getColor("danger"), 0.3),
              },
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("danger"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("danger") },
              symbol: "circle",
            },
            {
              name: "Cheese Brownie",
              type: "line",
              symbolSize: 10,
              stack: "product",
              data: [320, 332, 301, 334, 390, 330, 320],
              areaStyle: {
                color: utils.rgbaColor(utils.getColor("warning"), 0.3),
              },
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("warning"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("warning") },
              symbol: "circle",
            },
            {
              name: "Matcha Cocoa",
              type: "line",
              symbolSize: 10,
              stack: "product",
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              areaStyle: {
                color: utils.rgbaColor(utils.getColor("primary"), 0.3),
              },
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("primary") },
              symbol: "circle",
            },
          ],
          grid: { right: 10, left: 5, bottom: 5, top: 8, containLabel: !0 },
        };
      }));
  },
  echartsHorizontalStackedChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-horizontal-stacked-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]),
      echartSetOption(o, t, function () {
        return {
          color: [
            utils.getColor("info"),
            utils.getColor("danger"),
            utils.getColor("warning"),
            utils.getColor("success"),
            utils.getColor("primary"),
          ],
          tooltip: {
            trigger: "axis",
            axisPointer: { type: "shadow" },
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: tooltipFormatter,
          },
          toolbox: {
            feature: { magicType: { type: ["stack", "tiled"] } },
            right: 0,
          },
          legend: {
            data: [
              "Direct",
              "Mail Ad",
              "Affiliate Ad",
              "Video Ad",
              "Search Engine",
            ],
            textStyle: { color: utils.getGrays()[600] },
            left: 0,
          },
          xAxis: {
            type: "value",
            axisLine: { show: !0, lineStyle: { color: utils.getGrays()[300] } },
            axisTick: { show: !1 },
            axisLabel: { color: utils.getGrays()[500] },
            splitLine: {
              lineStyle: { show: !0, color: utils.getGrays()[200] },
            },
          },
          yAxis: {
            type: "category",
            data: e,
            axisLine: { lineStyle: { show: !0, color: utils.getGrays()[300] } },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[500],
              formatter: function (t) {
                return t.substring(0, 3);
              },
            },
          },
          series: [
            {
              name: "Direct",
              type: "bar",
              stack: "total",
              label: { show: !0, textStyle: { color: "#fff" } },
              emphasis: { focus: "series" },
              data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
              name: "Mail Ad",
              type: "bar",
              stack: "total",
              label: { show: !0 },
              emphasis: { focus: "series" },
              data: [220, 188, 301, 250, 190, 230, 210],
            },
            {
              name: "Affiliate Ad",
              type: "bar",
              stack: "total",
              label: { show: !0, textStyle: { color: "#fff" } },
              emphasis: { focus: "series" },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "Video Ad",
              type: "bar",
              stack: "total",
              label: { show: !0, textStyle: { color: "#fff" } },
              emphasis: { focus: "series" },
              data: [150, 212, 201, 154, 190, 330, 410],
            },
            {
              name: "Search Engine",
              type: "bar",
              stack: "total",
              label: { show: !0 },
              emphasis: { focus: "series" },
              data: [820, 832, 901, 934, 1290, 1330, 1320],
            },
          ],
          grid: { right: 15, left: 5, bottom: 5, top: "15%", containLabel: !0 },
        };
      }));
  },
  echartsStackedLineChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-stacked-line-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]),
      echartSetOption(o, t, function () {
        return {
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            position: function (t, e, o, r, a) {
              return getPosition(t, e, o, r, a);
            },
            axisPointer: { type: "none" },
            formatter: tooltipFormatter,
          },
          xAxis: {
            type: "category",
            data: e,
            boundaryGap: !1,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              color: utils.getGrays()[400],
              margin: 15,
              formatter: function (t) {
                return t.substring(0, 3);
              },
            },
            splitLine: { show: !1 },
          },
          yAxis: {
            type: "value",
            splitLine: {
              lineStyle: { color: utils.getGrays()[200], type: "dashed" },
            },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
          },
          series: [
            {
              name: "Matcha Latte",
              type: "line",
              symbolSize: 6,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("info"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("info") },
              symbol: "circle",
              stack: "product",
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "Milk Tea",
              type: "line",
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("success"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("success") },
              symbol: "circle",
              stack: "product",
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "Cheese Cocoa",
              type: "line",
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("danger"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("danger") },
              symbol: "circle",
              stack: "product",
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: "Cheese Brownie",
              type: "line",
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("warning"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("warning") },
              symbol: "circle",
              stack: "product",
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: "Matcha Cocoa",
              type: "line",
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("primary") },
              symbol: "circle",
              stack: "product",
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
          grid: { right: 10, left: 5, bottom: 5, top: 8, containLabel: !0 },
        };
      }));
  },
  echartsStepLineChartInit = function () {
    var t,
      e,
      o = document.querySelector(".echart-step-line-chart-example");
    o &&
      ((t = utils.getData(o, "options")),
      (o = window.echarts.init(o)),
      (e = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ]),
      echartSetOption(o, t, function () {
        return {
          color: [
            utils.getColor("danger"),
            utils.getColor("warning"),
            utils.getColor("primary"),
          ],
          legend: {
            data: [
              { name: "Max", textStyle: { color: utils.getGrays()[600] } },
              { name: "Min", textStyle: { color: utils.getGrays()[600] } },
            ],
          },
          tooltip: {
            trigger: "axis",
            padding: [7, 10],
            backgroundColor: utils.getGrays()[100],
            borderColor: utils.getGrays()[300],
            textStyle: { color: utils.getColors().dark },
            borderWidth: 1,
            transitionDuration: 0,
            formatter: tooltipFormatter,
            position: function (t, e, o, r, a) {
              return getPosition(t, e, o, r, a);
            },
          },
          xAxis: {
            type: "category",
            data: e,
            boundaryGap: !1,
            axisLine: {
              lineStyle: { color: utils.getGrays()[300], type: "solid" },
            },
            axisTick: { show: !1 },
            axisLabel: {
              formatter: function (t) {
                return t.substring(0, 3);
              },
              color: utils.getGrays()[400],
              margin: 15,
            },
            splitLine: { show: !1 },
            axisPointer: { lineStyle: { color: utils.getGrays()[300] } },
          },
          yAxis: {
            type: "value",
            splitLine: { lineStyle: { color: utils.getGrays()[200] } },
            boundaryGap: !1,
            axisLabel: { show: !0, color: utils.getGrays()[400], margin: 15 },
            axisTick: { show: !1 },
            axisLine: { show: !1 },
          },
          series: [
            {
              name: "Step Start",
              type: "line",
              step: "start",
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("primary"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("primary") },
              symbol: "circle",
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "Step Middle",
              type: "line",
              step: "middle",
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("warning"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("warning") },
              symbol: "circle",
              data: [220, 282, 201, 234, 290, 430, 410],
            },
            {
              name: "Step End",
              type: "line",
              step: "end",
              symbolSize: 10,
              itemStyle: {
                color: utils.getGrays().white,
                borderColor: utils.getColor("danger"),
                borderWidth: 2,
              },
              lineStyle: { color: utils.getColor("danger") },
              symbol: "circle",
              data: [450, 432, 401, 454, 590, 530, 510],
            },
          ],
          grid: { right: "3%", left: "8%", bottom: "10%", top: "5%" },
        };
      }));
  };
docReady(echartsLineChartInit),
  docReady(echartsLineAreaChartInit),
  docReady(echartsPieChartInit),
  docReady(echartsBasicBarChartInit),
  docReady(echartsDoughnutChartInit),
  docReady(echartsStackedLineChartInit),
  docReady(echartsStackedAreaChartInit),
  docReady(echartsLineMarkerChartInit),
  docReady(echartsAreaPiecesChartInit),
  docReady(echartsLineRaceChartInit),
  docReady(echartsStepLineChartInit),
  docReady(echartsLineGradientChartInit),
  docReady(echartsDynamicLineChartInit),
  docReady(echartsHorizontalBarChartInit),
  docReady(echartsBarNegativeChartInit),
  docReady(echartsBarSeriesChartInit),
  docReady(echartsWaterFallChartInit),
  docReady(echartsHorizontalStackedChartInit),
  docReady(echartsBarRaceChartInit),
  docReady(echartsGradientBarChartInit),
  docReady(echartsBarLineChartInit),
  docReady(echartsBasicCandlestickChartInit),
  docReady(echartsCandlestickMixedChartInit),
  docReady(echartsUsaMapInit),
  docReady(echartsScatterBasicChartInit),
  docReady(echartsBubbleChartInit),
  docReady(echartsScatterQuartetChartInit),
  docReady(echartsScatterSingleAxisChartInit),
  docReady(echartsBasicGaugeChartInit),
  docReady(echartsGaugeProgressChartInit),
  docReady(echartsGaugeRingChartInit),
  docReady(echartsGaugeMultiRingChartInit),
  docReady(echartsGaugeMultiTitleChartInit),
  docReady(echartsGaugeGradeChartInit),
  docReady(echartsLineLogChartInit),
  docReady(echartsLineShareDatasetChartInit),
  docReady(echartsBarTimelineChartInit),
  docReady(echartsDoughnutRoundedChartInit),
  docReady(echartsPieLabelAlignChartInit),
  docReady(echartsRadarChartInit),
  docReady(echartsRadarCustomizedChartInit),
  docReady(echartsRadarMultipleChartInit),
  docReady(echartsPieMultipleChartInit),
  docReady(echartsHeatMapChartInit),
  docReady(echartsHeatMapSingleSeriesChartInit),
  docReady(echartsBarStackedChartInit),
  docReady(echartsPieEdgeAlignChartInit);
//# sourceMappingURL=echart-example.js.map
