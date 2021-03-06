'use strict';
angular
.module('angularPortfolioApp')
.controller('projectsController', function(){
    var projectsList = this;
    projectsList.data =[{
        title:'Flickr Image Search', image:'/images/projects/react-flickr.png', github: 'https://github.com/mlamont8/React-Flickr-Search', desc: 'This application offers an image search based on user provided search terms.  Images are returned using the API from Flickr.com.  Components were created using React ES6 modules .  Responsive with a mix of Bootstrap and a flexbox grid.', link: 'https://react-flickr.firebaseapp.com/', tech:'React, React Router, Bootstrap'
    },{
        title:'Whats Out – Movies/Tv Shows', image:'/images/projects/ent-lg.png', github: 'https://github.com/mlamont8/react-entertainment-search', desc: 'I decided to refactor my previous project from AngularJS to React.  With a few design changes, this was created using Bootstrap for responsiveness.  It calls the API from themoviedb.org and uses the resulting JSON to make Tv Show and Movie pages.  This also features a search feature for each category and a dynamic front page on page refreshes.', link: 'http://mlamont8.site', tech:'React, React-Bootstrap, Sass'
    },{
        title:'Better Weather', image:'/images/projects/better-weather.png', github: 'https://github.com/mlamont8/better-weather', desc: 'A weather application built with React along with Bootstrap for responsiveness.  Using the API from Weather Underground, this app provides current weather information along with a 4 day forecast.', link: 'https://better-weather-4407d.firebaseapp.com/', tech:'React, Sass, React-Bootstrap'
    },{
        title:'Movie/TV Entertainment search', image:'/images/projects/entsearch.png', github: 'https://github.com/mlamont8/EntertainmentPortal', desc: 'This Entertainment search app was created with Yeoman AngularJS using the ui-router.  It takes the API from themoviedb.org and showcases popular and upcoming movies and TV shows.  Inner pages feature a search option based on user input.  CSS is used along with the Materializecss framework.', link: 'https://ang-movie-tv-search.firebaseapp.com/',tech: 'HTML5 ,Angularjs, Materializecss'
    }
    ];

});
