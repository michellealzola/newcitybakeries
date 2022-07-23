function sheetAjax(){
    var ajax_sheet = new XMLHttpRequest();

    ajax_sheet.open("GET", "./sheetcakes.html", true);

    ajax_sheet.onreadystatechange = function(){
            if( ajax_sheet.readyState == 4 && ajax_sheet.status == 200){
                var response_sheet = ajax_sheet.responseText;
                document.getElementById('sheetDisplay').innerHTML = response_sheet;
            }
        }; 

    ajax_sheet.send();

}
    
    
//     var sheetSelected = document.getElementById('sheet_cakes');
//     var sheetItems = document.getElementById('sheet_section');
    
//     function sheet_cliked() {    
//     if(sheetSelected.checked) {
//         sheetItems.style.visibility = 'visible';
//     } else {
//         sheetItems.style.visibility = 'hidden';
//     }
// }
    var roundSelected = document.getElementById('round_cakes');
    var roundItems = document.getElementById('round_section');

function round_cliked() {
    if(roundSelected.checked) {
        roundItems.style.visibility = 'visible';
    } else {
        roundItems.style.visibility = 'hidden';
    }
}
function submitOrder() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var address = document.getElementById('client_address').value;
    var postalCode = document.getElementById('postal_code').value;
    var phoneNumber = document.getElementById('phone_number').value;
    var email = document.getElementById('e_mail').value;

    var length = document.getElementById('length').value;
    var width = document.getElementById('width').value;
    var sheet_layer = document.getElementById('s_layers').value;
    var sheet_cheese = document.getElementById('sheet_cheese');
    var sheet_almonds = document.getElementById('sheet_almonds');
    var sheet_jam = document.getElementById('sheet_jam');
    var sheet_cost = 0;

    var s_extra_cheese = 0;
    var s_extra_almonds = 0;
    var s_extra_jam = 0;    
    var s_extra_item = "";
    
    if((length * width == 900) && (sheet_layer == 1)){
        sheet_cost = 18;
    }
    else if((length * width == 900) && (sheet_layer == 2)){
        sheet_cost = 18 + 18 * 0.50;
    }
    else if((length * width == 900) && (sheet_layer == 3)){
        sheet_cost = 18 + 18 * (0.50*2);
    }
    else if((length * width > 900) && (sheet_layer == 1)){
        sheet_cost = (length * width - 900) * 0.02 + 18;
    }
    else if((length * width > 900) && (sheet_layer == 2)){
        sheet_cost = (length * width - 900) * 0.02 + 18 * 0.5 + 18;
    }
    else if((length * width > 900) && (sheet_layer == 3)){
        sheet_cost = (length * width - 900) * 0.02 + 18 * (0.50*2) + 18;
    }

    var radius = document.getElementById('radius').value;
    var round_layer = document.getElementById('c_layers').value;
    var round_cheese = document.getElementById('round_cheese');
    var round_almonds = document.getElementById('round_almonds');
    var round_jam = document.getElementById('round_jam');
    var round_cost = 0;

    var r_extra_cheese = 0;
    var r_extra_almonds = 0;
    var r_extra_jam = 0;    
    var r_extra_item = "";

    if(roundSelected.checked && (radius * radius * 3.14 == 706.5) && (round_layer == 1)){
        round_cost = 15;
    }
    else if(roundSelected.checked && (radius * radius * 3.14 == 706.5) && (round_layer == 2)){
        round_cost = 15 + 15 * 0.50;
    }
    else if(roundSelected.checked && (radius * radius * 3.14 == 706.5) && (round_layer == 3)){
        round_cost = 15 + 15 * (0.50*2);
    }
    else if(roundSelected.checked && (radius * radius * 3.14 > 706.5) && (round_layer == 1)){
        round_cost = (radius * radius * 3.14 - 706.5) * 0.02 + 15;
    }
    else if(roundSelected.checked && (radius * radius * 3.14 > 706.5) && (round_layer == 2)){
        round_cost = (radius * radius * 3.14 - 706.5) * 0.02 + 15 * 0.5 + 15;
    }
    else if(roundSelected.checked && (radius * radius * 3.14 > 706.5) && (round_layer == 3)){
        round_cost = (radius * radius * 3.14 - 706.5) * 0.02 + 15 * (0.50*2) + 15;
    }

    var invoice = "<h2>Invoice</h2>";
    invoice += "<div>";
    invoice += "<strong>" + firstName + "</strong>" + " " + "<strong>" + lastName + "</strong>" + "<br>";
    invoice += address + "<br>";
    invoice += postalCode + "<br>";
    invoice += phoneNumber + "<br>";
    invoice += email + "<br>";
    invoice += "<br>";
    invoice += "<br>";

    invoice += "Your Order:" + "<br>";

    invoice += "<br>";

    //if(sheetSelected.checked){
        invoice += "Sheet Cake " + length + " by " + width + " cm with " + sheet_layer +  " layers " + " " + "$" + sheet_cost.toFixed(2) + "<br>";
    //}    
    if(sheet_cheese.checked){
        s_extra_cheese = 5;
        s_extra_item = "Cream Cheese Icing";
        invoice += s_extra_item + " " + "$" +  s_extra_cheese + "<br>";
    }
    if(sheet_almonds.checked){
        s_extra_almonds = 7;
        s_extra_item = "Fruit and Almonds Topping";
        invoice += s_extra_item + " " + "$" +  s_extra_almonds + "<br>";
    }
    if(sheet_jam.checked){
        s_extra_jam = 4;
        s_extra_item = "Fruit Jam Filling";
        invoice += s_extra_item + " " + "$" + s_extra_jam + "<br>";
    }
    invoice += "<br>";
    var sheet_total = sheet_cost + s_extra_cheese + s_extra_almonds + s_extra_jam;

    if(roundSelected.checked){
        invoice += "Round Cake " + radius + " cm with " + round_layer +  " layers " + " " + "$" + round_cost.toFixed(2) + "<br>";
    }    
    if(roundSelected.checked && round_cheese.checked){
        r_extra_cheese = 5;
        r_extra_item = "Cream Cheese Icing";
        invoice += r_extra_item + " " + "$" +  r_extra_cheese + "<br>";
    }
    if(roundSelected.checked && round_almonds.checked){
        r_extra_almonds = 7;
        r_extra_item = "Fruit and Almonds Topping";
        invoice += r_extra_item + " " + "$" +  r_extra_almonds + "<br>";
    }
    if(roundSelected.checked && round_jam.checked){
        r_extra_jam = 4;
        r_extra_item = "Fruit Jam Filling";
        invoice += r_extra_item + " " + "$" + r_extra_jam + "<br>";
    }
    invoice += "<br>";
    var round_total = round_cost + r_extra_cheese + r_extra_almonds + r_extra_jam;
    invoice += "<br>";
    var overallTotal = sheet_total + round_total;

    invoice += "Total: $" + "<strong>" + overallTotal.toFixed(2) + "</strong>" + "<br>";

    invoice += "</div>";

    document.getElementById('invoice').innerHTML = invoice;

}