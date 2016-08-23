$("#navBar").hide();

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
function initialiseStellar(){
	var isDesktop = (function() {
  		return !('ontouchstart' in window) 
  			|| !('onmsgesturechange' in window); 
 	})();
 
 	window.isDesktop = isDesktop;
 	if( isDesktop && parseInt($("#landingPage").css("width"),10) > 750){
 		console.log("stellar initialised");
 		$.stellar();
 	}else{
 		console.log("stellar not initialised");
 	}
}

$(document).ready(function(){
	initialiseStellar();
	$("h1").stellar();
	animateIcons();
	$(window).bind("scroll", scrollOpacityEffect);
	$(window).bind("scroll", toggleNavBar);
});

//animate icons on landing page
function iconEntered(){
	$(this).css("fontSize", "35px");
}	

function iconExited(){
	$(this).css("fontSize", "30px");
}

function animateIcons(){
	$(".sMedia").hover(iconEntered, iconExited);
}


//menu bar slide down
function toggleNavBar(){
	if(parseInt($(window).scrollTop(), 15) > 50){
		$("#navBar").slideDown(500);
	}else{
		$("#navBar").slideUp(300);
	}
}

//fade text opacity
var startOffset = parseInt( $("h1").offset()["top"],10);
function scrollOpacityEffect(){
	var currentOffset = parseInt($(window).scrollTop(), 10);
	var adjustment = 0.8;
	var opacity = (startOffset - currentOffset)/startOffset;
	(opacity === 1) ? opacity : opacity*=adjustment;
	if(opacity >= 0){
		$("h1").css("opacity", opacity);
	}
}

//checking if dropdown worked