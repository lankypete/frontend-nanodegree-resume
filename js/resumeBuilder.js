//who am I?

 var name = "Dean Glueckler";

 var role = "Front-End Developer"

 var skills = ["Long Arms", "Long Legs", "Lots of Sheep", "“Wolf Sheep”"];


 var bio = {
 	"name" : name,
 	"role" : role,
 	"contacts" : { "mobile" : "437 655 7474",
				 	"email" : "queensalive@gmail.com",
				 	"github" : "github.com",
				 	"twitter" : "twitter.com",
				 	"location" : "1111 Empress Ave Victoria BC"
    },
 	"welcomeMessage" : "Hi I love you",
 	"skills" : skills,
 	"contactInfo" : "587-437-6509",
 	"picURL" : "http://img2.wikia.nocookie.net/__cb20121128194900/johnnybravo/images/9/9a/Johnny_bravo_004.gif",
 	"display" : function bioDisplay(){
 	//Display name Dean Glueckler
 	formatName = HTMLheaderName.replace("%data%", bio.name);
 	$("#header").append(formatName);
 	//Display Top Contacts
 	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
 	var email = HTMLemail.replace("%data%", bio.contacts.email);
 	var github = HTMLgithub.replace("%data%", bio.contacts.github);
 	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
 	var location = HTMLlocation.replace("%data%", bio.contacts.location);
 	$("#topContacts").append(mobile + email /*+ github + twitter*/ + location);
 	//Display skills
 	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills){
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
	}
	//Display Picture
	formatPic = HTMLbioPic.replace("%data%", bio.picURL);
	$("#header").prepend(formatPic);
 }
 };
console.log(bio.contacts.location);
console.log(bio.display.location);
 bio.display();



var education = {
"schools" :
 [
{
"name" : "University of Calgary",
"location" : "Calgary AB",
"degree" : "Bachlor of Science",
"majors" : "Mechanical Engineering",
"dates" : "2009 - 2014",
"url" : "http://www.ucalgary.com/"
}
],
"onlineCourses" : [
{
"title" : "Front-End Web Dev",
"school" : "Udacity",
"dates" : "2015 - 16",
"url" : "http://www.udacity.com/"
}
],
"display" : function educationDisplay() {

	for(school in education.schools){
	$("#education").append(HTMLschoolStart);
	var formatName = HTMLschoolName.replace("%data%", education.schools[school].name).
		replace("#", education.schools[school].url);
	var formatLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	var formatdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	var formatMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
	var formatDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

	$(".education-entry:last").append(formatName + formatdegree + formatDates + formatLocation +
		 formatMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for(course in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formatName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title).
		replace("#", education.onlineCourses[course].url);
		formatSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		formatDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		formatUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).
		replace("#", education.onlineCourses[course].url);
		$(".education-entry:last").append(formatName + formatSchool + formatDates + formatUrl);
	}

}
};

education.display();


var work = {
	"jobs" :
	[
	{
	"employer" : "Straight Up Cycles",
	"title" : "Bicycle Retailer",
	"city" : "Victoria",
	"length" : "7 mo - April to Nov 2015",
	"Description" : "Finding the perfect bike for customers \
					<br>Sweeping floors \
					<br>Cleaning washrooms"
	},
	{
	"employer" : "University of Calgary",
	"title" : "Lab Tech",
	"city" : "Calgary",
	"length" : "4 mo - May to Sept 2013",
	"Description" : "Building Sterling Engines \
					<br>Writing reports \
					<br>Cleaning washrooms"
	}
	],
	"display" : function displayWork(){
	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", "http://www.straightupcycles.ca/");
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].length);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].city);

	var formattedDescrip = HTMLworkDescription.replace("%data%", work.jobs[job].Description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescrip);

}
}
};

work.display();

var projects = {
	"Udacity" :
	[
	{
		"projectname" : "Project 1",
		"projdates" : "Sept 2015",
		"description" : "Build a Portfolio Site",
		"image" : ""
	},
	{
		"projectname" : "Project 2",
		"projdates" : "NOW",
		"description" : "Build an Online Resume",
		"image" : ""
	}
	],
	"display" : function displayProjects(){

	for(proj in projects.Udacity){
		$("#projects").append(HTMLprojectStart);
		var formattedName = HTMLprojectTitle.replace("%data%", projects.Udacity[proj].projectname);
		var formattedDate = HTMLprojectDates.replace("%data%", projects.Udacity[proj].projdates);
		var formattedDesc = HTMLprojectDescription.replace("%data%", projects.Udacity[proj].description);
		if(projects.Udacity[proj].image > 0){
		var formattedPic = HTMLprojectImage.replace("%data%", projects.Udacity[proj].image);
		}
		else{
			var formattedPic = "";
		}


		$(".project-entry:last").append(formattedName + formattedDate + formattedDesc + formattedPic);
	}
}
};

projects.display();


$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
