'use strict';
// 
// // let maxHourlyCustomers;
// //let minHourlyCustomers;
// let avgCookieSale;
// let totalSumofCookies;
let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let sumofTotalCookiesArray=[3442,234,1103,908,600]
function randomValue(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}
                                 
function Cookies(name,minHourlyCustomers,maxHourlyCustomers,avgCookieSale,){
this.name=name
this.minHourlyCustomers = minHourlyCustomers;
this.maxHourlyCustomers = maxHourlyCustomers;
this.avgCookieSale = avgCookieSale;
this.wholeDayCustomerAvg=[];
this.avgCookieWholeDay=[];
this.totalSumofCookies=0;
this.totalSumofCookiesArray=[];

}

Cookies.prototype.eachHourAverage= function () {
    for (let i = 0; i < workHours.length; i++) {
      this.wholeDayCustomerAvg.push(randomValue(this.maxHourlyCustomers,this.minHourlyCustomers))
    }
    return this.wholeDayCustomerAvg
}
   
Cookies.prototype.eachHourCookiesAvg= function(){
    for (let i = 0; i < workHours.length; i++) {
        this.avgCookieWholeDay.push(Math.ceil(this.wholeDayCustomerAvg[i]*this.avgCookieSale))
        
    }
    return this.avgCookieWholeDay
}

Cookies.prototype.sumofTotalCookies=function(){
    let totalSumofCookies=0
    for(let i=0; i<this.avgCookieWholeDay.length; i++) {
      this.totalSumofCookies=this.avgCookieWholeDay[i]+this.totalSumofCookies
      this.totalSumofCookiesArray.push(this.totalSumofCookies) 
    }
    
    return this.totalSumofCookies
 }
// Cookies.prototype.sumofTotalCookiesArray=function(){
//     this.totalSumofCookiesArray.push(this.totalSumofCookies)
//     console.log(this.totalSumofCookiesArray)

// }

Cookies.prototype.render=function(){
    let divEl = document.getElementById('one');
    let article=document.createElement('article');
   // let hrr=document.createElement('hr')
   // divEl.appendChild(hrr);
    divEl.appendChild(article);
    let tr1 = document.createElement('tr1');
    article.appendChild(tr1);
    Cookies.prototype.hourHeader=function(){
    for (let i = 0; i < workHours.length; i++) {
        let th = document.createElement('th');
        tr1.appendChild(th);
        th.textContent = ` ${workHours[i]} -`
    }
    let th=document.createElement('th')
    tr1.appendChild(th)
    th.textContent='Daily location sum'
}
    
    let tr2 = document.createElement('tr');
    article.appendChild(tr2);


    for (let i = 0; i < workHours.length; i++) {
       let td = document.createElement('td');
    
        tr2.appendChild(td);
        td.textContent =` ${this.avgCookieWholeDay[i]} -`
    }
}
let seattle = new Cookies('seattle', 23, 65, 6.3);

seattle.eachHourAverage();
seattle.eachHourCookiesAvg();
seattle.sumofTotalCookies();
seattle.render();
seattle.hourHeader();
console.log(seattle)



let Tokyo = new Cookies('Tokyo', 3, 24, 1.2);

Tokyo.eachHourAverage();
Tokyo.eachHourCookiesAvg();
Tokyo.sumofTotalCookies();
Tokyo.render();
console.log(Tokyo)




let Dubai = new Cookies('Dubai', 11, 38, 3.7);

Dubai.eachHourAverage();
Dubai.eachHourCookiesAvg();
Dubai.sumofTotalCookies();
Dubai.render();
console.log(Dubai)
 




let Paris = new Cookies('Paris',  20, 38, 2.3);

Paris.eachHourAverage();
Paris.eachHourCookiesAvg();
Paris.sumofTotalCookies();
Paris.render();
console.log(Paris)



let Lima = new Cookies('Lima', 2, 16, 4.6);

Lima.eachHourAverage();
Lima.eachHourCookiesAvg();
Lima.sumofTotalCookies();
Lima.render();
console.log(Lima)
 
