/*
This is empty on purpose! Your code to build the resume will go here.
 */

//Add bio section
var bio = {
    name: "Ahmed Anwar",
    role: "Front-End Web Developer",
    bioPic: "images/fry.jpg",
    welcomeMessage: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    contacts: {
        mobile: "xxx-xxx-xxxx",
        email: "xxxxx@example.com",
        github: "xxxxxxxxx",
        location: "Canada"
    },
    skills: ["HTML", "CSS", "JavaScript"]
};
//display bio Section
bio.display = function () {
    //Add my role besides my name
    var MyRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(MyRole);

    //Add my name as header
    var headerName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(headerName);

    //Add welcome message
    var message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(message);

    //Add my image
    var myImage = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(myImage);

    //Adding my contacts
    var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#topContacts:last").append(myMobile);
    $("#topContacts:last").append(myEmail);
    $("#topContacts:last").append(myGithub);
    $("#topContacts:last").append(myLocation);

    //Add my skills
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

    //Let's connect sectio Footer
    $("#footerContacts:last").append(myMobile);
    $("#footerContacts:last").append(myEmail);
    $("#footerContacts:last").append(myGithub);
    $("#footerContacts:last").append(myLocation);
};
bio.display();



//Add my education Section
var education = {
    schools: [
        {
            name: "Alexandria University",
            location: "Egypt",
            degree: "BA",
            major: ["CS"],
            date: 2020
        }
    ],
    onlineCourses: [
        {
            title: "Intro to HTML and CSS",
            school: "Udacity",
            dates: 2020,
            url: "https://classroom.udacity.com/courses/ud001"
        },
        {
            title: "Intro to Computer Science",
            school: "Udacity",
            dates: 2018,
            url: "https://classroom.udacity.com/courses/cs101"
        }
    ]
};
//display education Section
education.display = function () {
    education.schools.forEach(function (school) {
        var schoolName = HTMLschoolName.replace("%data%", school.name) + HTMLschoolDegree.replace("%data%", school.degree);
        var schoolDates = HTMLschoolDates.replace("%data%", school.date);
        var schoolMajor = HTMLschoolMajor.replace("%data%", school.major);
        var schoolLocation = HTMLschoolLocation.replace("%data%", school.location);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(schoolName);
        $(".education-entry:last").append(schoolDates);
        $(".education-entry:last").append(schoolLocation);
        $(".education-entry:last").append(schoolMajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function (course) {

        var courseTitle = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
        var courseDates = HTMLonlineDates.replace("%data%", course.dates);
        var courseUrl = HTMLonlineURL.replace("%data%", course.url);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(courseTitle);
        $(".education-entry:last").append(courseDates);
        $(".education-entry:last").append(courseUrl);
    });
};
education.display();




//Add my work Section
var work = {
    jobs: [
        {
            "employer": "Udacity",
            "title": "Course Developer",
            "location": "Mountain View, CA",
            "dates": "Feb 2014 - Current",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "LearnBIG",
            "title": "Software Engineer",
            "location": "Seattle, WA",
            "dates": "May 2013 - Jan 2014",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        },
        {
            "employer": "Stratford High School",
            "title": "Science Teacher",
            "location": "Nashville, TN",
            "dates": "Jun 2009 - Jun 2012",
            "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
        }
    ]
};
//display work Section
work.displayWork = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployerTitle = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    });
}
work.displayWork();




//Add my project Section
var projects = {
    projects: [
        {
            title: "Sample Project 1",
            dates: "2014",
            description: "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg.",
            image: ["images/fry.jpg", "images/fry.jpg"]
        }
    ]
};
//display project section
projects.display = function () {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var projectDate = HTMLprojectDates.replace("%data%", project.dates);
        var projectDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(projectTitle);
        $(".project-entry:last").append(projectDate);
        $(".project-entry:last").append(projectDescription);

        if (project.image.length > 0) {
            for (var index = 0; index < project.image.length; index++) {
                var projectImg = HTMLprojectImage.replace("%data%", project.image[index]);
                $(".project-entry:last").append(projectImg);
            }
        }
    });
};
projects.display();




//this function will be used in the map section
function locationizer(workObj) {
    var locationArray = [];
    for (var index = 0; index < workObj.jobs.length; index++) {
        locationArray.push(workObj.jobs[index].location);
    }
    return locationArray;
}

//Internationalize my name
function inName(nameString) {
    var internationalName = nameString.split(" ");
    internationalName[1] = internationalName[1].toUpperCase();
    internationalName[0] = internationalName[0].slice(0, 1).toUpperCase() + internationalName[0].slice(1).toLowerCase();
    return internationalName.join(' ');
}

$("#mapDiv").append(googleMap);