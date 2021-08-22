
///////////////////////////////////////////////
               //total-price
const bestTotal = document.getElementById("best-price");
const lastTotal = document.getElementById("last");
const totalPrice = document.getElementById("total-price")
function updatetotal(){
    /* 1 */const memoryCharge =parseInt( memoryPrice.innerText);
    /* 2 */ const ssdCharge =parseInt( ssdPrice.innerText);
    /* 3 */const DelleveryCharge =parseInt( Dellevery.innerText);
    /* 4 */const bestTotalCharge =parseInt( bestTotal.innerText);
    /* 5 */const fineltotalPrice = memoryCharge+ssdCharge+DelleveryCharge+bestTotalCharge;
    totalPrice.innerText =fineltotalPrice;

    lastTotal.innerText = fineltotalPrice;
}
////////////////////////////////////////////////
              // buttons handler  
/* 1 */const button1st = document.getElementById("freememory-price");
/* 2 */const button2nd = document.getElementById("memory-price");
/* 3 */const button3rd = document.getElementById("freessd-price");
/* 4 */const button4th = document.getElementById("512ssd-price");
/* 5 */const button5th = document.getElementById("1tbssd-price");
/* 6 */const button6th = document.getElementById("freedellevery-price");
/* 7 */const button7th = document.getElementById("dellevery-price");
///////////////////////////////////////////////
               //evenlisener            
/* 1 */const memoryPrice = document.getElementById('totalmemory-price');
/* 2 */const ssdPrice = document.getElementById('totalstorage-price');
/* 3 */const Dellevery = document.getElementById('totaldellevery-price');
/////////////////////////////////////////////
              // price number
/* 1 */button1st.addEventListener('click', function(){
    memoryPrice.innerText="0"; 
    updatetotal();
  
})
/* 2 */button2nd.addEventListener('click', function(){
    memoryPrice.innerText="180"; 
    updatetotal();
   
})
/* 3 */button3rd.addEventListener('click', function(){
    ssdPrice.innerText="0";
    updatetotal();

})
/* 4 */button4th.addEventListener('click', function(){
    ssdPrice.innerText="100";
    updatetotal();
    
})
/* 5 */button5th.addEventListener('click', function(){
    ssdPrice.innerText="180";
    updatetotal();
  
})
/* 6 */button6th.addEventListener('click', function(){
    Dellevery.innerText="0";
    updatetotal();
  
})
/* 7 */button7th.addEventListener('click', function(){
    Dellevery.innerText="20";
    updatetotal();
 
})
///////////////////////////////////////////
// if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
//     window.location.href = 'banking.html';
// }
document.getElementById('btn').addEventListener('click', function(){
    const lastTotal = document.getElementById("last");
    const newLastTotal = lastTotal.innerText;
    const finelLastTotal=  newLastTotal;
    lastTotal.innerText=finelLastTotal;
    console.log(finelLastTotal)
})

document.getElementById("last-btn" ).addEventListener('click', function () {
    const promo = document.getElementById("promo");
    const promocode = promo.value;
    if (promocode == 'stevekaku') {
        const lastTotal = document.getElementById("last");
        const newLastTotal = lastTotal.innerText;
       const lastTotalText=  (newLastTotal/100)*80;
       const finelLastTotal= lastTotalText;
       lastTotal.innerText=finelLastTotal;

    }
   
})
