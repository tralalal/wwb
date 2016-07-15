function OpenNavigation() {
	var  navigation = document.getElementById("navbar");
	var html = document.getElementById("html");
	navigation.style.width = "300px";
	html.style.backgroundColor = "lightblue";
}
function closeNavigation() {
	var element = document.getElementById("closeBtn");
	var html = document.getElementById("html");
	element.style.width = "0px";
	html.style.backgroundColor = "none";
}

function zoom() {
	var eleme = document.getElementById("block1");
	eleme.style.display = "block";
}