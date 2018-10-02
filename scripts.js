/********************************

        COOKIE clicker

********************************/

//declare default variables
let cookieCount = 0;
let clickPower = 30;

//declare DOM variables
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount();
})

let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
}

/********************************

        Click Power

********************************/

//declare default variables
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

//declare DOM variables
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//Buy click power
buyClickPower.addEventListener("click", function() {
    if (cookieCount >= clickPowerPriceAmount) {
        //subtract cookies from the price of the item
        cookieCount -= clickPowerPriceAmount;
        //update cookie counter.
        refreshCookieCount();
         
        //Upgrade power level
        clickPowerLevelNumber += 1;
    
        //Update click price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
    
        //update Click Power
        clickPower += 1;
    
        //refresh shop item
        refreshPowerClick();
    
    } else {
        console.log("You don't have enough cookies!");
    }
})

let refreshPowerClick = function() {
    clickPowerLevel.innterHTML = clickPowerLevelNumber;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}
    

let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function(){
      cookieCount += grandmaPower;
      refreshCookieCount();
    }, 1000);
  }


/********************************

          Grandmas

********************************/

//set default values
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower;
    grandmaMultiple.innerHTML = grandmaPower - 10;
  }

//buy a grandma
buyGrandma.addEventListener("click", function() {

    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= grandmaPriceAmount) {
        // Subtract cookies from the price of the item.
        cookieCount +=  - grandmaPriceAmount;
        refreshCookieCount()
  
    //upgrade power level
    grandmaLevelNumber += 1;
  
    //update price
    grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
  
    //update grandma power
    grandmaPower += 10;
  
    //turn autoGrandma on!
    autoGrandma = true
    autoGrandmaStart();
  
    //refresh shop item
    refreshGrandma();
  
  }
});

/********************************

          Facilities

********************************/

//set default variables
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNumber = 0;

//declare DOM variables
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

let refreshFacility = function() {
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}

let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000);
}

//buy a facility
buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()

    //upgrade power level
    facilityLevelNumber += 1;

    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

    //update facility power
    facilityPower += 600;

    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshFacility();

  }
})

//game loop

//refresh shop