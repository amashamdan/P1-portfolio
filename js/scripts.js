for (var project in featuredProjects) {
	var section = '#' + featuredProjects[project].section;
	var title = featuredProjects[project].title;
	smallTitle = title.toLowerCase();
	smallTitle = smallTitle.replace(/ /g, "-");
	var link = featuredProjects[project].link; 
	var description = featuredProjects[project].description;
	$(section).append('<div class="col-3-center-align project" id="'+ smallTitle +'"><img class="project-photo"  src="images/'+ smallTitle +'.jpg" alt="A thumbnail of project"><h3 class="project-title">'+ title +'</h3><a class="project-link" target="blank" href="'+link+'">Project link</a><p class="project-details">'+ description +'</p></div>');
}

//Script to show details about a project once its photo is hovered
$(".project").hover(function(){
	var width = $(this).find(".project-photo").width();
	var top = $(this).find(".project-photo").position().top;
	var left = $(this).find(".project-photo").position().left;
	$(this).find(".project-details").css({"width": width, "top": top + 7, "left": left + 5});
	$(this).find(".project-details").fadeToggle("swing");
});



/*script for the functionality of the drawer
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
*/