var item = 1;

function prev() {
  var items = document.querySelectorAll("#items > div");
  if (item == 1) {
    item = items.length;
  } else {
    item--;
  }
  showItem();
}

function next() {
  var items = document.querySelectorAll("#items > div");
  if (item == items.length) {
    item = 1;
  } else {
    item++;
  }
  showItem();
}

function showItem() {
  var items = document.querySelectorAll("#items > div");
  for (var i = 0; i < items.length; i++) {
    if (i + 1 == item) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}

showItem(); 


let must_have = document.querySelector("#must_have"); 
must_have.addEventListener("click", function(){
    window.location.href = "products_page.html"; 
}); 