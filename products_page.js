let boysData_arr = JSON.parse(localStorage.getItem("boysData"))||[];
let basket_data = JSON.parse(localStorage.getItem("basket"))||[];
  

show_data(basket_data);

     function show_data(items){

     

console.log(boysData_arr)
boysData_arr.map(function(elem,index){
    let main_div = document.createElement("div");
    let img = document.createElement("img");
    img.setAttribute("src",elem.image_url)
    let price = document.createElement("h4");
    price.innerText = "$"+ elem.price
    let name = document.createElement("p");
    name.innerText = elem.name;

    let add_to_cart_btn = document.createElement("button");
    add_to_cart_btn.innerText = "ADD TO BASKET";
    add_to_cart_btn.setAttribute("class","add_to_cart_btn");
    add_to_cart_btn.addEventListener("click",function(){
              basket_data.push(elem);
              console.log(basket_data);
              localStorage.setItem("basket",JSON.stringify(basket_data));
              add_to_cart_btn.textContent = "ADDED TO CART";
              add_to_cart_btn.addEventListener("click",function(){
                  window.location.href = "basket.html";
              })
    })

    main_div.addEventListener("mouseover",function(){
        add_to_cart_btn.style.display = "block";
    })
    main_div.addEventListener("mouseout",function(){
        add_to_cart_btn.style.display = "none";
    })


    main_div.append(img,price,name,add_to_cart_btn);
    document.querySelector("#product_box").append(main_div);
})

     }

   console.log(basket_data);

