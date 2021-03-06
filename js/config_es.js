var siteurl = "http://parkingandtowingexperts.com/parkingdemo/app";
var realsiteurl = "http://parkingandtowingexperts.com/parkingdemo";

function gup(sParam) {
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
		var par='?uid='+uid+'&usertype='+usertype;
	var menu=' <div class="lang pull-right"><ul class="list-inline"><li><a href="../eng/dashboard.html'+par+'"><img src="../images/icon-en.png"> English</a></li><li class="active"><a href="#"><img src="../images/icon-es.png"> Espanol</a></li></ul></div>';
	return menu;
}
function driver_menus(para)
{
	var menu='<li><a href="violations-towing.html'+para+'">Remolque violaci&oacute;n</a></li>';
		menu+='<li><a href="violations-tag.html'+para+'">Tag violaci&oacute;n</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Los veh&iacute;culos no autorizados</a></li>';
		menu+='<li><a href="unauthorized-tag.html'+para+'">Tag no autorizada</a></li>';
		menu+='<li><a href="inactive-vehicles.html'+para+'">Veh&iacute;culos inactivos</a></li>';
		menu+='<li><a href="my-account.html'+para+'">Mi cuenta</a></li>';
		menu+='<li><a href="logout.html'+para+'">Cerrar sesi&oacute;n</a></li>';
	return menu;
}
function manager_menus(para)
{
	var menu='<li><a href="vehicles.html'+para+'">veh&iacute;culos</a></li>';
		menu+='<li><a href="violations-towing.html'+para+'">Remolque violaci&oacute;n</a></li>';
		menu+='<li><a href="violations-tag.html'+para+'">Tag violaci&oacute;n</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Los veh&iacute;culos no autorizados</a></li>';
		menu+='<li><a href="unauthorized-tag.html'+para+'">Tag no autorizada</a></li>';
		menu+='<li><a href="users.html'+para+'">usuarios</a></li>';
		menu+='<li><a href="my-account.html'+para+'">Mi cuenta</a></li>';
		menu+='<li><a href="report-parking-violation.html'+para+'">Informar Violaci&oacute;n Aparcamiento</a></li>';
		menu+='<li><a href="report-unathorized-vehicle.html'+para+'">Informe de veh&iacute;culo no autorizado</a></li>';
		menu+='<li><a href="logout.html'+para+'">Cerrar sesi&oacute;n</a></li>';
	return menu;
}
function users_menus(para)
{
	var menu='<li><a href="vehicles.html'+para+'">veh&iacute;culos</a></li>';
		menu+='<li><a href="violations-towing.html'+para+'">Remolque violaci&oacute;n</a></li>';
		menu+='<li><a href="violations-tag.html'+para+'">Tag violaci&oacute;n</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Los veh&iacute;culos no autorizados</a></li>';
		menu+='<li><a href="unauthorized-tag.html'+para+'">Tag no autorizada</a></li>';
		menu+='<li><a href="my-account.html'+para+'">Mi cuenta</a></li>';
		menu+='<li><a href="report-parking-violation.html'+para+'">Informar Violaci&oacute;n Aparcamiento</a></li>';
		menu+='<li><a href="report-unathorized-vehicle.html'+para+'">Informe de veh&iacute;culo no autorizado</a></li>';
		menu+='<li><a href="logout.html'+para+'">Cerrar sesi&oacute;n</a></li>';
	return menu;
}
function superadmins_menus(para)
{
	var menu='<li><a href="locations.html'+para+'">Ubicaciones</a></li>';
		menu+='<li><a href="vehicles.html'+para+'">veh&iacute;culos</a></li>';
		menu+='<li><a href="violations-towing.html'+para+'">Remolque violaci&oacute;n</a></li>';
		menu+='<li><a href="violations-tag.html'+para+'">Tag violaci&oacute;n</a></li>';
		menu+='<li><a href="unauthorized-vehicles.html'+para+'">Los veh&iacute;culos no autorizados</a></li>';
		menu+='<li><a href="unauthorized-tag.html'+para+'">Tag no autorizada</a></li>';
		menu+='<li><a href="users.html'+para+'">usuarios</a></li>';
		menu+='<li><a href="superadmins.html'+para+'">superadministradores</a></li>';
		menu+='<li><a href="service-staff.html'+para+'">Personal de servicio</a></li>';
		menu+='<li><a href="parking-lot-manager.html'+para+'">Los propietarios de Estacionamiento</a></li>';
		menu+='<li><a href="trucks.html'+para+'">camiones</a></li>';
		menu+='<li><a href="drivers.html'+para+'">Drivers</a></li>';
		menu+='<li><a href="storage-locations.html'+para+'">Ubicaciones de almacenamiento</a></li>';
		menu+='<li><a href="my-account.html'+para+'">Mi cuenta</a></li>';
		menu+='<li><a href="report-parking-violation.html'+para+'">Informar Violaci&oacute;n Aparcamiento</a></li>';
		menu+='<li><a href="report-unathorized-vehicle.html'+para+'">Informe de veh&iacute;culo no autorizado</a></li>';
		menu+='<li><a href="logout.html'+para+'">Cerrar sesi&oacute;n</a></li>';
	return menu;
}
var uid=gup('uid');

var usertype=gup('usertype');
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
	if(usertype=='user')
	{
		jQuery('.admin').show();
		var menu=users_menus('?uid='+uid+'&usertype='+usertype);
		jQuery('.menu_div ul.menus').html(menu);
		jQuery('.logo_div a').attr('href','dashboard.html?uid='+uid+'&usertype='+usertype);
	}
	if(usertype=='superadmin')
	{
		jQuery('.superadmin').show();
		var menu=superadmins_menus('?uid='+uid+'&usertype='+usertype);
		jQuery('.menu_div ul.menus').addClass('supermenus');
		jQuery('.menu_div ul.menus').html(menu);
		jQuery('.logo_div a').attr('href','dashboard.html?uid='+uid+'&usertype='+usertype);
	}
	jQuery('a.showhidemenus').click(function(){
		if(jQuery(this).hasClass('show'))
		{
			jQuery( ".menu_div ul.menus").animate({ "left": "-260px" }, "slow" );
			jQuery(this).removeClass('show');
		}
		else
		{
			jQuery( ".menu_div ul.menus").animate({ "left": "0px" }, "slow" );
			jQuery(this).addClass('show');
		}
	});
},1000);
function checkloggedin(uid)
{
	
	var url=siteurl+'/api/login';
	
	jQuery.ajax({  
	 type: 'POST',  
	 url: url,  
	 //contentType: contentType,  
	 dataType: 'json',  
	 data: {checkloggedin:1,uid:uid,lang:'es'},  
	 crossDomain: true,  
	 beforeSend: function() {
		/*jQuery('body .bodyoverlay').remove();
		jQuery('body .preloader').remove();
		var html='<div class="bodyoverlay"></div><div class="preloader"></div>';
		jQuery('body').append(html);*/					
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
		var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Error del Servidor.</h1><button class="okbox">DE ACUERDO</button></div>';
		jQuery('body').append(html);
		
		jQuery('.okbox').click(function(){
			jQuery('body .bodyoverlay').remove();
			jQuery('body .popupbox').remove();
		}); 
		
	 } 
   });
		
}
function activdeactivvehicle()
{
	jQuery('.activdeactivvehicle').click(function(){
		var $this=jQuery(this);
		var id=jQuery(this).attr('vid');	
		var mode=jQuery(this).attr('coords');
		var url=siteurl+'/api/update-vehicle';
		if(id!='' && mode!='')
		{
			jQuery.ajax({  
			 type: 'POST',  
			 url: url,  
			 //contentType: contentType,  
			 dataType: 'json',  
			 data: {id:id,mode:mode,uid:uid,lang:'es'},  
			 crossDomain: true,  
			 beforeSend: function() {
				jQuery('body .bodyoverlay').remove();
				jQuery('body .preloader').remove();
				var html='<div class="bodyoverlay"></div><div class="preloader"></div>';
				jQuery('body').append(html);					
			 },		
			 complete: function() {
				//jQuery('body .bodyoverlay').remove();
				jQuery('body .preloader').remove();					
			 },
			 success: function(res) {  
			   if(res['vehicles']['modevehicle'])
			   {
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
					var html='<div class="bodyoverlay"></div><div class="popupbox"><div class="popupimg"><img src="../images/pop.png" /></div><h1 class="success">&Eacute;XITO</h1><h1>'+res['vehicles']['modevehicle']+'</h1><button class="okbox">DE ACUERDO</button></div>';
					jQuery('body').append(html);
				}
				jQuery('.okbox').click(function(){
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
				}); 
				if(mode=='1'){
					jQuery($this).attr('coords',0);
					jQuery('i',$this).removeClass('fa-check');
					jQuery('i',$this).addClass('fa-times');
				}
				else if(mode=='0'){
					jQuery($this).attr('coords',1);
					jQuery('i',$this).removeClass('fa-times');
					jQuery('i',$this).addClass('fa-check');
					
				}
				return false;
			 },  
			 error: function(response, d, a){
				jQuery('body .bodyoverlay').remove();
				jQuery('body .popupbox').remove();
				var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Error del Servidor.</h1><button class="okbox">DE ACUERDO</button></div>';
				jQuery('body').append(html);
				
				jQuery('.okbox').click(function(){
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
				}); 
				
			 } 
		   });
		}
	});
}
function deleteuser()
{
	jQuery('.deleteuser').click(function(){
		var $this=jQuery(this);
		var id=jQuery(this).attr('vid');	
		var mode=jQuery(this).attr('coords');
		var url=siteurl+'/api/users';
		
		if(id!='' && mode!='')
		{
			jQuery.ajax({  
			 type: 'POST',  
			 url: url,  
			 //contentType: contentType,  
			 dataType: 'json',  
			 data: {id:id,deleteuser:1,uid:uid,lang:'es'},  
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
			   if(res['users']['modeuser'])
			   {
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
					var html='<div class="bodyoverlay"></div><div class="popupbox"><div class="popupimg"><img src="../images/pop.png" /></div><h1 class="success">&Eacute;XITO</h1><h1>'+res['users']['modeuser']+'</h1><button class="okbox">DE ACUERDO</button></div>';
					jQuery('body').append(html);
					
					var $this2=jQuery($this).parents('div.list');
					jQuery($this2).parent('div').remove();
				}
				jQuery('.okbox').click(function(){
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
				}); 
				
				return false;
			 },  
			 error: function(response, d, a){
				jQuery('body .bodyoverlay').remove();
				jQuery('body .popupbox').remove();
				var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Error del Servidor.</h1><button class="okbox">DE ACUERDO</button></div>';
				jQuery('body').append(html);
				
				jQuery('.okbox').click(function(){
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
				}); 
				
			 } 
		   });
		}
	});
}
function activdeactivuser()
{
	jQuery('.activdeactivuser').click(function(){
		var $this=jQuery(this);
		var id=jQuery(this).attr('vid');	
		var mode=jQuery(this).attr('coords');
		var url=siteurl+'/api/users';
		if(id!='' && mode!='')
		{
			jQuery.ajax({  
			 type: 'POST',  
			 url: url,  
			 //contentType: contentType,  
			 dataType: 'json',  
			 data: {id:id,mode:mode,uid:uid,lang:'es'},  
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
			   if(res['users']['modeuser'])
			   {
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
					var html='<div class="bodyoverlay"></div><div class="popupbox"><div class="popupimg"><img src="../images/pop.png" /></div><h1 class="success">&Eacute;XITO</h1><h1>'+res['users']['modeuser']+'</h1><button class="okbox">DE ACUERDO</button></div>';
					jQuery('body').append(html);
				}
				jQuery('.okbox').click(function(){
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
				}); 
				if(mode=='1'){
					jQuery($this).attr('coords',0);
					jQuery('i',$this).removeClass('fa-check');
					jQuery('i',$this).addClass('fa-times');
				}
				else if(mode=='0'){
					jQuery($this).attr('coords',1);
					jQuery('i',$this).removeClass('fa-times');
					jQuery('i',$this).addClass('fa-check');
					
				}
				return false;
			 },  
			 error: function(response, d, a){
				jQuery('body .bodyoverlay').remove();
				jQuery('body .popupbox').remove();
				var html='<div class="bodyoverlay"></div><div class="popupbox errorbox"><div class="popupimg"><img src="../images/error.png" /></div><h1 class="success">ERROR</h1><h1>Error del Servidor.</h1><button class="okbox">DE ACUERDO</button></div>';
				jQuery('body').append(html);
				
				jQuery('.okbox').click(function(){
					jQuery('body .bodyoverlay').remove();
					jQuery('body .popupbox').remove();
				}); 
				
			 } 
		   });
		}
	});
}