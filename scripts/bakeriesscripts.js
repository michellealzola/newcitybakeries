var s = false;
var r = false;
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

    s = true;

}
function roundAjax(){
    var ajax_round = new XMLHttpRequest();

    ajax_round.open("GET", "./roundcakes.html", true);

    ajax_round.onreadystatechange = function(){
            if( ajax_round.readyState == 4 && ajax_round.status == 200){
                var response_round = ajax_round.responseText;
                document.getElementById('roundDisplay').innerHTML = response_round;
            }
        }; 

    ajax_round.send();

    r = true;

}



function submitOrder() {


    let firstName = document.getElementById('first_name').value;
    if(firstName == ""){
        alert("Please enter your First Name");
        return false;
    }

    let lastName = document.getElementById('last_name').value;
    if(lastName == ""){
        alert("Please enter your Last Name");
        return false;
    }

    let address = document.getElementById('client_address').value;
    if(address == ""){
        alert("Please enter your Address");
        return false;
    }

    let postalCode = document.getElementById('postal_code').value;
    if(postalCode == ""){
        alert("Please enter your Postal Code");
        return false;
    }

    let phoneNumber = document.getElementById('phone_number').value;
    if(phoneNumber == ""){
        alert("Please enter your Phone Number");
        return false;
    }

    let email = document.getElementById('e_mail').value;
    if(email == ""){
        alert("Please enter your E-mail");
        return false;
    }

    var length = 0;
    var width = 0;
    var sheet_layer = 0;
    var sheet_cheese;
    var sheet_almonds;
    var sheet_jam;
    var sheet_cost = 0;

    if(s){
        length = document.getElementById('length').value;
        width = document.getElementById('width').value;
        sheet_layer = document.getElementById('s_layers').value;
        sheet_cheese = document.getElementById('sheet_cheese');
        sheet_almonds = document.getElementById('sheet_almonds');
        sheet_jam = document.getElementById('sheet_jam');
    }

    var s_extra_cheese = 0;
    var s_extra_almonds = 0;
    var s_extra_jam = 0;    
    var s_extra_item = "";
    

    var radius = 0;
    var round_layer = 0;
    var round_cheese;
    var round_almonds;
    var round_jam;
    var round_cost = 0;

    if(r){
        radius = document.getElementById('r_radius').value;
        round_layer = document.getElementById('c_layers').value;
        round_cheese = document.getElementById('round_cheese');
        round_almonds = document.getElementById('round_almonds');
        round_jam = document.getElementById('round_jam');
    }

    var r_extra_cheese = 0;
    var r_extra_almonds = 0;
    var r_extra_jam = 0;    
    var r_extra_item = "";
    
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

    

    if((radius * radius * 3.14 == 706.5) && (round_layer == 1)){
        round_cost = 15;
    }
    else if((radius * radius * 3.14 == 706.5) && (round_layer == 2)){
        round_cost = 15 + 15 * 0.50;
    }
    else if((radius * radius * 3.14 == 706.5) && (round_layer == 3)){
        round_cost = 15 + 15 * (0.50*2);
    }
    else if((radius * radius * 3.14 > 706.5) && (round_layer == 1)){
        round_cost = (radius * radius * 3.14 - 706.5) * 0.02 + 15;
    }
    else if((radius * radius * 3.14 > 706.5) && (round_layer == 2)){
        round_cost = (radius * radius * 3.14 - 706.5) * 0.02 + 15 * 0.5 + 15;
    }
    else if((radius * radius * 3.14 > 706.5) && (round_layer == 3)){
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

    if(s){
        invoice += "Sheet Cake " + length + " by " + width + " cm with " + sheet_layer +  " layers " + " " + "$" + sheet_cost.toFixed(2) + "<br>";
    }    
    if(s && sheet_cheese.checked){
        s_extra_cheese = 5;
        s_extra_item = "Cream Cheese Icing";
        invoice += s_extra_item + " " + "$" +  s_extra_cheese + "<br>";
    }
    if(s && sheet_almonds.checked){
        s_extra_almonds = 7;
        s_extra_item = "Fruit and Almonds Topping";
        invoice += s_extra_item + " " + "$" +  s_extra_almonds + "<br>";
    }
    if(s && sheet_jam.checked){
        s_extra_jam = 4;
        s_extra_item = "Fruit Jam Filling";
        invoice += s_extra_item + " " + "$" + s_extra_jam + "<br>";
    }
    invoice += "<br>";
    var sheet_total = sheet_cost + s_extra_cheese + s_extra_almonds + s_extra_jam;

    if(r){
        invoice += "Round Cake " + radius + " cm with " + round_layer +  " layers " + " " + "$" + round_cost.toFixed(2) + "<br>";
    }    
    if(r && round_cheese.checked){
        r_extra_cheese = 5;
        r_extra_item = "Cream Cheese Icing";
        invoice += r_extra_item + " " + "$" +  r_extra_cheese + "<br>";
    }
    if(r && round_almonds.checked){
        r_extra_almonds = 7;
        r_extra_item = "Fruit and Almonds Topping";
        invoice += r_extra_item + " " + "$" +  r_extra_almonds + "<br>";
    }
    if(r && round_jam.checked){
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