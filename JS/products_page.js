let boysData_arr = JSON.parse(localStorage.getItem("boysData")) || [];
let basket_data = JSON.parse(localStorage.getItem("basket")) || [];

displayData(boysData_arr);

function displayData(boysData_arr) {
    document.querySelector("#product_box").innerText = "";
    console.log(boysData_arr)
    boysData_arr.map(function (elem, index) {
        let main_div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", elem.image_url)
        let price = document.createElement("h4");
        price.innerText = "₹" + " " + elem.price
        let name = document.createElement("p");
        name.innerText = elem.name;

        let add_to_cart_btn = document.createElement("button");
        add_to_cart_btn.innerText = "ADD TO BASKET";
        add_to_cart_btn.setAttribute("class", "add_to_cart_btn");
        add_to_cart_btn.addEventListener("click", function () {
            elem.qty = 1;
            basket_data.push(elem);
            console.log(basket_data);
            localStorage.setItem("basket", JSON.stringify(basket_data));
            add_to_cart_btn.textContent = "ADDED TO CART";
            add_to_cart_btn.addEventListener("click", function () {
                window.location.href = "basket.html";
            })
        })

        main_div.addEventListener("mouseover", function () {
            add_to_cart_btn.style.display = "block";
        })
        main_div.addEventListener("mouseout", function () {
            add_to_cart_btn.style.display = "none";
        })


        main_div.append(img, price, name, add_to_cart_btn);
        document.querySelector("#product_box").append(main_div);
    })
    console.log(basket_data);

}


function search() {

    let searchText = document.getElementById("S").value;
    console.log(searchText)
    let filterData = boysData_arr.filter(function (elem) {
        return elem.name.includes(searchText);
    })
    console.log(filterData)
    displayData(filterData)

    document.getElementById("searchItems").textContent = filterData.length;
}

function filterItems() {
    var filter = document.getElementById("filter").value;

    var filterData = boysData_arr.filter(function (elem) {
        return elem.price > Number(filter);
    });
    console.log(filterData)
    displayData(filterData)

    document.getElementById("searchItems").textContent = filterData.length;
}

function filters() {
    var filter = document.getElementById("filter").value;
    var searchText = document.getElementById("search").value;
    var sorting = document.querySelector("#sorter").value;
}

function clearFilters() {
    filterData = JSON.parse(localStorage.getItem("boysData_arr"));
    displayData(filterData);
    document.getElementById("searchItems").textContent = filterData.length;
}

function sortItems() {
    var sorting = document.querySelector("#sorter").value;
    console.log(sorting);

    if (sorting == "h2l") {
        boysData_arr.sort(function (a, b) {
            return b.price - a.price;
        })
        displayData(boysData_arr);
    }
    else if (sorting == "l2h") {
        boysData_arr.sort(function (a, b) {
            return a.price - b.price;
        })
        displayData(boysData_arr);
    }
}




