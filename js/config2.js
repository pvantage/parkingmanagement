var siteurl = "http://parkingandtowingexperts.com/parkingmanagement/app";
var realsiteurl = "http://parkingandtowingexperts.com/parkingmanagement";
function getUrlParameter(sParam) {
	alert(sParam);
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
}

function language_en_menus()
{
	var menu='<div class="lang_div"><ul><li class="active"><a href="#">English</a></li><li><a href="#">Espanol</a></li></ul></div>';
	return menu;
}
function driver_menus(para='')
{
	var menu='<li><a href="violations-towing.html'+para+'">Violation Towing</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Unauthorized Vehicles</a></li>';
		menu+='<li><a href="inactive-vehicles.html'+para+'">Inactive Vehicles</a></li>';
		menu+='<li><a href="my-account.html'+para+'">My Account</a></li>';
		menu+='<li><a href="../index.html">Log Out</a></li>';
	return menu;
}
function manager_menus(para='')
{
	var menu='<li><a href="vehicles.html'+para+'">Vehicles</a></li>';
		menu+='<li><a href="violations-towing.html'+para+'">Violation Towing</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Unauthorized Vehicles</a></li>';
		menu+='<li><a href="users.html'+para+'">Users</a></li>';
		menu+='<li><a href="my-account.html'+para+'">My Account</a></li>';
		menu+='<li><a href="../index.html">Log Out</a></li>';
	return menu;
}



