$(function() {

    let formPizzaOrder = $(".pizza-order");
    // console.log("działa");



    let pizza = $(".pizza");
    let price = $('.price');
    let tomatoSauce = $(".tomato-sauce");
    let garlicSauce = $(".garlic-sauce");

    let agree = $(".agree");

    let errors = $(".errors");

    let pizzaPriceTable = [
        {value: 1, price: 22},
        {value: 2, price: 24},
        {value: 3, price: 26},
        {value: 4, price: 29},
        {value: 5, price: 21},
    ];

    pizza.change( function() {

        let pizzaType = $(this).val()

  

        if (pizzaType == 0) {
            console.log(pizzaType);  
            price.text("0 PLN")        
        }


        pizzaPriceTable.forEach( function(tableElement) {
            
            if ( pizzaType == tableElement.value ) {
                console.log(tableElement);
                // price.text("ala ma kota");
                price.text(tableElement.price + "0 PLN");
                return;
            }
        });
    });


});