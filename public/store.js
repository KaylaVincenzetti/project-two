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

function addToCartWomen(id) {
    console.log(id);
    console.log("Adding to cart: item "+id);
         $.ajax({
             url: "/shop/add/",
             data: {id:id},
             method: "POST"
         }).then(function(response) {
            console.log(response);  
            location.href='cart.html';
        });
    location.href="cart.html"
    event.preventDefault();
}


function displayMensShirts() {

    $.ajax({
        url: "/api/men",
        method: "GET"
    }).done(function(shirts){
        for (var i = 0; i < shirts.length; i++) {
    var product = $("<div>");
    var button = $("<div>");
    product.append("<h2>" + shirts[i].title + " - Color: " + shirts[i].color);
    product.append("<h2>" + "Size: " + shirts[i].size + " - Color: " + shirts[i].price);
    product.append("<img src='" + shirts[i].image_url + "' alt='" + shirts[i].title + "' />");
    product.append('<button class="add-cart" onclick="addToCartMen('+shirts[i].id+')">Add To Cart</button>');
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
        var button = $("<div>");
        product.append("<h2>" + shirts[i].title + " - Color: " + shirts[i].color);
        product.append("<h2>" + "Size: " + shirts[i].size + " - Color: " + shirts[i].price);
        product.append("<img src='" + shirts[i].image_url + "' alt='" + shirts[i].title + "' />");
        product.append('<button class="add-cart" onclick="addToCartWomen('+shirts[i].id+')">Add To Cart</button>');
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
    }).then(function(shirts) {
        console.log(shirts);

       
        for (var i = 0; i < shirts.length;i++) {
            console.log(shirts[i]);
            $("#cart").prepend("<div>"+shirts[i].inventory+" "+shirts[i].product_id+" "+"</div>");
        }
    });
}

displayCart();

$(".add-cart").on("click", function(){
    var id = $(this).attr("id");
    $.post("/shop/add/" + id, function(data) {
        console.log("Item added to database");
        res.redirect("/api/cart");
        
    })

});








