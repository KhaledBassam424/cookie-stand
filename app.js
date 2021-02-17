'use strict';

let hours = ["6am", "7am", "8am", "9am","10am", "11am","12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
  
  
  let div = document.getElementById("cookiesdetals");
  let table = document.createElement("table");
  div.appendChild(table);
 

 
  
  let shops = [];
  
  function SalmonCook(country, minValue, maxValue, avgValue) {
    this.country = country;
    this.min = minValue;
    this.max = maxValue;
    this.avg = avgValue;
    this.sum = 0;
   
    
    this.cusPerhour = [];
    this.cookperHour = [];
    shops.push(this);
    console.log(this);
  }
  
  SalmonCook.prototype.customerperHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let random = Math.floor(Math.random() * (this.max - this.min) + this.min);
      this.cusPerhour.push(random);
    }
  };
  
  SalmonCook.prototype.cookiesPerhour = function () { 
    for (let i = 0; i < hours.length; i++) {
      let cookies = this.avg * this.cusPerhour[i];
      this.cookperHour.push(Math.ceil(cookies));
    }
  };
  
  SalmonCook.prototype.summation = function () {
    for (let i = 0; i < this.cookperHour.length; i++) {
      this.sum = this.sum + this.cookperHour[i];
    }
    return this.sum;
  };
 
 
  
  SalmonCook.prototype.render = function () {
    let tr1 = document.createElement("tr");
    table.appendChild(tr1);
    tr1.textContent = this.country;
  

    let td;
    for (let i = 0; i < this.cookperHour.length; i++) {
      td = document.createElement("td");
      tr1.appendChild(td);
      td.textContent = this.cookperHour[i];
    }
  
    let tdsummation = document.createElement("td");
    tr1.appendChild(tdsummation);
    tdsummation.textContent = this.sum;
  };
  
  
  
  
  const form = document.getElementById('AmmanForm');
  
  form.addEventListener('submit', ammanObjectCreator)
  
  
  function ammanObjectCreator(event){
    event.preventDefault();
   
    const countryName=event.target.countryNameField.value;
    
    const minHourlyCustValue = event.target.minValueField.value;
    
    const maxHourlyCustValue = event.target.maxValueField.value;
    
    const avgHourlyCustomers = event.target.avgValueField.value;
    
    table.innerHTML=""
    
    
  let tr = document.createElement("tr");
  table.appendChild(tr);
  let th = document.createElement("th");
  tr.appendChild(th);

  
  
  let seattle = new SalmonCook("seattle", 23, 65,6.3);
  seattle.customerperHour();
  seattle.cookiesPerhour();
  seattle.summation();
  seattle.render();
  
  
  
  let Tokyo = new SalmonCook("Tokyo", 3, 24, 1.2);
  Tokyo.customerperHour();
  Tokyo.cookiesPerhour();
  Tokyo.summation();
  Tokyo.render();
 
 
 
  let Dubai = new SalmonCook("Dubai", 11, 38, 3.7);
  Dubai.customerperHour();
  Dubai.cookiesPerhour();
  Dubai.summation();
  Dubai.render();
  
  let Paris = new SalmonCook("Paris", 20, 38,2.3);
  Paris.customerperHour();
  Paris.cookiesPerhour();
  Paris.summation();
  Paris.render();
  
  let Lima = new SalmonCook("Lima", 2, 16, 4.6);
  Lima.customerperHour();
  Lima.cookiesPerhour();
  Lima.summation();
  Lima.render();
  
  
  
  for (let i = 0; i < hours.length; i++) {
    let th = document.createElement("th");
    tr.appendChild(th);
    th.textContent = hours[i];
  }
 
  let totloc = document.createElement("th");
  tr.appendChild(totloc);
  totloc.textContent = "Daily Location Total ";

    let newLocation=new SalmonCook(countryName, parseInt(minHourlyCustValue), parseInt(maxHourlyCustValue), parseFloat(avgHourlyCustomers))
    
    // console.log(Amman)
    newLocation.customerperHour();
    newLocation.cookiesPerhour();
    newLocation.summation();
    newLocation.render();
    
    console.log(newLocation)
    let arrofobjects=[seattle,Tokyo,Dubai,Paris,Lima];
    arrofobjects.push(newLocation)


    
  
  totalPerhour();
  
  function totalPerhour () {
  let trTotal = document.createElement("tr");
  table.appendChild(trTotal);
  trTotal.textContent = "Total";
  
  
  let totaltotal = 0 ;
  let additionPerHour ;
  let td ;
  for (let i=0 ; i<hours.length ; i++){
    additionPerHour = 0
    
    for (let j =0 ; j< arrofobjects.length ; j++){
        additionPerHour = additionPerHour + arrofobjects[j].cookperHour[i]
         console.log(additionPerHour)
    }
  
    td = document.createElement('td');
    trTotal.appendChild(td);
    td.textContent = additionPerHour
  
     totaltotal += additionPerHour
  }
  
  td = document.createElement('td') ;
  trTotal.appendChild(td);
  td.textContent=totaltotal
  
  }
 
  }  
  
  
  
  
  
  
  
  
  
  



