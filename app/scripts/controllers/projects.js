'use strict';
angular
.module('angularPortfolioApp')
.controller('projectsController', function(){
    var projectsList = this;
    projectsList.data =[{
        title:'Flickr Image Search', image:'/images/projects/react-flickr.png', github: 'https://github.com/mlamont8/React-Flickr-Search', desc: 'This app offers an image search based on user provided search terms.  Images are provided using the Flickr API.  React is the library using React Router 4 along with Bootstrap for responsiveness.  ', link: 'https://react-flickr.firebaseapp.com/', tech:'React, React Router, Sass'
    },{
        title:'Whats Out – Movies/Tv Shows', image:'/images/projects/ent-lg.png', github: 'https://github.com/mlamont8/react-entertainment-search', desc: 'I decided to refactor my previous project from AngularJS to React.  With a few design changes, this was created using Bootstrap for responsiveness.  It calls the API from themoviedb.org and uses the resulting JSON to make Tv Show and Movie pages.  This also features a search feature for each category and a dynamic front page on page refreshes.', link: 'http://mlamont8.site', tech:'React, React-Bootstrap, Sass'
    },{
        title:'Better Weather', image:'/images/projects/better-weather.png', github: 'https://github.com/mlamont8/better-weather', desc: 'Another fine weather app built with React along with Bootstrap for responsiveness.  Using the API from Weather Underground, this app provides current weather information along with a 4 day forecast.  Search provided using a combination of the Google Places API and the Weather Underground.', link: 'https://better-weather-4407d.firebaseapp.com/', tech:'React, Sass, React-Bootstrap'
    },{
        title:'Movie/TV Entertainment search', image:'/images/projects/entsearch.png', github: 'https://github.com/mlamont8/entertainment-search', desc: 'This Entertainment search app was created with Yeoman AngularJS using the ui-router.  It takes the API from themoviedb.org and showcases popular and upcoming movies and TV shows.  Inner pages feature a search option based on user input.  CSS is built with SASS using the Materializecss framework.', link: 'https://movie-and-tv-search.firebaseapp.com/',tech: 'HTML5 ,Angularjs, Materializecss'
    }
    ];

});
