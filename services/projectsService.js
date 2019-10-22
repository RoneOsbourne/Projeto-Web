const fs = require('fs');

var getProjects = function() {

    projects = fs.readFileSync('db/projects.json', 'utf8');
    console.log(projects);
    projects = JSON.parse(projects);
    
    return projects;

  }
  
  var projectsFilePath = 'db/projects.json';
  
  var loadFileProjects = function() {
    var fileData = fs.readFileSync(projectsFilePath, 'utf8');
    var projects = JSON.parse(fileData);
  
    return projects;
  }
  
  var getProjects = function() {
    var projects = loadFileProjects();
    return projects;
  }
  
  var saveFileProjects = function(projects) {
    var data = JSON.stringify(projects);
    fs.writeFileSync(projectsFilePath, data, 'utf8');
  }
  
  var saveProjects = function(newProject) {
    var projects = loadFileProjects();
    projects.push(newProject);
    saveFileProjects(projects);
  }

  module.exports = {
    getProjects: getProjects,
    saveProjects: saveProjects
  }