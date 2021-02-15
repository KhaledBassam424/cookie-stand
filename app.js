'use strict';

let workHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

function randomValue(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}


let seattle = {
    minHourlyCustomers: 23,
    maxHourlyCustomers: 65,
    avgCookieSale: 6.3,
    wholeDayCustomerAvg: [],
    avgCookieWholeDay: [],
    totalSumofCookies: 0
    ,
    eachHourAverage: function () {
        for (let i = 0; i < workHours.length; i++) {
            //this.wholeDayCustomerAvg[i] = this.avgHourlyCustomers
            this.wholeDayCustomerAvg.push(randomValue(this.maxHourlyCustomers,this.minHourlyCustomers))
        }
    },
    eachHourCookiesAvg: function(){
        for (let i = 0; i < workHours.length; i++) {
            this.avgCookieWholeDay.push(Math.ceil(this.wholeDayCustomerAvg[i]*this.avgCookieSale))
            
        }
    },

    sumofTotalCookies: function(){
        for(let i=0; i<this.avgCookieWholeDay.length; i++) {
           this.totalSumofCookies=this.avgCookieWholeDay[i]+this.totalSumofCookies
            
        }
        return this.totalSumofCookies
},
render:function(){
    let divEl = document.getElementById('one');
    let header2 = document.createElement('h2');
    divEl.appendChild(header2)
    let hrr=document.createElement('hr')
    divEl.appendChild(hrr);
    header2.textContent = 'Seattle'
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    // each time im creating a list item
    let liEl; 
    for(let i = 0 ; i <this.avgCookieWholeDay.length; i++)
    {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${workHours[i]}: ${this.avgCookieWholeDay[i]} cookies`;
    }
     liEl =document.createElement('li')
     ulEl.appendChild(liEl)
     liEl.textContent=`Total: ${this.totalSumofCookies} cookies`
}
}

seattle.eachHourAverage();
seattle.eachHourCookiesAvg();
seattle.sumofTotalCookies();
seattle.render();
console.log(seattle);




let Tokyo = {
    minHourlyCustomers: 3,
    maxHourlyCustomers: 24,
    avgCookieSale: 1.2,
    wholeDayCustomerAvg: [],
    avgCookieWholeDay: [],
    totalSumofCookies: 0 ,
    eachHourAverage: function () {
        for (let i = 0; i < workHours.length; i++) {
            //this.wholeDayCustomerAvg[i] = this.avgHourlyCustomers
            this.wholeDayCustomerAvg.push(randomValue(this.maxHourlyCustomers,this.minHourlyCustomers))
        }
    },
    eachHourCookiesAvg: function(){
        for (let i = 0; i < workHours.length; i++) {
            this.avgCookieWholeDay.push(Math.ceil(this.wholeDayCustomerAvg[i]*this.avgCookieSale))
            
        }
    },
    sumofTotalCookies: function(){
        for(let i=0; i<this.avgCookieWholeDay.length; i++) {
           this.totalSumofCookies=this.avgCookieWholeDay[i]+this.totalSumofCookies
            
        }
        return this.totalSumofCookies
},
render:function(){
    let divEl = document.getElementById('two');
    let H3=document.createElement('h3')
    divEl.appendChild(H3);
    let hrr=document.createElement('hr')
    divEl.appendChild(hrr);
    H3.textContent = 'Tokyo'
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    // each time im creating a list item
    let liEl; 
    for(let i = 0 ; i <this.avgCookieWholeDay.length; i++)
    {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${workHours[i]}: ${this.avgCookieWholeDay[i]} cookies`;
    }
     liEl =document.createElement('li')
     ulEl.appendChild(liEl)
     liEl.textContent=`Total: ${this.totalSumofCookies} cookies`
}


    
}



Tokyo.eachHourAverage();
Tokyo.eachHourCookiesAvg();
Tokyo.sumofTotalCookies();
Tokyo.render();
console.log(Tokyo);




let Dubai = {
    minHourlyCustomers: 11,
    maxHourlyCustomers: 38,
    avgCookieSale: 3.7,
    wholeDayCustomerAvg: [],
    avgCookieWholeDay: [],
    totalSumofCookies: 0 ,
    eachHourAverage: function () {
        for (let i = 0; i < workHours.length; i++) {
            //this.wholeDayCustomerAvg[i] = this.avgHourlyCustomers
            this.wholeDayCustomerAvg.push(randomValue(this.maxHourlyCustomers,this.minHourlyCustomers))
        }
    },
    eachHourCookiesAvg: function(){
        for (let i = 0; i < workHours.length; i++) {
            this.avgCookieWholeDay.push(Math.ceil(this.wholeDayCustomerAvg[i]*this.avgCookieSale))
            
        }
    },
    sumofTotalCookies: function(){
        for(let i=0; i<this.avgCookieWholeDay.length; i++) {
           this.totalSumofCookies=this.avgCookieWholeDay[i]+this.totalSumofCookies
            
        }
        return this.totalSumofCookies
},
render:function(){
    let divEl = document.getElementById('two');
    let H5=document.createElement('h5')
    divEl.appendChild(H5);
    let hrr=document.createElement('hr')
    divEl.appendChild(hrr);
    H5.textContent = 'Dubai'
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    // each time im creating a list item
    let liEl; 
    for(let i = 0 ; i <this.avgCookieWholeDay.length; i++)
    {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${workHours[i]}: ${this.avgCookieWholeDay[i]} cookies`;
    }
     liEl =document.createElement('li')
     ulEl.appendChild(liEl)
     liEl.textContent=`Total: ${this.totalSumofCookies} cookies`
}



    
}



Dubai.eachHourAverage();
Dubai.eachHourCookiesAvg();
Dubai.sumofTotalCookies();
Dubai.render();
console.log(Dubai);




let Paris = {
    minHourlyCustomers: 20,
    maxHourlyCustomers: 38,
    avgCookieSale: 2.3,
    wholeDayCustomerAvg: [],
    avgCookieWholeDay: [],
    totalSumofCookies: 0,
    eachHourAverage: function () {
        for (let i = 0; i < workHours.length; i++) {
            //this.wholeDayCustomerAvg[i] = this.avgHourlyCustomers
            this.wholeDayCustomerAvg.push(randomValue(this.maxHourlyCustomers,this.minHourlyCustomers))
        }
    },
    eachHourCookiesAvg: function(){
        for (let i = 0; i < workHours.length; i++) {
            this.avgCookieWholeDay.push(Math.ceil(this.wholeDayCustomerAvg[i]*this.avgCookieSale))
            
        }
    },

sumofTotalCookies: function(){
    for(let i=0; i<this.avgCookieWholeDay.length; i++) {
       this.totalSumofCookies=this.avgCookieWholeDay[i]+this.totalSumofCookies
        
    }
    return this.totalSumofCookies
},
render:function(){
    let divEl = document.getElementById('two');
    let H5=document.createElement('h5')
    divEl.appendChild(H5);
    let hrr=document.createElement('hr')
    divEl.appendChild(hrr);
    H5.textContent = 'Paris'
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    // each time im creating a list item
    let liEl; 
    for(let i = 0 ; i <this.avgCookieWholeDay.length; i++)
    {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${workHours[i]}: ${this.avgCookieWholeDay[i]} cookies`;
    }
     liEl =document.createElement('li')
     ulEl.appendChild(liEl)
     liEl.textContent=`Total: ${this.totalSumofCookies} cookies`

}

    
}



Paris.eachHourAverage();
Paris.eachHourCookiesAvg();
Paris.sumofTotalCookies();
Paris.render();
console.log(Paris);




let Lima = {
    minHourlyCustomers: 2,
    maxHourlyCustomers: 16,
    avgCookieSale: 4.6,
    wholeDayCustomerAvg: [],
    avgCookieWholeDay: [],
    totalSumofCookies: 0,
    eachHourAverage: function () {
        for (let i = 0; i < workHours.length; i++) {
            //this.wholeDayCustomerAvg[i] = this.avgHourlyCustomers
            this.wholeDayCustomerAvg.push(randomValue(this.maxHourlyCustomers,this.minHourlyCustomers))
        }
    },
    eachHourCookiesAvg: function(){
        for (let i = 0; i < workHours.length; i++) {
            this.avgCookieWholeDay.push(Math.ceil(this.wholeDayCustomerAvg[i]*this.avgCookieSale))
            
        }
    },
    sumofTotalCookies: function(){
        for(let i=0; i<this.avgCookieWholeDay.length; i++) {
           this.totalSumofCookies=this.avgCookieWholeDay[i]+this.totalSumofCookies
            
        }
        return this.totalSumofCookies
    },
    
render:function(){
    let divEl = document.getElementById('two');
    let H5=document.createElement('h5')
    divEl.appendChild(H5);
    let hrr=document.createElement('hr')
    divEl.appendChild(hrr);
    H5.textContent = 'Lima'
    let ulEl = document.createElement('ul');
    divEl.appendChild(ulEl);
    // each time im creating a list item
    let liEl; 
    for(let i = 0 ; i <this.avgCookieWholeDay.length; i++)
    {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${workHours[i]}: ${this.avgCookieWholeDay[i]} cookies`;
    }
     liEl =document.createElement('li')
     ulEl.appendChild(liEl)
     liEl.textContent=`Total: ${this.totalSumofCookies} cookies`

}



    
}



Lima.eachHourAverage();
Lima.eachHourCookiesAvg();
Lima.sumofTotalCookies();
Lima.render();
console.log(Lima);