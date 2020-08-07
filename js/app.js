'use strict';


var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var seattleObj = {
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  hourlySalesArray: [],
  totalDailySales: 0,
  calcHourlySalesArray: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var hourlySales = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust));
      this.hourlySalesArray.push(hourlySales);
      this.totalDailySales += hourlySales;
    }
  },
  render: function () {
    this.calcHourlySalesArray();
    var ulEl = document.getElementById('seattle');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.hourlySalesArray[i]} cookies`;
      ulEl.append(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies`;
    ulEl.append(liEl);
  }
};

seattleObj.render();



var tokyoObj = {
  minCust: 3,
  maxCust: 24,
  avgCust: 1.2,
  hourlySalesArray: [],
  totalDailySales: 0,
  calcHourlySalesArray: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var hourlySales = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust));
      this.hourlySalesArray.push(hourlySales);
      this.totalDailySales += hourlySales;
    }
  },
  render: function () {
    this.calcHourlySalesArray();
    var ulEl = document.getElementById('tokyo');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.hourlySalesArray[i]} cookies`;
      ulEl.append(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies`;
    ulEl.append(liEl);
  }
};

tokyoObj.render();

var dubaiObj = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  hourlySalesArray: [],
  totalDailySales: 0,
  calcHourlySalesArray: function () {
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var hourlySales = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust));
      this.hourlySalesArray.push(hourlySales);
      this.totalDailySales += hourlySales;
    }
  },
  render: function () {
    this.calcHourlySalesArray();
    var ulEl = document.getElementById('dubai');
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${hoursOfOperation[i]}: ${this.hourlySalesArray[i]} cookies`;
      ulEl.append(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = `Total: ${this.totalDailySales} cookies`;
    ulEl.append(liEl);
  }
};

dubaiObj.render();


/*var parisObj = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3
};

console.log('Paris run');

var i;
for (i = 0; i < 13; i++) {
  console.log(getRandomIntInclusive(parisObj.minCust, parisObj.maxCust) * parisObj.avgCookieSale);
}
var limaObj = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6
};

console.log('Lima run');

var i;
for (i = 0; i < 13; i++) {
  console.log(getRandomIntInclusive(limaObj.minCust, limaObj.maxCust) * limaObj.avgCookieSale);
}*/
