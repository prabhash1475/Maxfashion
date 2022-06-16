let cart_arr = JSON.parse(localStorage.getItem("basket")) || [];






show_data(cart_arr);


function show_data(items) {
    let cart_box = document.querySelector("#pocket_cart_box");
    cart_box.innerHTML = "";
    let para_0 = document.createElement("p");
    para_0.innerText = "Total Items: " + items.length;
    let total_items = document.createElement("div");
    total_items.append(para_0);
    total_items.style.textAlign = "center";


    cart_box.append(total_items);
    items.map(function (elem, index) {



        let main_div = document.createElement("div");
        main_div.setAttribute("class", "pocket_cart_items");
        let img = document.createElement("img");
        img.setAttribute("src", elem.image_url);
        let inner_div = document.createElement("div");

        let price = document.createElement("h5");
        price.innerText = "₹" + " " + elem.price;
        let name = document.createElement("p");
        name.innerText = elem.name;


        let qty = document.createElement("h5");
        qty.innerText = "Qty " + elem.qty;
        inner_div.append(price, name, qty);
        main_div.append(img, inner_div);
        cart_box.append(main_div);
    })



}




////getting the total price of the cart

let total = cart_arr.reduce(function (acc, item) {
    return acc + item.price;
}, 0)


console.log(total)










//// making the total price box

let sub_total_div = document.createElement("div")

let para_1 = document.createElement("h4");
para_1.innerText = "Subtotal: ₹ " + " " + total + " only";
//console.log(para_1);


let para_2 = document.createElement("p");
para_2.innerText = "(Shipping charges may apply)";
///console.log(sub_total_div.innerHTML)
sub_total_div.setAttribute("class", "sub_total")

let btn_div = document.createElement("div");

let view_basket_btn = document.createElement("button");

view_basket_btn.addEventListener("click", function () {
    window.location.href = "basket.html";
})
let checkout_bt = document.createElement("button");
view_basket_btn.innerText = "VIEW BASKET";
checkout_bt.innerText = "CHECKOUT";
btn_div.append(view_basket_btn, checkout_bt);


console.log(btn_div.innerHTML)
sub_total_div.append(para_1, para_2, btn_div);
document.querySelector("#pocket_cart_box").append(sub_total_div)




console.log("hello")
let basket_icon = document.querySelector("#pocket_basket");
console.log(basket_icon.innerHTML)
basket_icon.addEventListener("mouseover", function () {
    let cart = document.querySelector("#pocket_cart_box");

    cart.style.display = "block";
})
let body = document.querySelector("body")

body.addEventListener("click", function () {
    let cart = document.querySelector("#pocket_cart_box");

    cart.style.display = "none";
})

//console.log(cart_arr)