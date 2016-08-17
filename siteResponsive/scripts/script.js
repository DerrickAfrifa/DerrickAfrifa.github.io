

$("#menu").click(function () {
	if ($(navBar).css("marginLeft") != "0px") {	
		slideMenu("0px");
	}else{
		slideMenu("-100%");
	}
});

//re-collapses menu bar after link clicked
$(".topLinks").click(collapseMenu);

//collapses menu
function collapseMenu(){
	var width = parseInt($("#navBar").css("width"), 10);
	if (width < 450) {
		$("#navBar").css("marginLeft", "-100%");
	}
}

//slides menu in or out depending on state
function slideMenu(destination){
	$("#navBar").animate({
			marginLeft: destination
		}, 400);
}

//parallax scrolling

function loadScript(){
	var isDesktop = (function() {
  		return !('ontouchstart' in window) 
  			|| !('onmsgesturechange' in window); 
 	})();
 
 	window.isDesktop = isDesktop;
 	if( isDesktop ){
 		//var stellarUrl = "siteResponsive/scripts/jquery.stellar.js";
 		var migrateuRL = "siteResponsive/scripts/jquery-migrate-3.0.0.js";
		$.getScript(migrateuRL, function(){console.log("migration success!")}); 	
		//$.getScript(stellarUrl, function(){console.log("stellar success!")});
 	}
}

loadScript();
$(document).ready(function(){
	$.stellar();
});

