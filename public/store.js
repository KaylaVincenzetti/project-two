function menPage() {
    location.href="men.html"
    event.preventDefault();

}

function womenPage() {
    location.href="women.html"
    event.preventDefault();
}

function cartPage() {
    location.href="cart.html"
    event.preventDefault();
}

function homePage() {
    location.href="index.html"
    event.preventDefault();

}


function displayMensShirts() {

    $.ajax({
        url: "/api/men",
        method: "GET"
    }).done(function(shirts){
        for (var i = 0; i < shirts.length; i++) {
    var product = $("<div>");
    product.append("<h2>" + shirts[i].title + " - Color: " + shirts[i].color);
    product.append("<h2>" + "Size: " + shirts[i].size + " - Color: " + shirts[i].price);
    product.append("<img src='" + shirts[i].image_url + "' alt='" + shirts[i].title + "' />");
    $("#mens-products").append(product);
}
    });

}

displayMensShirts();



function displayWomenShirt() {

        $.ajax({
        url: "/api/women",
        method: "GET"
        }).done(function(shirts){
        for (var i = 0; i < shirts.length; i++) {
        var product = $("<div>");
        product.append("<h2>" + shirts[i].title + " - Color: " + shirts[i].color);
        product.append("<h2>" + "Size: " + shirts[i].size + " - Color: " + shirts[i].price);
        product.append("<img src='" + shirts[i].image_url + "' alt='" + shirts[i].title + "' />");
        $("#womens-products").append(product);
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

$(".add-cart").on("click", function(){
    var id = $(this).attr("id");

    $.get("/shop/add/:id", id, function(response) {
       
        
        $.post("/shop/add", response, function(data) {

            res.redirect("/api/cart");
        })
   
    })

});