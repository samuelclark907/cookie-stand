'use strict';


var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

var totalsForEachHour = [];
var totalOfAllLocations = 0;



function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Seattle object and hourly averages

function Sales(location, minCust, maxCust, avgCust) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = avgCust;
  this.hourlySalesArray = [];
  this.totalDailySales = 0;
}
Sales.prototype.calcHourlySalesArray = function () {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var hourlySales = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCust);
    this.hourlySalesArray.push(hourlySales);
    this.totalDailySales += hourlySales;
  }
};



var hoursTableEl = document.getElementById('table-head');
var hoursRowsEl = document.createElement('tr');
var hoursHeadEl = document.createElement('th');
hoursHeadEl.textContent = ('Hours');
hoursRowsEl.append(hoursHeadEl);
hoursTableEl.append(hoursRowsEl);

for (var i = 0; i < hoursOfOperation.length; i++) {
  var hoursDataEl = document.createElement('th');
  hoursDataEl.textContent = this.hoursOfOperation[i];
  hoursRowsEl.append(hoursDataEl);
  hoursTableEl.append(hoursRowsEl);
}


Sales.prototype.render = function () {
  this.calcHourlySalesArray();
  var parentEl = document.getElementById('table-body');
  var trowEl = document.createElement('tr');
  var theadEl = document.createElement('th');
  theadEl.textContent = this.location;
  trowEl.append(theadEl);
  parentEl.append(trowEl);

  for (var i = 0; i < hoursOfOperation.length; i++) {
    var tdataEl = document.createElement('td');
    tdataEl.textContent = this.hourlySalesArray[i];
    trowEl.append(tdataEl);
  }
  tdataEl = document.createElement('td');
  tdataEl.textContent = `Total ${this.totalDailySales}`;
  trowEl.append(tdataEl);
  parentEl.append(trowEl);
};







var seattle = new Sales('Seattle', 23, 65, 6.3);
var tokyo = new Sales('Tokyo', 3, 24, 1.2);
var dubai = new Sales('Dubai', 11, 38, 3.7);
var paris = new Sales('Paris', 20, 38, 2.3);
var lima = new Sales('Lima', 2, 16, 4.6);
var allLocations = [seattle, tokyo, dubai, paris, lima];



seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function getTotalHour() {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var hourTotal = 0;
    for (var j = 0; j < allLocations.length; j++) {
      hourTotal += allLocations[j].hourlySalesArray[i];
    }
    totalOfAllLocations += hourTotal;
    totalsForEachHour[i] = hourTotal;
  }
}

getTotalHour();

var totalAll = document.getElementById('table-foot');
var totalRows = document.createElement('tr');
var totalData = document.createElement('th');
totalData.textContent = ('Totals');
totalRows.append(totalData);
totalAll.append(totalRows);
for (i = 0; i < hoursOfOperation.length; i++) {
  var totalHourlyData = document.createElement('td');
  totalHourlyData.textContent = totalsForEachHour[i];
  totalRows.append(totalHourlyData);
}
var grandTotal = document.createElement('td');
grandTotal.textContent = totalOfAllLocations;
totalRows.append(`The grand total is ${totalOfAllLocations}`);









/*var seattleObj = {
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

//Tokyo object and hourly averages

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

//Dubai object and hourly averages

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

//Paris object and hourly averages

var parisObj = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
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
    var ulEl = document.getElementById('paris');
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

parisObj.render();

//Lima object and hourly averages

var limaObj = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
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
    var ulEl = document.getElementById('lima');
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

limaObj.render();*/
