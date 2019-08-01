//var items = ["Aluminium","Beer Cans","Baskets Plastic","Baskets Cane", "Soft Drink Cans","Coffee Tins","Milo Tins","Cardboard","Bubble Wrap", "Foam", "Pottery", "Shoes", "Glad Wrap", "Cosmetic Jars", "Cellophane","Beer Cartons (flattened)","Cardboard Boxes (flattened)","Cereal Boxes (remove bag)","Egg Cartons","Greeting Cards","Paper Towel Rolls (roll only)","Towel Paper Rolls (roll only)","Washing Powder Boxes (empty)","Glass","Beer Bottles","Coffee Jars","Sauce Bottles (rinsed)","Spirit Bottles","Wine Bottles","Paper","Computer Paper (not shredded)","Envelopes","Fruit Juice Cartons (not silver lined)","Glossy Magazines","Glossy Brochures","Junk Mail","Milk Cartons (not silver lined)","News Papers","Paper (not shredded)","Paper Bags","Wrapping Paper","Steel","Steel Cans","Steel Tins","Food Tins (rinsed)","Pet Food Tins (rinsed)","Beer Bottle Tops","Jar Lids","Plastic","Ice Cream Containers","Margarine Tubs","Milk Bottles","Detergent Bottles","Shampoo Bottles","Soft Drink Bottles","Water Bottles","Yoghurt Containers","Plastic Bags","Soft Plastics","Light Plastic Film","Polystyrene","Shredded Paper","Bottle Lids","Dirty Cardboard","Meat Trays","Nappies","Clothes","Textiles","Garden Waste","Food Waste","Aerosol Cans","Rope","Cable","Garden Hose Pipe","Green Waste","Container Lids","Food Waste", "Acids", "Alkalis", "Aerosols", "Batteries", "Engine Coolants", "Glycols", "Fire Extinguishers", "Flammables", "Flares", "Fluorescent Lamps", "Fluorescent Tubes", "Gas Cylinders", "Household Chemicals", "Paint", "Pesticides", "Herbicides", "Poisons", "Toxins", "Pool Chemicals", "Smoke Detectors", "Furniture"];

var items = ["Baskets Plastic", "Baskets Cane", "Black Plastic Sheeting", "Broken Glass", "Bubble Wrap", "Cassette Tapes", "CDs", "Cat Litter", "Cellophane", "Ceramica", "Broken Plates", "Clothing", "Cosmetic Jars", "Foam", "Seedling Containers", "Meat Trays", "Food Scraps", "Vegetable Scraps", "Garden Hose", "Glad Wrap", "Grease Proof Paper", "Green Waste", "Lawn Clippings", "Manure", "Animal Droppings", "Nappies", "Cutlery Plastic", "Plastic Wrapping", "Plate Glass", "Polystyrene", "Pottery", "Pyrex Ovenware", "Remote Controls", "Shoes", "Terracotta Tiles", "Terracotta Pots", "Tree Prunings", "Vacuum Cleaner Dust", "Vacuum Cleaner Bag", "Wax Paper"];

function result(val) {
  document.getElementsByTagName("h1").value = val;
}

var val = "";
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
          /*
          executes a function when someone clicks on the item value (DIV element):
          */
         
            b.addEventListener("click", function(e) {
              val = this.getElementsByTagName("input")[0].value;
              modal.style.display = "block";
              console.log(val);
              var i = 0;
              for (i = 0; i < items.length; i++) {
                if (val == items[i]) {
                  if (i < 40) {
                    console.log("Green Lid Rubbish Bin");
                  }
                  else {
                    console.log("Yellow Lid Recycling Bin");
                  }
                } 
              }
              document.getElementsByTagName("h1").innerHTML = val;
            });
          
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

autocomplete(document.getElementById("input"), items);

// Animation
let box = document.getElementById("animate");
document.getElementById("input").onclick = () => {
  document.getElementById("input").placeholder = "";
  var pos = 0;
  var id = setInterval(frame, 5);
  
  if (pos == 350) {
    clearInterval(id);
  } else {
    pos++; 
    box.style.top = (-1 * pos) + "px";
  }
  
  /*
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      box.style.top = (-1 * pos) + "px";
    }
  }
  */
}

/*
document.oninput = function () {
  var val = document.getElementById("input").value;
  document.getElementsByTagName("h1").value = val;
};
*/

// Modal Popup
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("input").value = "";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("input").value = "";
  }
}

/* Getting the GPS location of user */
navigator.geolocation.getCurrentPosition(function(location) {
  console.log(location.coords.latitude);
  console.log(location.coords.longitude);
  console.log(location.coords.accuracy);
});
/* 
TODO: Use info to alert of throw date
*/