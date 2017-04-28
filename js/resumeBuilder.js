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
        "location": "Pakistan"
    },
    "welcomeMessage": "Hi, I'm Inzimam",
    "skills": [
        "JavaScript", "HTML5", "CSS3", "JQuery", "Git"
    ],
    "biopic": "images/fry.jpg",
    "display": function () {
        // console.log("bio display works!!");
        var role = HTMLheaderRole.replace("%data%", bio.role);
        $('#header').prepend(role);
        var name = HTMLheaderName.replace("%data%", bio.name);
        $('#header').prepend(name);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $('#topContacts').append(mobile);
        $('#footerContacts').append(mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        $('#topContacts').append(email);
        $('#footerContacts').append(email);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $('#topContacts').append(twitter);
        $('#footerContacts').append(twitter);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        $('#topContacts').append(github);
        $('#footerContacts').append(github);
        var mylocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $('#topContacts').append(mylocation);
        $('#footerContacts').append(mylocation);
        var picture = HTMLbioPic.replace("%data%", bio.biopic);
        $('#header').append(picture);
        var welcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $('#header').append(welcomemsg);
        $('#header').append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var skill = HTMLskills.replace("%data%", bio.skills[i]);
            $('#skills').append(skill);
        }

    }
};

bio.display();

var education = {
    "schools": [
        {
            "name": "FAST-NUCES",
            "location": "Pakistan",
            "degree": "BS-CS",
            "majors": [
                "Data Structures", "Algorithms", "Artificial Intelligence"
            ],
            "dates": "2012 - 2016",
            "url": "http://www.nu.edu.pk/"
        }, {
            "name": "GIKI",
            "location": "Pakistan",
            "degree": "Pre-Engineering",
            "majors": [
                "Maths", "Physics", "Chemistry"
            ],
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
        // body
        console.log("education display works!!");
    }
};

education.display();

var work = {
    "jobs": [
        {
            "employer": "CreativeXLab",
            "title": "Junior Web Developer",
            "location": "Pakistan",
            "dates": "May 2016 - Present",
            "description": "string"
        }, {
            "employer": "Self-Employed",
            "title": "WordPress Expert",
            "location": "Pakistan",
            "dates": "April 2015 - Present",
            "description": "string"
        }
    ],

    display: function () {
        // body
        console.log("work display works!!");
    }
};

work.display();

var projects = {
    "projects": [
        {
            "title": "Visualization of Air Pollution",
            "dates": "Dec 2015 - Dec 2016",
            "description": "Designed a Web Application that visualize the data of the pollution that is Carb" +
                    "on mono-oxide, Smoke, Dust and Noise. For this project we also built a device of" +
                    " Arduino and GPS with required sensors. Data was displayed in Google Maps via Go" +
                    "ogle Map API",
            "images": "197x148.gif"
        }, {
            "title": "Visualization of Air Pollution",
            "dates": "Dec 2015 - Dec 2016",
            "description": "Designed a Web Application that visualize the data of the pollution that is Carb" +
                    "on mono-oxide, Smoke, Dust and Noise. For this project we also built a device of" +
                    " Arduino and GPS with required sensors. Data was displayed in Google Maps via Go" +
                    "ogle Map API",
            "images": "197x148.gif"
        }
    ],

    display: function () {
        // body
        console.log("project display works!!");
    }
};

projects.display();