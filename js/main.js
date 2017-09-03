$(document).ready(function(){

});


var app = angular.module('portfolio', []);

app.controller('featuredCtrl', function($scope) {
  $scope.articles = [
    {
      projectTitle: "Roslindale Village Main Street",
      skills:"HTML, CSS, JavaScript",
      description:"My first client site that I did coming into Resilient Lab and created the pages for scratch and following wireframes and design layouts.",
      photo:"img/rvms-13.png",
      link:"http://roslindale.net/",
      gitHub:"",
      groupOfPhotos:[]
    },
    {
      projectTitle: "Quilt",
      skills:"Ruby on Rails, SASS, Bootstrap",
      description:"An project that I worked on to make the mobile version to be adapted for desktop. I edited both the renter's insurance and life insurance.",
      photo:"img/Quilt.png",
      link:"",
      gitHub:"",
      groupOfPhotos:[]
    },
    {
      projectTitle: "Carolyn Whelan Portfolio",
      skills:"HTML, CSS, JavaScript, Angular 1.0",
      description:"This is a client site I worked on to showcase the work of writer Carolyn Whelan.",
      photo:"img/carolyn-whelan.png",
      link:"http://www.carolyn-whelan.com/",
      gitHub:"https://github.com/Resilient-Labs/carolyn-whelan",
      groupOfPhotos:[]
    }
  ];
});

// {
//   projectTitle: "",
//   skills:"",
//   description:"",
//   photo:"",
//   link:"",
//   gitHub:"",
//   groupOfPhotos:[]
// }
