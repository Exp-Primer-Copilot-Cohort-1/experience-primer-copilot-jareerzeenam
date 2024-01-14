function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberContent = document.getElementById("member-content");
    var skillsContent = document.getElementById("skills-content");
    var projectsContent = document.getElementById("projects-content");
    var contactContent = document.getElementById("contact-content");
    member.style.color = "#f1f1f1";
    skills.style.color = "#000000";
    projects.style.color = "#000000";
    contact.style.color = "#000000";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
}