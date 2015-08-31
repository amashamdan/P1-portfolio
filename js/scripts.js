/*Script to show details about a project once its photo is hovered*/
$("#online-resume").hover(function(){
	var top = (($("#online-resume").position()).top) + $("#online-resume").height() + 55;
	$(".online-resume-details").css({ "top": top+"px"});
	$(".online-resume-details").fadeToggle();
});

$("#arcade-game").hover(function(){
	var top = (($("#arcade-game").position()).top) + $("#arcade-game").height() + 55;
	$('.arcade-game-details').css({ 'top': top+"px"});
	$(".arcade-game-details").fadeToggle();
});

$("#website-optimization").hover(function(){
	var top = (($("#website-optimization").position()).top) + $("#website-optimization").height() + 55;
	$(".website-optimization-details").css({ "top": top+"px"});
	$(".website-optimization-details").fadeToggle();
});

$("#neighborhood-map").hover(function(){
	var top = (($("#neighborhood-map").position()).top) + $("#neighborhood-map").height() + 55;
	$(".neighborhood-map-details").css({ "top": top+"px"});
	$(".neighborhood-map-details").fadeToggle();
});

$("#feed-reader").hover(function(){
	var top = (($("#feed-reader").position()).top) + $("#feed-reader").height() + 55;
	$(".feed-reader-details").css({ "top": top+"px"});
	$(".feed-reader-details").fadeToggle();
});

$("#project6").hover(function(){
	var top = (($("#project6").position()).top) + $("#project6").height() + 55;
	$(".project6-details").css({ "top": top+"px"});
	$(".project6-details").fadeToggle();
});
/*script for the functionality of the drawer*/
var menu = document.querySelector(".menu");
var header = document.querySelector(".header");
var photo = document.querySelector(".photo");
var featured = document.querySelector(".featured-work");
var projects = document.querySelector(".projects");

menu.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
});

header.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
})

photo.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
})

featured.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
})

projects.addEventListener('click', function(e) {
	drawer.classList.toggle('open');
	e.stopPropagation();
})
