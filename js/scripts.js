for (var project in featuredProjects) {
	// The section where the project will go to is read.
	var section = '#' + featuredProjects[project].section;
	// The totle of the project is saved.
	var title = featuredProjects[project].title;
	/* Thge title is converted to small letters and then a dash replaces each space. This is done
	because the photo link will be found using the project name instead of hard coding the projet's
	image link. */
	smallTitle = title.toLowerCase();
	smallTitle = smallTitle.replace(/ /g, "-");
	/* The link of the project is saved. */
	var link = featuredProjects[project].link; 
	var description = featuredProjects[project].description;
	/* Each project is appended to its intended section. Each project will have a photo, title, link and a hidden description. */
	$(section).append('<div class="col-3-center-align project" id="'+ smallTitle +'"><img class="project-photo"  src="images/'+ smallTitle +'.jpg" alt="A thumbnail of project"><h3 class="project-title">'+ title +'</h3><a class="project-link" target="blank" href="'+link+'">Project link</a><p class="project-details">'+ description +'</p></div>');
	/* Capitalize first letter of each word in the title. */
	title = title.toLowerCase().replace(/\b[a-z]/g, function(match) {
		return match.toUpperCase();
	})
	/* Append a link of each project to the drawer. */
	$("#nav-menu-list").append('<li class="navbar-item"><a class="navbar-link" href="#'+smallTitle+'">'+title+'</a></li>')
}

//Script to show details about a project once its photo is hovered
$(".project").hover(function(){
	/* The description window will have the same width as the image. */
	var width = $(this).find(".project-photo").width();
	/* The position of the photo is found since the description will be above it. */
	var top = $(this).find(".project-photo").position().top;
	var left = $(this).find(".project-photo").position().left;
	/* The description div's css is modified, and then it is shown with fadeToggle. */
	$(this).find(".project-details").css({"width": width, "top": top + 7, "left": left + 5});
	$(this).find(".project-details").fadeToggle("swing");
});



/*script for the functionality of the drawer, clicking the menu will toggle the class open.*/
$(".menu").click(function() {
	$("#drawer").toggleClass("open");
});
/* Below clicking any element should close the drawer. */
$(".photo").click(function() {
	$("#drawer").removeClass("open");
})
$(".featured-work").click(function() {
	$("#drawer").removeClass("open");
})
$(".projects").click(function() {
	$("#drawer").removeClass("open");
})
$(".logo").click(function() {
	$("#drawer").removeClass("open");
})
$(".name").click(function() {
	$("#drawer").removeClass("open");
})
$(".title").click(function() {
	$("#drawer").removeClass("open");
})
$(".navbar-item").click(function() {
	$("#drawer").removeClass("open");
})
