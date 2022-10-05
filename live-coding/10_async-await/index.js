/* const inventory={
    laptop:32,
    speaker:65,
    monitor:12
}
function checkInventory(product){
    return new Promise((resolve, reject)=>{
        if(inventory[product]>0){
            resolve("Produkt vorhanden")
        }else{
            reject("Produkt ausverkauft")
        }
    })
}


function order (product){
   checkInventory(product).then((resolved)=>{
    console.log(resolved)
   })
   .catch((rejected)=>{
    console.log(rejected)
   })
}

order ("speaker")
 */

const inventory = {
  laptop: {
    count: 32,
    price: 3999,
  },
  speaker: {
    count: 65,
    price: 34.99,
  },
  monitor: {
    count: 12,
    price: 52.95,
  },
};
function checkInventory(product) {
  return new Promise((resolve, reject) => {
    if (inventory[product] > 0) {
      resolve("Produkt vorhanden");
    } else {
      reject("Produkt ausverkauft");
    }
  });
}


function processPayment(product, balance) {
    return new Promise((resolve, reject) => {
        if(balance>=inventory[product].price){
            resolve("Bezahlen erfolgreich")
        }else{
      reject("Nicht genug Guthaben");
        }
    });
  }




function shipOrder() {
  return new Promise((resolve) => {
    setTimeout(()=>resolve("Produkt verschickt"),2000);
  });
}


function order(product, balance) {
  checkInventory(product)
    .then((productInventory) => {
      console.log(productInventory);
      processPayment(product, balance)
      .then((productPayment)=>{
        console.log(productPayment)
        shipOrder()
        .then((productShipment)=>{
            console.log(productShipment)
        })
      })
    })
    .catch((rejected) => {
      console.log(rejected);
    });
}







order("speaker", 62.5);
