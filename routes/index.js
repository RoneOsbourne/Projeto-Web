var express = require('express');
var router = express.Router();
var postsService = require('../services/postsService');
var projectsService = require('../services/projectsService');
var executivo = require('../services/executivo');

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('menu', { title: 'Página Web'});
});

router.get('/projects', function(req, res, next) {
  var projects = projectsService.getProjects();

  res.render('projects', { title: 'Projetos', projects: projects });
});

router.get('/equipe', function(req, res, next) {
  var equipe = executivo.getIntegrantes();  

  res.render('equipe', { title: 'Sobre', equipe: equipe});
});

router.get('/index', function(req, res, next) {
  var posts = postsService.getPosts();

  res.render('index', { title: 'Minhas postagens', posts: posts });
});

router.get('/project/:projectId', function(req, res, next) {
  
  var projectId = req.params.projectId;

  var projects = projectsService.getProjects();

  var project = projects.filter((project) => project.id == projectId)[0];

  res.render('project', { title: 'Projetos', project: project});
});

router.get('/posts/:postId', function(req, res, next) {
  var postId = req.params.postId;

  var posts = postsService.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', { title: post.title, post: post });

});

module.exports = router;
