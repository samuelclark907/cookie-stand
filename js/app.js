'use strict';


var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];
var allLocations = [];
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
  allLocations.push(this);
}
Sales.prototype.calcHourlySalesArray = function () {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var hourlySales = Math.ceil(getRandomIntInclusive(this.minCust, this.maxCust) * this.avgCust);
    this.hourlySalesArray.push(hourlySales);
    this.totalDailySales += hourlySales;
  }
};


//render table head
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
// render table body
var parentEl = document.getElementById('table-body');
Sales.prototype.render = function () {
  this.hourlySalesArray = [];
  this.totalDailySales = 0;
  this.calcHourlySalesArray();
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


new Sales('Seattle', 23, 65, 6.3);
new Sales('Tokyo', 3, 24, 1.2);
new Sales('Dubai', 11, 38, 3.7);
new Sales('Paris', 20, 38, 2.3);
new Sales('Lima', 2, 16, 4.6);
renderAllStores();

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();

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



var totalAll = document.getElementById('table-foot');
function tableFoot() {
  getTotalHour();
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
}
tableFoot();
// Form handler
var myContainer = document.getElementById('newcity');
//var newLocation = [];


//form render functiom


// handle submit function
function handleSubmit(event) {
  event.preventDefault();

  // console.log(event.target);
  var newLocation = event.target.cityname.value;
  // console.log('location: ', location);
  var newMinCust = event.target.mincust.value;
  // console.log('min cust: ', newMinCust);
  var newMaxCust = event.target.maxcust.value;
  // console.log('maxcust: ', newMaxCust);
  var newAvgCust = event.target.avgcust.value;
  // console.log('avgcust: ', newAvgCust);
  new Sales(newLocation, newMinCust, newMaxCust, newAvgCust);
  totalOfAllLocations = 0;
  parentEl.innerHTML = '';
  totalAll.innerHTML = '';
  renderAllStores();
  tableFoot();
}
function renderAllStores() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}

myContainer.addEventListener('submit', handleSubmit);






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
