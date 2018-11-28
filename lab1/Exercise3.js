const item = {
    "name" : "Biscuits",
    "type" : "regular",
    "category" : "food",
    "price" : 200
}

function applyCoupon(objItem){
    return function(discount){
        objItem.price = objItem.price - objItem.price * discount / 100; 
         return objItem;
    }
}

console.log(applyCoupon(item)(20).price === 160);