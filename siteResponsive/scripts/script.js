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
		}, 400, "easeOutCubic",function(){}
		);
}

