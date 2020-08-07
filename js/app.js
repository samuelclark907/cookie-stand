'use strict';

var hoursOfOperation = ['6am', '7am'];

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
    };

    render: function() {
      this.calcHourlySalesArray();
      //remember to change the element ID.
      var ulEl = document.getElementById('seattle');
      for (var i = 0; i < hoursOfOperation.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = `${hoursOfOperation[i]}: ${this.hourlySalesArray[i]} cookies`;
        ulEl.append(liEl);
      }
      liEl = document.createElement('li');
      liEl.textContent = `Total: ${this.dailySalesTotal} cookies`;
      ulEl.append(liEl);
    }
  }
}
seattleObj.render();





/*var tokyoObj = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2
};
console.log('Tokyo run');

var i;
for (i = 0; i < 13; i++) {
  console.log(getRandomIntInclusive(tokyoObj.minCust, tokyoObj.maxCust) * tokyoObj.avgCookieSale);
}
var dubaiObj = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7
};

console.log('Dubai run');

var i;
for (i = 0; i < 13; i++) {
  console.log(getRandomIntInclusive(dubaiObj.minCust, dubaiObj.maxCust) * dubaiObj.avgCookieSale);

}
var parisObj = {
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
