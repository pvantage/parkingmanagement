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
function driver_menus(para)
{
	var menu='<li><a href="violations-towing.html'+para+'">Violation Towing</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Unauthorized Vehicles</a></li>';
		menu+='<li><a href="inactive-vehicles.html'+para+'">Inactive Vehicles</a></li>';
		menu+='<li><a href="my-account.html'+para+'">My Account</a></li>';
		menu+='<li><a href="../index.html">Log Out</a></li>';
	return menu;
}
function manager_menus(para)
{
	var menu='<li><a href="vehicles.html'+para+'">Vehicles</a></li>';
		menu+='<li><a href="violations-towing.html'+para+'">Violation Towing</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Unauthorized Vehicles</a></li>';
		menu+='<li><a href="users.html'+para+'">Users</a></li>';
		menu+='<li><a href="my-account.html'+para+'">My Account</a></li>';
		menu+='<li><a href="../index.html">Log Out</a></li>';
	return menu;
}
var uid=getUrlParameter('uid');

var usertype=getUrlParameter('usertype');
setTimeout(function(){
	
	if(usertype=='driver')
	{
		jQuery('.driver').show();
		var menu=driver_menus('?uid='+uid+'&usertype='+usertype);
		jQuery('.menu_div ul.menus').html(menu);
		jQuery('.logo_div a').attr('href','dashboard.html?uid='+uid+'&usertype='+usertype);
	}
	if(usertype=='admin')
	{
		jQuery('.admin').show();
		var menu=manager_menus('?uid='+uid+'&usertype='+usertype);
		jQuery('.menu_div ul.menus').html(menu);
		jQuery('.logo_div a').attr('href','dashboard.html?uid='+uid+'&usertype='+usertype);
	}
	jQuery('a.showhidemenus').click(function(){
		if(jQuery(this).hasClass('show'))
		{
			jQuery( ".menu_div ul.menus").animate({ "left": "-220px" }, "slow" );
			jQuery(this).removeClass('show');
		}
		else
		{
			jQuery( ".menu_div ul.menus").animate({ "left": "0px" }, "slow" );
			jQuery(this).addClass('show');
		}
	});
},500);
function checkloggedin(uid)
{
	
	var url=siteurl+'/api/login';
	
	jQuery.ajax({  
	 type: 'POST',  
	 url: url,  
	 //contentType: contentType,  
	 dataType: 'json',  
	 data: {checkloggedin:1,uid:uid},  
	 crossDomain: true,  
	 beforeSend: function() {
		jQuery('body .bodyoverlay').remove();
		jQuery('body .preloader').remove();
		var html='<div class="bodyoverlay"></div><div class="preloader"></div>';
		jQuery('body').append(html);					
	 },		
	 complete: function() {
		jQuery('body .bodyoverlay').remove();
		jQuery('body .preloader').remove();					
	 },
	 success: function(res) {  
	   if(res['loggedin']!='success')
	   {
		window.location='../index.html';   
	   }
		return false;
	 },  
	 error: function(response, d, a){
		jQuery('body .bodyoverlay').remove();
		jQuery('body .popupbox').remove();
		var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Server Error.</h1><button class="okbox">OK</button></div>';
		jQuery('body').append(html);
		
		jQuery('.okbox').click(function(){
			jQuery('body .bodyoverlay').remove();
			jQuery('body .popupbox').remove();
		}); 
		
	 } 
   });
		
}