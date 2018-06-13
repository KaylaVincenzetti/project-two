function menPage() {
    location.href="men.html"

}

function womenPage() {
    location.href="women.html"
}

function cartPage() {
    location.href="cart.html"
}


function displayMensShirts() {

    var menShirt = $(this).attr("data-name");
    var queryURL = "/api/men";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

       
        for (var i = 0; i < response.length;i++) {
            console.log(response[i]);
            $("#mens-products").prepend("<div>"+response[i].title+" "+response[i].size+" "+response[i].color+" "+"</div>");
        }
    });

}

displayMensShirts();



function displayWomenShirt() {

    var womenShirt = $(this).attr("data-name");
    var queryURL = "/api/women";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

       
        for (var j = 0; j < response.length;j++) {
            console.log(response[j]);
            $("#womens-products").prepend("<div>"+response[j].title+" "+response[j].size+" "+response[j].color+" "+"</div>");
        }
    });
}


displayWomenShirt();

function displayCart() {

    var addToCart = $(this).attr("data-name");
    var queryURL = "/api/cart";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

       
        for (var o = 0; o < response.length;o++) {
            console.log(response[o]);
            $("#cart").prepend("<div>"+response[o].table_name+" "+response[o].sub_id+" "+"</div>");
        }
    });
}

displayCart();