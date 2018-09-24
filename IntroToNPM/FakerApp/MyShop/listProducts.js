var faker = require("faker");
for (var i = 0; i < 10; i++) {
    
    console.log(faker.commerce.productName() + " - " + faker.commerce.price());
    
    console.log();
    //10 random products and prices
}
