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
        clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);
    
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

  let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function(){
      cookieCount += grandmaPower;
      refreshCookieCount();
    }, 1000);
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
        grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
    
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
        facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);;

        //turn autoFacility on!
        facilityAuto = true
        autoFacilityStart();

        //refresh shop item
        refreshFacility();

  }
})


/********************************

          Doubler

********************************/

//set default variables
let doublerPriceAmount = 1999;
let doublerLevelNumber = 0;
//let doublerAmount = cookieCount;

//declare DOM variables
let buyDoubler = document.getElementById('buy-doubler');
let doublerPrice = document.getElementById('doubler-price');
let doublerLevel = document.getElementById('doubler-level');

let refreshDoubler = function() {
    doublerPrice.innerHTML = doublerPriceAmount;
    doublerLevel.innerHTML = doublerLevelNumber;
}


buyDoubler.addEventListener('click', () => {
    // upgrade doubler level
    doublerLevelNumber += 1;

    if (cookieCount >= doublerPriceAmount) {
        // update cookies
        cookieCount -= doublerPriceAmount;
        refreshCookieCount();
    
        // update price
        doublerPriceAmount = Math.floor(doublerPriceAmount* 1.33);

        // double cookies
        cookieCount = (cookieCount) * 2;
        refreshCookieCount();

        refreshDoubler();
    }

})





/********************************

        Zombie Cookie Maker

********************************/


//set default variables
let zombiePriceAmount = 2999;
let zombieLevelNumber = 0;
let zombiePower = 100; 
let zombieAdd = 3000;
let zombieMin = 0;

//declare DOM variables
let buyZombie = document.getElementById('buy-zombie');
let zombiePrice = document.getElementById('zombie-price');
let zombieLevel = document.getElementById('zombie-level');


let refreshZombie = function() {
    zombiePrice.innerHTML = zombiePriceAmount;
    zombieLevel.innerHTML = zombieLevelNumber;
}

let autoZombieStart = function() {
    let facilityInt = window.setInterval(function(){
        let num = Math.random(zombieMin, zombieAdd);
        let diff = Math.random(100);
        cookieCount += Math.floor(num - diff);
        refreshCookieCount();
    }, 1000);
}

buyZombie.addEventListener('click', () => {
    // upgrade doubler level
    zombieLevelNumber += 1;

    if (cookieCount >= zombiePriceAmount) {
        // update cookies
        cookieCount -= zombiePriceAmount;
        refreshCookieCount();
        // update price
        zombiePriceAmount = Math.floor(zombiePriceAmount* 1.33);

        autoZombieStart();
        zombieAdd += 1000;
        zombieMin += 50;
        refreshZombie();
    }

    

})

/********************************

        BUNBUN COOKIES

********************************/

//set default values
let bunBunAuto = false;
let bunBunPower = 10000;
let bunBunPriceAmount = 9999999;
let bunBunLevelNumber = 0;

//declare DOM variables
let buyBunBun = document.getElementById('buy-bunbun');
let bunBunPrice = document.getElementById('bunbun-price');
let bunBunLevel = document.getElementById('bunbun-level');
let bunBunMultiple = document.getElementById('bunbun-multiple');

let refreshBunBun = function() {
    bunBunLevel.innerHTML = bunBunLevelNumber
    bunBunPrice.innerHTML = bunBunPriceAmount;
    bunBunMultiple.innerHTML = bunBunPower;
    bunBunMultiple.innerHTML = bunBunPower - 10;
  }

let autoBunBunStart = function() {
let bunBunInt = window.setInterval(function(){
    cookieCount += bunBunPower;
    refreshCookieCount();
}, 1000);
}

//buy a bunny
buyBunBun.addEventListener("click", function() {

    //make sure we have enough cookies and subtract our cookies from the price
    if (cookieCount >= bunBunPriceAmount) {
        // Subtract cookies from the price of the item.
        cookieCount +=  - bunBunPriceAmount;
        refreshCookieCount()
  
        //upgrade power level
        bunBunLevelNumber += 1;
    
        //update price
        bunBunPriceAmount = Math.floor(bunBunPriceAmount * 1.33);
        
        //turn bunny on!
        bunBunAuto = true
        autoBunBunStart();
    
        //refresh shop item
        refreshBunBun();

        //update bunny power
        bunBunPower += Math.floor(bunBunPowert* 1.33);;
  
  }
});


// draw cookies
let maxY = window.innerHeight;
let maxX = window.innerWidth;

console.log(maxY);
console.log(maxX);