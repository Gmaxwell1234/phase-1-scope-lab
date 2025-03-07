var customerName= "bob";
function upperCaseCustomerName(){
    customerName = customerName.toLocaleUpperCase();
}
function setBestCustomer(){
     bestCustomer = "not bob";
    console.log(bestCustomer);
}
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    console.log(bestCustomer)
}
const leastFavoriteCustomer = "MAxwell";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bob";
    console.log (leastFavoriteCustomer);
}