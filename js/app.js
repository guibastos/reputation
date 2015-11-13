$(document).ready(function() {

	// seller_reputation = $.getJSON('https://api.mercadolibre.com/cbt/siteusers?info=stats#json');

	$.ajax({
			url: 'https://api.mercadolibre.com/cbt/siteusers?info=stats#json',
			dataType: 'json',
			type: 'get',
			success: function(data){
				seller_reputation = data;
				add_data_table(seller_reputation);
				var x = seller_reputation.length
			},
			error: function(result, stats, error){
				console.log(error);
			}
	});

});

// end document ready

function add_data_row(i) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cell1_id = row.insertCell(0);
    var cell2_siteid = row.insertCell(1);
    var cell3_nickname = row.insertCell(2);
    var cell4_reputation = row.insertCell(3);
    var cell5_open_claims = row.insertCell(4);
    cell1_id.innerHTML = seller_reputation[i]["id"];
    cell2_siteid.innerHTML = seller_reputation[i]["site_id"];
    cell3_nickname.innerHTML = seller_reputation[i]["nickname"];
    cell4_reputation.innerHTML = seller_reputation[i]["reputation"];
	cell5_open_claims.innerHTML = seller_reputation[i]["open_claims"];

}


function add_data_table () {
		var i = 0;
		while (i < seller_reputation.length) {
			add_data_row(i);
			i++;
		}
};






