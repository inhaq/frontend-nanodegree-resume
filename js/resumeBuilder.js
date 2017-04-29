/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Inzimam Ul Haq",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "+92-346-6374133",
        "email": "hi@inzi.me",
        "github": "@inhaq",
        "twitter": "inzi_me",
        "location": "Tarbela, Pakistan"
    },
    "welcomeMessage": "Hi, I'm Inzimam",
    "skills": [
        "JavaScript",
        "HTML5",
        "CSS3",
        "JQuery",
        "BootStrap",
        "Responsive Web Design",
        "Git & GitHub"
    ],
    "biopic": "images/fry.jpg",
    "display": function () {
        
        var role = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(role);
        var name = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(name);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(mobile);
        $("#footerContacts").append(mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(email);
        $("#footerContacts").append(email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(twitter);
        $("#footerContacts").append(twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(github);
        $("#footerContacts").append(github);
        var mylocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(mylocation);
        $("#footerContacts").append(mylocation);
        var picture = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(picture);
        var welcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(welcomemsg);
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var skill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(skill);
        }

    }
};

bio.display();

var work = {
    "jobs": [
        {
            "employer": "CreativeXLab",
            "title": "Front-End Web Developer",
            "location": "Peshawar, Pakistan",
            "dates": "May 2016 - Present",
            "description": "Collaborated with team for several projects such as Learning Management System and Hotel Mangement System etc."
        }, {
            "employer": "Self-Employed",
            "title": "Web Developer",
            "location": "Tarbela, Pakistan",
            "dates": "April 2015 - Present",
            "description": "Worked for several clients which includes customization of WordPress sites according to the client preferences, tackling security issues, increasing site performance and SEO. "
        }
    ],

    display: function () {
        
        $('#workExperience').append(HTMLworkStart);
        for (var i = 0; i < work.jobs.length; i++) {
            var workEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            $(".work-entry").append(workEmployer);
            var workTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            $(".work-entry").append(workTitle);
            var workDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry").append(workDates);
            var workLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry").append(workLocation);
            var workDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry").append(workDescription);
        }
    }
};

work.display();

var projects = {
    "projects": [
        {
            "title": "Visualization of Air Pollution",
            "dates": "Dec 2015 - Dec 2016",
            "description": "Designed a Web Application(BS-CS FYP) that visualize the data of the pollution that is Carbon mono-oxide, Smoke, Dust and Noise. For this project we also built a device of Arduino and GPS with required sensors. Data was displayed in Google Maps via Google Map API. We were two friends in group.",
            "images": "images/197x148.gif"
        }, {
            "title": "Library Management System",
            "dates": "Sep 2015 - Dec 2015",
            "description": "Developed a Web App for University's Library as a semester Project. We were 8 members in team.",
            "images": "images/197x148.gif"
        }
    ],

    display: function () {
        // body
        $("#projects").append(HTMLprojectStart);
        for (var i = 0; i < projects.projects.length; i++) {
            var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry").append(projectTitle);
            var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry").append(projectDates);
            var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry").append(projectDescription);
            var projectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry").append(projectImage);
        }

    }
};

projects.display();

var education = {
    "schools": [
        {
            "name": "FAST-NUCES",
            "location": "Peshawar, Pakistan",
            "degree": "BS-CS",
            "majors": "Computer Science",
            "dates": "2012 - 2016",
            "url": "http://www.nu.edu.pk/"
        }, {
            "name": "GIKI",
            "location": "Topi, Pakistan",
            "degree": "Pre-Engineering",
            "majors": "HSSC",
            "dates": "2010 - 2012",
            "url": "http://www.giki.edu.pk/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End NanoDegree",
            "school": "Udacity",
            "dates": "2017 - Present",
            "url": "https://www.udacity.com/"
        }, {
            "title": "Full Stack JavaScript Development",
            "school": "FreeCodeCamp",
            "dates": "2017 - Present",
            "url": "https://www.freecodecamp.com/"
        }
    ],

    "display": function () {
        
        $("#education").append(HTMLschoolStart);
        for (var i = 0; i < education.schools.length; i++) {
            var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            $(".education-entry").append(schoolName);
            var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            $(".education-entry").append(schoolDegree);
            var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            $(".education-entry").append(schoolDates);
            var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            $(".education-entry").append(schoolLocation);
            var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry").append(schoolMajor);
        }
        $(".education-entry").append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            $(".education-entry").append(onlineTitle);
            var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            $(".education-entry").append(onlineSchool);
            var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            $(".education-entry").append(onlineDates);
            var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
            $(".education-entry").append(onlineURL);
        }
    }
};

education.display();

    $("#mapDiv").append(googleMap);